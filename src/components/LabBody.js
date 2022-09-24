import React from 'react';
import '../styles/LabBody.css';
import { Link } from 'react-router-dom';
import LabItem from './LabItem';

export default function LabBody(props) {

    const labBodyData = [
        {
            title: "Certification",
            href: "/lab/certification",
        },
        {
            title: "Telegraph",
            href: "/lab/telegraph",
        },
    ];

    const renderLabItem = () => {
        let ans = [];
        labBodyData.forEach(item => {
            ans.push(
            <LabItem
                key={item.href}
                title={item.title}
                href={item.href}
            />);
        });
        return ans;
    }

    return (
        <div className='lab-body'>
            {renderLabItem()}
        </div>
    );
}
