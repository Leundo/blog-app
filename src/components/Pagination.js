import React from 'react';
import '../styles/Pagination.css';

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Pagination(props) {

    const maxButtonNumber = 4;

    const renderNumberButton = (paginationData) => {
        let ans = [];
        if (paginationData === null || paginationData === undefined || paginationData.total === 0) {
            ans.push(

                <Link key={`lz-pagination-number-button-0`} to={`${props.baseUrl}1`} >
                    <button className='number curr'>
                        1
                    </button>
                </Link>
            );
        } else {
            let current = paginationData.current;
            let totalButtonNumber = Math.ceil(paginationData.total / paginationData.pageSize);
            let diplayedButtonNumber = Math.min(totalButtonNumber, maxButtonNumber);
            let leftMidDistance = Math.ceil(diplayedButtonNumber / 2) - 1;
            let midRightDistance = diplayedButtonNumber - leftMidDistance - 1;
            let firstNumber = null;
            if (current < leftMidDistance) {
                firstNumber = 0;
            } else {
                if (current < totalButtonNumber - midRightDistance) {
                    firstNumber = current - leftMidDistance;
                } else {
                    firstNumber = totalButtonNumber - diplayedButtonNumber;
                }
            }

            for (let i = 0; i < diplayedButtonNumber; i++) {
                ans.push(
                    <Link key={`lz-pagination-number-button-${i}`} to={`${props.baseUrl}${firstNumber + i + 1}`}>
                        <button className={`number ${firstNumber + i === current ? 'curr' : ''}`}>
                            {firstNumber + 1 + i}
                        </button>
                    </Link>
                );
            }
        }
        return ans;
    }

    const setPrevButtonStyle = (paginationData) => {
        if (paginationData === null || paginationData === undefined || paginationData.total === 0) {
            return '';
        } else {
            let current = paginationData.current;
            if (current === 0) {
                return 'hidden';
            } else {
                return '';
            }
        }
    }

    const setNextButtonStyle = (paginationData) => {
        if (paginationData === null || paginationData === undefined || paginationData.total === 0) {
            return '';
        } else {
            let current = paginationData.current;
            if (current === Math.ceil(paginationData.total / paginationData.pageSize) - 1) {
                return 'hidden';
            } else {
                return '';
            }
        }
    }

    return (
        <div className={`lzzet-pagination ${props.className}`}>
            <Link to={`${props.baseUrl}${props.paginationData.current}`}>
                <button className={`action ${setPrevButtonStyle(props.paginationData)}`}>
                    前一页
                </button>
            </Link>
            {renderNumberButton(props.paginationData)}
            <Link to={`${props.baseUrl}${props.paginationData.current + 2}`}>
                <button className={`action ${setNextButtonStyle(props.paginationData)}`}>
                    后一页
                </button>
            </Link>
        </div>
    );
}
