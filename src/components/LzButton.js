import React from 'react';
import '../styles/LzButton.css';
import cn from 'classnames';

export default function LzButton(props) {
    return (
        <button className={cn('lz-button', props?.className)} onClick={props.onClick}>
            {props?.text ?? ''}
        </button>
    );
}
