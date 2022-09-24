import React from 'react';
import '../styles/LzTextarea.css';

export default function LzTextarea(props) {

    const renderText = () => {
        if (props.text !== null && props.text !== undefined) {
            return (
                <p className='text'
                    style={{
                        marginBottom: 2,
                    }}
                >
                    {props.text}
                </p>
            );
        }
        return null;
    }

    return (
        <div className={'lz-textarea' + ' ' + props?.className ?? ''}>
            {renderText()}
            <textarea className="content" 
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
}
