import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../styles/Certification.css';

import ArticleHeader from '../components/ArticleHeader';
import CertForm from '../components/CertForm';


export default function Certification(props) {
    return (
        <div className='certification'>
            <ArticleHeader articleHeaderData={{
                title: "海豚宾馆",
                author: "Leundo",
                time: "2021年10月12日",
                tag: "贝尔实验室",
            }}
            />
            <CertForm />
        </div>
    );
}
