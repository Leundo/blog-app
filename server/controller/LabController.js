const { mysqlQuery } = require('../util/Db');
const md5 = require("blueimp-md5");

const config = {
    athuUsername: "admin",
    md5Password: "ca7ad7f7dc0531f29b930ef641abe57d",
    cookieMaxAge: "43200",
}

const authenticate = (nick) => {
    if (nick === null || nick === undefined) {
        return null;
    }
    let tmp = nick.split("-");
    let username = tmp[0];
    let timestamp = tmp[1];
    let now = Math.floor(Date.now()/1000);
    
    if (username === config.athuUsername && now - timestamp < config.cookieMaxAge) {
        return username;
    }
    return null;
}

// 根据用户名, 密码登陆, 返回cookie
/* POST {{base_url}}/lab/query-certification
    body {
        username
        password
    }
*/ 
const getCertification = async (req, res, next) => {
	const {username, password} = req.body;

    if (username === null || username === undefined || password  === null || password === undefined) {
        res.status(400).send({
            'code': 400,
        });
        return;
    } else if (md5(password) !== config.md5Password || username !== config.athuUsername) {
        res.status(200).send({
            'code': 400,
        });
        return;
    }

    let timestamp = Math.floor(Date.now()/1000);
    res.cookie('nick', 'admin-'+timestamp, {maxAge: config.cookieMaxAge * 1000, path: '/', signed: true});
    res.status(200).send({
        'code': 200,
    });
}

// 根据 cookie 确认身份
/* POST {{base_url}}/lab/query-username
    body {
    }
*/ 
const getUsername = async (req, res, next) => {
    let username = authenticate(req?.signedCookies?.nick);
    if (username === null) {
        res.status(200).send({
            'data': null,
            'code': 400,
        });
        return;
    } else {
        res.status(200).send({
            'data': username,
            'code': 200,
        });
        return;
    }
}

// 根据文章 aid 获取文章全部信息
/* POST {{base_url}}/lab/get-advanced-article
    body {
        article_id
    }
*/ 
const getAdvancedArticle = async (req, res, next) => {
    let username = authenticate(req?.signedCookies?.nick);
    if (config.athuUsername !== username) {
        res.status(400).send({
            'data': null,
            'code': 400,
        });
        return;
    } else {
        let {article_id} = req.body;
        let args = [article_id];
        let sql = "SELECT article_id, \
        user_id, \
        tag_id, \
        title, \
        abstract, \
        picture, \
        text, \
        ranking, \
        status, \
        creation_time \
        FROM webe_article \
        WHERE webe_article.article_id = ?";

        try {
            let data = await mysqlQuery(sql, args);
            res.status(200).send({
                'data': data,
                'code': 200,
            });
        } catch (err) {
            res.status(400).send({
                'data': null,
                'code': 400,
            });
            next(err);
        }
    }
}

// 添加文章
/* POST {{base_url}}/lab/post-article
    body {
        user_id,
        tag_id,
        title,
        abstract,
        picture,
        text,
        ranking,
        status,
        creation_time,
    }
*/ 
const postArticle = async (req, res, next) => {
    let username = authenticate(req?.signedCookies?.nick);
    if (config.athuUsername !== username) {
        res.status(400).send({
            'data': null,
            'code': 400,
        });
        return;
    } else {
        let {user_id, tag_id, title, abstract, picture, text, ranking, status, creation_time} = req.body;
        let args = [user_id, tag_id, title, abstract, picture, text, ranking, status, creation_time];
        let sql = "INSERT INTO webe_article \
        (user_id, tag_id, title, abstract, picture, text, ranking, status, creation_time) VALUES \
        (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            let data = await mysqlQuery(sql, args);
            res.status(200).send({
                'data': data,
                'code': 200,
            });
        } catch (err) {
            res.status(400).send({
                'data': null,
                'code': 400,
            });
            next(err);
        }
    }
}

// 更新文章
/* POST {{base_url}}/lab/put-article
    body {
        article_id,
        user_id,
        tag_id,
        title,
        abstract,
        picture,
        text,
        ranking,
        status,
        creation_time,
    }
*/ 
const putArticle = async (req, res, next) => {
    let username = authenticate(req?.signedCookies?.nick);
    if (config.athuUsername !== username) {
        res.status(400).send({
            'data': null,
            'code': 400,
        });
        return;
    } else {
        let {article_id, user_id, tag_id, title, abstract, picture, text, ranking, status, creation_time} = req.body;
        let args = [user_id, tag_id, title, abstract, picture, text, ranking, status, creation_time, article_id];
        let sql = "UPDATE webe_article SET \
        user_id = ?, \
        tag_id = ?, \
        title = ?, \
        abstract = ?, \
        picture = ?, \
        text = ?, \
        ranking = ?, \
        status = ?, \
        creation_time = ? \
        WHERE article_id = ?";

        try {
            let data = await mysqlQuery(sql, args);
            res.status(200).send({
                'data': data,
                'code': 200,
            });
        } catch (err) {
            res.status(400).send({
                'data': null,
                'code': 400,
            });
            next(err);
        }
    }
}

module.exports = {
    getCertification,
    getUsername,
    getAdvancedArticle,
    postArticle,
    putArticle,
}
