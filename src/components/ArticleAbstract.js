import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArticleAbstract.css'

export default function ArticleAbstract(props) {

    const convertDateToString = (creationTime) => {
        let date = new Date(creationTime);
        let dateStr = date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日";
        return dateStr;
    }

    if (props.articleAbstractData != null) {
        return (
            <div className='article-abstract'>
                <div className={'picture-box'}>
                    <Link className='' to={`/article/${props.articleAbstractData.article_id}`} >
                        <img className='picture' src={props.articleAbstractData.picture} alt='' />
                    </Link>
                </div>

                <div className='text-box'>
                    <Link className='' to={`/article/${props.articleAbstractData.article_id}`} >
                        <div className={'title'}>
                            {props.articleAbstractData.title}
                        </div>
                    </Link>

                    <div className={'meta'}>
                        <span>{convertDateToString(props.articleAbstractData.creation_time)}</span>
                        <span>{props.articleAbstractData.user_name}</span>
                        <span>{props.articleAbstractData.tag_name}</span>
                    </div>

                    <div className='abstract'>
                        {props.articleAbstractData.abstract}
                    </div>

                </div>

            </div>
        );
    } else {
        return (
            <div className='article-abstract'>
                <div className={'loading-picture-box'} />

                <div className='loading-text-box'>
                    <div className={'loading-title'} />

                    <div className={'loading-meta'}>
                        <div className={'loading-meta-item'} />
                        <div className={'loading-meta-item'} />
                        <div className={'loading-meta-item'} />
                    </div>

                    <div className={'loading-abstract'} />
                </div>

            </div>
        );
    }

}
