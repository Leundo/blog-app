import React from 'react';
import Prism from 'prismjs';
import { useState, useEffect } from "react";

import '../styles/Markdown.css';
// import '../styles/prism.css';
import { LzetMarked } from '../util/LzetMarked';

export default function Markdown(props) {
    const [html, setHtml] = useState(null);
    useEffect(() => {
        if (props.markdownData !== null) {
            setHtml(LzetMarked(props.markdownData));
            Prism.highlightAll();
        }

    }, [props.markdownData]);

    // useEffect(() => {
    //     Prism.highlightAll();
    // }, [html]);

    if (html != null) {
        return (
            <div className='markdown'>
                <div className="markdown-container" dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
        );
    } else {
        return (
            <div className='markdown' />
        );
    }
    
}
