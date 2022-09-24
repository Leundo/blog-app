import React from 'react';
import '../styles/LabItem.css';
import { Link } from 'react-router-dom';


export default function LabItem(props) {
    const renderSubtitle = () => {
        if (props.subtitle !== undefined && props.subtitle !== null) {
            return (
                <div className='subtitle'>
                    {props.subtitle}
                </div>
            );
        } else {
            return null
        }
    }

    return (
        <div className='lab-item'>
            <Link to={props.href}>
                <div className='title'>
                    {props.title}
                </div>
            </Link>
            {renderSubtitle()}
        </div>
    );
}
