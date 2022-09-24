import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

import HomeBody from '../components/HomeBody';
import { apiGetArticles } from '../util/Api';

export default function Home(props) {

  const [paginationData, setPaginationData] = useState({
    total: 0,
    pageSize: 6,
    current: 0,
  });
  const [articles, setArticles] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    refresh();
  }, [params.pid]);

  const refresh = () => {
    let current = getPid() - 1;
    let total = 0;
    apiGetArticles(current, paginationData.pageSize, (res) => {
      total = res.data.total;
      setPaginationData({
        ...paginationData,
        current: current,
        total: total,
      });
      setArticles(res.data.articles);
      // console.log(res);
    });
  }

  const getPid = () => {
    let pid = 1;
    if (params.pid !== undefined) {
      pid = parseInt(params.pid);
      // 无效(包括NaN)页数, 回到第一页
      if (!(pid > 0)) {
        pid = 1;
        navigate(`/page/${pid}`)
      }
    }
    return pid;
  };

  return (
    <div className='home'>
      <HomeBody
        paginationData={paginationData}
        articles={articles}
      />
    </div>
  );
}
