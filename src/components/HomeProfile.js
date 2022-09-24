import React from 'react';
import '../styles/HomeProfile.css';
import { Link } from 'react-router-dom';


export default function HomeProfile(props) {

  const renderArticleTitle = () => {
    let ans = [];
    if (props.articles !== null && props.articles !== undefined) {
      for (let i = 0; i < props.articles.length; i++) {
        ans.push(
          <Link key={`article-list-title-${i}`} className='' to={`/article/${props.articles[i].article_id}`} >
            <p>{props.articles[i].title}</p>
          </Link>
        );
      }
    }
    return ans;
  }

  return (
    <div className='home-profile'>

      <div className='intro'>
        <p>这里可以放介绍。</p>
        <p>......</p>
      </div>

      <div className='title'>
        此页文章
      </div>
      <div className='article-list'>
        {renderArticleTitle()}
      </div>
    </div>
  )
}
