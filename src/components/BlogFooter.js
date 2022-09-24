import React from 'react';

import '../styles/BlogFooter.css';

export default function BlogFooter(props) {
  return (
    <div className='blog-footer'>
      <div className="copyright">
        {'© 2021 '} <span className="author"> {'Leundo'} </span> {". 由 "}
        <a href={'https://reactjs.org/'} target="_blank" rel="noopener noreferrer">
          {'React'}
        </a>
        {" 强力驱动."}
      </div>

      <div className="record">
        <a href={`https://beian.miit.gov.cn/`} target="_blank" rel="noopener noreferrer">
          {'粤ICP备' + ' ' + '********号'}
        </a>
      </div>
    </div>
  );
}
