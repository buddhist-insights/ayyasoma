#!/bin/bash

set -eu
cd "$(dirname "$0")"

IMPORT_SQL=btycqqsp_wp360.sql
IMPORT_PREFIX=wp5j_

lando destroy -y

lando init \
  --source cwd \
  --recipe lamp \
  --webroot . \
  --name ayyasoma

lando start

lando db-import "$IMPORT_SQL"

cat <<EOF | lando exec database -- mysql -u root | grep ^RENAME | lando exec database -- mysql -u root
  SELECT CONCAT(
    'RENAME TABLE ',
    TABLE_SCHEMA, '.', TABLE_NAME,
    ' TO ',
    TABLE_SCHEMA, '.wp_', TRIM(LEADING '$IMPORT_PREFIX' FROM TABLE_NAME),
    ';'
  ) from information_schema.Tables where TABLE_SCHEMA='lamp';
EOF

cat <<EOF | lando exec database -- mysql -u root lamp
  DROP TABLE wp_commentmeta;
  DROP TABLE wp_comments;
  DROP TABLE wp_links;
  DROP TABLE wp_options;
  DROP TABLE wp_usermeta;
  DROP TABLE wp_users;
  DROP TABLE wp_wpmm_subscribers;
  DROP TABLE wp_wpzerospam_blocked;
  DROP TABLE wp_wpzerospam_log;
  UPDATE wp_posts SET post_author = 1;
EOF

cat <<EOF | lando exec database -- mysql -u root lamp
  DELETE FROM wp_posts WHERE
    post_type IN (
      'wpcf7_contact_form'
    );

  DELETE wp_postmeta FROM wp_postmeta LEFT JOIN wp_posts
    ON wp_posts.ID = wp_postmeta.post_id
    WHERE wp_posts.ID IS NULL;

  UPDATE wp_posts SET
    guid = REPLACE(guid, 'http://ayyasoma.com/', 'https://ayyasoma.lndo.site/');
  UPDATE wp_posts SET
    guid = REPLACE(guid, 'https://ayyasoma.com/', 'https://ayyasoma.lndo.site/');
  UPDATE wp_posts SET
    post_content = REPLACE(post_content, 'http://ayyasoma.com/', '/');
  UPDATE wp_posts SET
    post_content = REPLACE(post_content, 'https://ayyasoma.com/', '/');
EOF

lando exec database -- mysqldump -u root -t lamp > adjusted.sql
perl -pi -e 's/^LOCK TABLES `(.*)` WRITE;/LOCK TABLES `$1` WRITE;\nTRUNCATE TABLE `$1`;/g' adjusted.sql
