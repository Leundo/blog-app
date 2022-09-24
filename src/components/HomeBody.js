import React from 'react';
import '../styles/HomeBody.css';

import ArticleAbstract from './ArticleAbstract';
import HomeNavigator from './HomeNavigator';
import Pagination from './Pagination';

export default function HomeBody(props) {

  const renderArticleAbstract = (articleAbstractData) => {
    let ans = [];
    if (articleAbstractData != null) {
      for (let i = 0; i < articleAbstractData.length; i++) {
        ans.push(<ArticleAbstract articleAbstractData={articleAbstractData[i]} key={`article_abstract_${i}`} />);
      }
    } else {
      for (let i = 0; i < props.paginationData.pageSize; i++) {
        ans.push(<ArticleAbstract key={`loading_article_abstract_${i}`} />);
      }
    }
    return ans;
  }

  return (
    <div className='home-body'>
      <div className='list'>
        {renderArticleAbstract(props.articles)}
        <Pagination
          className='pagination'
          paginationData={props.paginationData}
          baseUrl='/page/'
        />
      </div>
      <HomeNavigator articles={props.articles} />
    </div>
  )
}
