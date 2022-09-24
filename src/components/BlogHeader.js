import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/BlogHeader.css';

export default function BlogHeader(props) {

    const setItemStyle = (focused, tag) => {
        if (focused === tag ) {
            return 'blog-header-menu-border-focused';
        } else {
            return 'blog-header-menu-border-bottom';
        }
    }

    return (
        <div className='blog-header'>
            <div className='blog-header-logo'>
                <Link to="/">
                    <div className='blog-header-name'>
                        {'Web Example'}
                    </div>
                </Link>
                <div className='blog-header-slogan'>
                    {'这里可以写一句话'}
                </div>
            </div>
            <ul className='blog-header-menu'>
                <li className='blog-header-menu-space blog-header-menu-border-bottom'> </li>

                <Link className={setItemStyle(props.focused, 'home')} to="/">
                    <li className='blog-header-menu-item'> {'主页'} </li>
                </Link>

                <Link className={setItemStyle(props.focused, 'lab')} to="/lab">
                    <li className='blog-header-menu-item'> {'实验'} </li>
                </Link>
            </ul>
        </div>
    )
}
