import axios from 'axios';

const washMarkdown = (text) => {
    // return text.replace('\n', "\\n");
    return text;
}

const apiGetArticles = (current, pageSize, callback) => {
    axios({
        url: "/api/home/get-articles",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'current': current,
            'pageSize': pageSize,
        },
        method: "post",
    }).then(res => {
        callback(res);
    }).catch(err => {
        console.error(err);
    });
}

const apiGetArticle = (articleId, callback) => {
    axios({
        url: "/api/home/get-article",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'article_id': articleId,
        },
        method: "post",
    }).then(res => {
        callback(res);
    }).catch(err => {
        console.error(err);
    });
}


const apiGetAdvancedArticle = (articleId, callback) => {
    axios({
        url: "/api/lab/get-advanced-article",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'article_id': articleId,
        },
        method: "post",
    }).then(res => {
        callback(res);
    }).catch(err => {
        console.error(err);
    });
}

const apiGetCertification = (username, password, callback) => {
    axios({
        url: "/api/lab/get-certification",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'username': username,
            'password': password,
        },
        method: "post",
    }).then(res => {
        callback(res);
    }).catch(err => {
        console.error(err);
    });
}

const apiGetUsername = (callback) => {
    axios({
        url: "/api/lab/get-username",
        headers: {
            "accepts": "application/json"
        },
        data: {
        },
        method: "post",
    }).then(res => {
        callback(res, null);
    }).catch(err => {
        callback(null, err);
        console.error(err);
    });
}

const apiPostArticle = (userId, tagId, title, abstract, picture, text, ranking, status, creation_time, callback) => {
    axios({
        url: "/api/lab/post-article",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'user_id': userId,
            'tag_id': tagId,
            'title': title,
            'abstract': abstract,
            'picture': picture,
            'text': washMarkdown(text),
            'ranking': ranking,
            'status': status,
            'creation_time': creation_time,
        },
        method: "post",
    }).then(res => {
        callback(res, null);
    }).catch(err => {
        callback(null, err);
        console.error(err);
    });
}

const apiPutArticle = (articleId, userId, tagId, title, abstract, picture, text, ranking, status, creation_time, callback) => {
    axios({
        url: "/api/lab/put-article",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'article_id': articleId,
            'user_id': userId,
            'tag_id': tagId,
            'title': title,
            'abstract': abstract,
            'picture': picture,
            'text': washMarkdown(text),
            'ranking': ranking,
            'status': status,
            'creation_time': creation_time,
        },
        method: "post",
    }).then(res => {
        callback(res, null);
    }).catch(err => {
        callback(null, err);
        console.error(err);
    });
}

const apiGetSnapshot = (snapshotToken, callback) => {
    axios({
        url: "/api/s/get-snapshot",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'snapshot_token': snapshotToken,
        },
        method: "post",
    }).then(res => {
        callback(res);
    }).catch(err => {
        console.error(err);
    });
}

const apiGetAdvancedSnapshot = (snapshotId, callback) => {
    axios({
        url: "/api/s/get-advanced-snapshot",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'snapshot_id': snapshotId,
        },
        method: "post",
    }).then(res => {
        callback(res);
    }).catch(err => {
        console.error(err);
    })
}

const apiPostSnapshot = (snapshotToken, userId, tagId, title, text, status, creation_time, callback) => {
    axios({
        url: "/api/s/post-snapshot",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'user_id': userId,
            'snapshot_token': snapshotToken,
            'tag_id': tagId,
            'title': title,
            'text': washMarkdown(text),
            'status': status,
            'creation_time': creation_time,
        },
        method: "post",
    }).then(res => {
        callback(res, null);
    }).catch(err => {
        callback(null, err);
        console.error(err);
    });
}

const apiPutSnapshot = (snapshotId, snapshotToken, userId, tagId, title, text, status, creation_time, callback) => {
    axios({
        url: "/api/s/put-snapshot",
        headers: {
            "accepts": "application/json"
        },
        data: {
            'snapshot_id': snapshotId,
            'snapshot_token': snapshotToken,
            'user_id': userId,
            'tag_id': tagId,
            'title': title,
            'text': washMarkdown(text),
            'status': status,
            'creation_time': creation_time,
        },
        method: "post",
    }).then(res => {
        callback(res, null);
    }).catch(err => {
        callback(null, err);
        console.error(err);
    });
}

export { apiGetArticles, apiGetArticle, apiGetCertification, apiGetUsername, apiGetAdvancedArticle, apiPostArticle, apiPutArticle, apiGetSnapshot, apiGetAdvancedSnapshot, apiPostSnapshot, apiPutSnapshot };