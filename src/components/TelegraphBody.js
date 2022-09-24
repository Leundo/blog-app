import React from 'react';
import '../styles/TelegraphBody.css';
import { useState, useEffect } from "react";

import LzTextarea from './LzTextarea';
import LzInput from './LzInput';
import LzSelect from './LzSelect';
import LzButton from './LzButton';
import LzModal from './LzModal';
import LzAlert from './LzAlert';
import Rejection from './Rejection';

import ArticleHeader from '../components/ArticleHeader';

export default function TelegraphBody(props) {
    const [isOpen, setIsOpen] = useState(false);


    if (props.isAuthorized === false) {
        return (
            <div className='telegraph-body'>
                <ArticleHeader articleHeaderData={{
                    title: "C.M.于特事务所",
                    author: "Leundo",
                    time: "2022年5月16日",
                    tag: "贝尔实验室",
                }} />
                <Rejection />
            </div>
        );
    } else {
        return (
            <div className='telegraph-body'>
                <ArticleHeader articleHeaderData={{
                    title: "C.M.于特事务所",
                    author: "Leundo",
                    time: "2022年5月16日",
                    tag: "贝尔实验室",
                }} />

                <div className='telegraph-body-treasure'>
                    <LzInput
                        type="number"
                        className="telegraph-body-input"
                        text={'article_id'}
                        value={props.telegraphBodyData.article_id}
                        onChange={props.onArticleIdChange}
                    />
                    <LzInput
                        type="number"
                        className="telegraph-body-input"
                        text={'user_id'}
                        value={props.telegraphBodyData.user_id}
                        onChange={props.onUserIdChange}
                    />
                    <LzInput
                        type="number"
                        className="telegraph-body-input"
                        text={'tag_id'}
                        value={props.telegraphBodyData.tag_id}
                        onChange={props.onTagIdChange}
                    />
                    <LzInput
                        className="telegraph-body-input"
                        text={'creation_time'}
                        value={props.telegraphBodyData.creation_time}
                        onChange={props.onCreationTimeChange}
                    />
                    <LzInput
                        className="telegraph-body-input"
                        text={'title'}
                        value={props.telegraphBodyData.title}
                        onChange={props.onTitleChange}
                    />
                    <LzInput
                        className="telegraph-body-input"
                        text={'abstract'}
                        value={props.telegraphBodyData.abstract}
                        onChange={props.onAbstractChange}
                    />
                    <LzInput
                        className="telegraph-body-input"
                        text={'picture'}
                        value={props.telegraphBodyData.picture}
                        onChange={props.onPictureChange}
                    />
                    <LzInput
                        type="number"
                        className="telegraph-body-input"
                        text={'ranking'}
                        value={props.telegraphBodyData.ranking}
                        onChange={props.onRankingChange}
                    />
                    <LzSelect
                        className="telegraph-body-select"
                        text={'status'}
                        options={['published', 'hidden']}
                        value={props.telegraphBodyData.status}
                        onChange={props.onStatusChange}
                    />
                    <LzTextarea
                        className="telegraph-body-textarea"
                        text={'text'}
                        value={props.telegraphBodyData.text}
                        onChange={props.onTextChange}
                    />

                    <div className='btn-group'>
                        <LzButton
                            text={'查询'}
                            onClick={props.onQueryClick}
                        />
                        <LzButton
                            text={'提交'}
                            onClick={() => { setIsOpen(true) }}
                        />

                    </div>

                    <LzAlert
                        className={'tltegraph-body-alert'}
                        text={props.alertDate.text}
                        type={props.alertDate.type}
                    />

                    <LzModal
                        isOpen={isOpen}
                        onClose={() => { setIsOpen(false) }}
                        onBtnClick={() => { props.onSubmitClick(); setIsOpen(false); }}
                        buttonText={'确定'}
                        title={'修改文章'}
                    >
                        <p> 确定提交修改吗？</p>
                    </LzModal>
                </div>

            </div>
        );
    }
}
