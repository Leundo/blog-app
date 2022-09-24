import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/ArticleHeader.css';


export default function ArticleHeader(props) {

    if (props.articleHeaderData != null) {
    return (
        <div className='article-header'>
            <div className="title">
                {props.articleHeaderData.title}
            </div>
            <ul className="meta">
                <li className="meta-text">{props.articleHeaderData.author}</li>
                <li className="meta-text">{' • '}</li>
                <li className="meta-text">{props.articleHeaderData.time}</li>
                <li className="meta-text">{' • '}</li>
                <li className="meta-text">{props.articleHeaderData.tag}</li>
                <li className="meta-text">{' • '}</li>
                <li className="meta-text">阅读: {
                    (props.articleHeaderData.views === null || props.articleHeaderData.views === undefined) ? "未统计" : props.articleHeaderData.views
                }</li>
            </ul>
        </div>
    )} else {
        return (
            <div className='article-header' />
        );
    }
}
