import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../styles/Article.css';

import ArticleHeader from '../components/ArticleHeader';
import Markdown from '../components/Markdown';
import { apiGetArticle } from '../util/Api';


export default function Article(props) {

    const [articleHeaderData, setArticleHeaderData] = useState(null);
    const [markdownData, setMarkdownData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let aid = getAid();
        apiGetArticle(aid, (res) => {
            // console.log(res);
            setArticleHeaderData({
                title: res.data[0].title,
                author: res.data[0].user_name,
                time: convertDateToString(res.data[0].creation_time),
                tag: res.data[0].tag_name,
                views: res.data[0].views,
            });
            setMarkdownData(res.data[0].text);
        });
    }, []);

    const convertDateToString = (creationTime) => {
        let date = new Date(creationTime);
        let dateStr = date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日";
        return dateStr;
    }

    const getAid = () => {
        let aid = 1;
        if (params.aid !== undefined) {
            aid = parseInt(params.aid);
            // 无效(包括NaN)页数, 回到第一页
            if (!(aid > 0)) {
                aid = 1;
                navigate(`/article/${aid}`)
            }
        }
        return aid;
    };



    return (
        <div className='article'>
            <ArticleHeader articleHeaderData={articleHeaderData} />
            <Markdown markdownData={markdownData} />
        </div>
    )
}
