import React from 'react';
import '../styles/Rejection.css';

export default function Rejection(props) {
    return (
        <div className='rejection'>
            <div className='rejection-title'>
                <h1>访问拒绝</h1>
                <h1>Access Denied</h1>
                <h1>アクセスが拒否されました</h1>
            </div>

            <div className='rejection-content'>
                <h4>您未被授权访问此资源。</h4>
                <h4>You are not authorized to access this resource.</h4>
                <h4>このリソースにアクセスする権限がありません。</h4>
            </div>

        </div>
    );
}
