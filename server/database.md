# 数据库

## 数据库创建记录

新建用户。

```mysql
CREATE DATABASE webe;

CREATE USER 'webe-admmin'@'localhost' IDENTIFIED BY '7mIZORyxmTEx';
use mysql;
flush privileges; 

GRANT ALL ON webe.* TO 'webe-admmin'@'localhost';

use webe;
```

创建用户表。属性为：

1. user_id. 用户id
2. mail. 邮箱
3. name. 昵称
4. password. 密码
5. url. 主页
6. auth. 权限组

```mysql
CREATE TABLE IF NOT EXISTS webe_user(
  user_id int unsigned PRIMARY KEY AUTO_INCREMENT,
  mail varchar(200) UNIQUE NOT NULL,
  name varchar(32) UNIQUE NOT NULL,
  password varchar(64) NOT NULL,
  url varchar(200) DEFAULT NULL,
  auth varchar(16) DEFAULT 'visitor'
)CHARSET=utf8;

INSERT INTO webe_user
(mail, name, password, url, auth)
VALUES
("admin@devp.com", "admin", "login-password", "devp.com", "root");
```

创建文章标签表。主要属性为：

1. tag_id. 标签id
2. name. 标签名字

```mysql
CREATE TABLE IF NOT EXISTS webe_tag(
  tag_id int unsigned PRIMARY KEY AUTO_INCREMENT,
  name varchar(32) UNIQUE NOT NULL
)CHARSET=utf8;

INSERT INTO webe_tag 
(name)
VALUES
(""),
("tag-1"),
("tag-2"),
("tag-3"),
("tag-4");
```

创建文章表。主要属性为：

1. article_id. 文章aid
2. user_id. 作者uid
3. tag_id. 标签id
4. title. 标题
5. abstract. 摘要
6. picture. 封面图片url
7. text. 正文内容
8. ranking. 排序重要性，可用于置顶
9. status. 文章状态，可以是 `published`、`hidden`。
10. views. 文章浏览量
11. creation_time. 创建时间

```mysql
CREATE TABLE IF NOT EXISTS webe_article(
  article_id int unsigned PRIMARY KEY AUTO_INCREMENT,
  user_id int unsigned NOT NULL,
  tag_id int unsigned NOT NULL DEFAULT 2,
  title varchar(200) NOT NULL,
  abstract varchar(200) NOT NULL DEFAULT "None",
  picture varchar(200) DEFAULT NULL,
  text longtext,
  ranking int unsigned NOT NULL DEFAULT 0,
  status varchar(16) NOT NULL DEFAULT "published",
  views int unsigned NOT NULL DEFAULT 0,
  creation_time DATETIME DEFAULT NULL,
  FOREIGN KEY(user_id) REFERENCES webe_user(user_id),
  FOREIGN KEY(tag_id) REFERENCES webe_tag(tag_id)
)CHARSET=utf8;
```

```mysql
INSERT INTO webe_article 
(user_id, tag_id, title, abstract, picture, creation_time, text)
VALUES
(1, 2, "Title", "Abstract. Abstract. Abstract. Abstract. Abstract. Abstract. Abstract. Abstract. Abstract. Abstract. Abstract. Abstract.", "https://s1.ax1x.com/2020/09/26/0PcQSI.jpg", "2021-08-04 02:26:00", "# AAAAAA");
```
