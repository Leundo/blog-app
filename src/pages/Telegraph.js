import React from 'react';
import '../styles/Telegraph.css';
import { useState, useEffect } from "react";
import { apiGetAdvancedArticle, apiPostArticle, apiPutArticle, apiGetUsername } from '../util/Api';
import { formatDate } from '../util/LzDate';

import TelegraphBody from '../components/TelegraphBody';

export default function Telegraph(props) {
    const [telegraphBodyData, setTelegraphBodyData] = useState({
        article_id: "",
        user_id: "",
        tag_id: "",
        title: "",
        abstract: "",
        picture: "",
        ranking: "0",
        status: "published",
        creation_time: "",
        text: "",
    });

    const [alertDate, setAlertDate] = useState({
        text: "",
        type: "none",
    });

    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        apiGetUsername((res, err) => {
            if (err) {

            } else if (res.data.code === 200) {
                setIsAuthorized(true);
            }
        });
    }, [])

    // useEffect(() => {
    //     console.log(telegraphBodyData);
    // }, [telegraphBodyData]);

    const onQueryClick = () => {
        // console.log('res');
        apiGetAdvancedArticle(telegraphBodyData.article_id, (res) => {
            if (res.data.data?.length > 0) {
                setTelegraphBodyData({
                    ...res.data.data[0],
                    creation_time: formatDate(new Date(res.data.data[0].creation_time), 'yyyy-MM-dd HH:mm:ss'),
                });
            }
        });
    }

    const onSubmitClick = () => {
        if (telegraphBodyData.article_id === '') {
            if (telegraphBodyData.user_id === '' || telegraphBodyData.tag_id === '' || telegraphBodyData.title === '' || telegraphBodyData.abstract === '' || telegraphBodyData.picture === '' || telegraphBodyData.text === '' || telegraphBodyData.ranking === '' || telegraphBodyData.status === '' || telegraphBodyData.creation_time === '') {
                setAlertDate({
                    text: "信息未补充完整",
                    type: "error",
                });
                return;
            }

            apiPostArticle(telegraphBodyData.user_id, telegraphBodyData.tag_id, telegraphBodyData.title, telegraphBodyData.abstract, telegraphBodyData.picture, telegraphBodyData.text, telegraphBodyData.ranking, telegraphBodyData.status, telegraphBodyData.creation_time, (res, err) => {
                if (err) {
                    setAlertDate({
                        text: "添加文章失败",
                        type: "error",
                    });
                } else if (res.data.code === 200) {
                    setAlertDate({
                        text: "添加文章成功",
                        type: "success",
                    });
                } else {
                    setAlertDate({
                        text: "添加文章失败",
                        type: "error",
                    });
                }
            });
        } else {
            if (telegraphBodyData.user_id === '' || telegraphBodyData.tag_id === '' || telegraphBodyData.title === '' || telegraphBodyData.abstract === '' || telegraphBodyData.picture === '' || telegraphBodyData.text === '' || telegraphBodyData.ranking === '' || telegraphBodyData.status === '' || telegraphBodyData.creation_time === '') {
                setAlertDate({
                    text: "信息未补充完整",
                    type: "error",
                });
                return;
            }

            apiPutArticle(telegraphBodyData.article_id, telegraphBodyData.user_id, telegraphBodyData.tag_id, telegraphBodyData.title, telegraphBodyData.abstract, telegraphBodyData.picture, telegraphBodyData.text, telegraphBodyData.ranking, telegraphBodyData.status, telegraphBodyData.creation_time, (res, err) => {
                if (err) {
                    setAlertDate({
                        text: "修改文章失败",
                        type: "error",
                    });
                } else if (res.data.code === 200) {
                    setAlertDate({
                        text: "修改文章成功",
                        type: "success",
                    });
                } else {
                    setAlertDate({
                        text: "修改文章失败",
                        type: "error",
                    });
                }
            });
        }
    }

    const onArticleIdChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            article_id: e.target.value,
        });
    }

    const onUserIdChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            user_id: e.target.value,
        });
    }

    const onTagIdChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            tag_id: e.target.value,
        });
    }

    const onCreationTimeChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            creation_time: e.target.value,
        });
    }

    const onTitleChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            title: e.target.value,
        });
    }

    const onAbstractChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            abstract: e.target.value,
        });
    }

    const onPictureChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            picture: e.target.value,
        });
    }

    const onRankingChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            ranking: e.target.value,
        });
    }

    const onStatusChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            status: e.target.value,
        });
    }

    const onTextChange = (e) => {
        setTelegraphBodyData({
            ...telegraphBodyData,
            text: e.target.value,
        });
    }

    return (
        <div className='telegraph'>
            <TelegraphBody
                isAuthorized={isAuthorized}
                telegraphBodyData={telegraphBodyData}
                alertDate={alertDate}
                onArticleIdChange={onArticleIdChange}
                onUserIdChange={onUserIdChange}
                onTagIdChange={onTagIdChange}
                onCreationTimeChange={onCreationTimeChange}
                onTitleChange={onTitleChange}
                onAbstractChange={onAbstractChange}
                onPictureChange={onPictureChange}
                onRankingChange={onRankingChange}
                onStatusChange={onStatusChange}
                onTextChange={onTextChange}
                onQueryClick={onQueryClick}
                onSubmitClick={onSubmitClick}
            />
        </div>
    );
}
