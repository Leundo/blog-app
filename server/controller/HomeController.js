const { mysqlQuery } = require('../util/Db');

// 根据文章cid获取文章、作者以及标签信息
/* POST {{base_url}}/home/get-article
    body {
        article_id
    }
*/ 
const getArticle = async (req, res, next) => {
    // console.log(req.cookies);

    let {article_id} = req.body;
    let args = [article_id];
    let sql = "SELECT article_id, webe_user.name AS user_name, \
    webe_tag.name AS tag_name, \
    title, \
    abstract, \
    picture, \
    text, \
    views, \
    creation_time \
    FROM webe_user, webe_tag, webe_article \
    WHERE webe_article.status = 'published' AND\
    webe_user.user_id = webe_article.user_id AND \
    webe_tag.tag_id = webe_article.tag_id AND \
    webe_article.article_id = ?";
    
    try {
        let data = await mysqlQuery(sql, args);
        res.status(200).send(data);
    } catch (err) {
        next(err);
    }
    
}

// 获取主页一页文章信息以及总文章数
/* POST {{base_url}}/home/get-articles
    body {
        current 目前的页数(从0开始)
        pageSize 获取的条目数
    }
*/ 
const getArticles = async (req, res, next) => {
    let {current, pageSize} = req.body;
    current = parseInt(current, 10);
    pageSize = parseInt(pageSize, 10);

    let begin = current * pageSize;
    let offset = pageSize;

    let args = [begin, offset];
    let total;
    let sql1 = "SELECT COUNT(status = 'published') AS total FROM webe_article";
    let sql2 = "SELECT article_id, webe_user.name AS user_name, \
    webe_tag.name AS tag_name, \
    title, \
    abstract, \
    picture, \
    creation_time \
    FROM webe_user, webe_tag, webe_article \
    WHERE webe_article.status = 'published' AND\
    webe_user.user_id = webe_article.user_id AND \
    webe_tag.tag_id = webe_article.tag_id \
    ORDER BY ranking DESC, creation_time DESC \
    LIMIT ?, ?";

    try {
        total = await mysqlQuery(sql1, "");
    } catch (err) {
        next(err);
    }

    try {
        let data = await mysqlQuery(sql2, args);
        res.status(200).send({
            'total': total[0].total,
            'articles': data,
        });
    } catch (err) {
        next(err);
    }
}



module.exports = {
    getArticle,
    getArticles,
}