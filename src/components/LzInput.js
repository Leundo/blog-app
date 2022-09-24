import React from 'react'
import '../styles/LzInput.css';
import cn from 'classnames';


export default function LzInput(props) {

    // var width = props?.width ?? 250;
    // var fontSize = props?.fontSize ?? 21;
    // var height = (props?.fontSize ?? 21) * 1.5;

    const renderText = () => {
        if (props.text !== null && props.text !== undefined) {
            return (
                <p className='text'
                    style={{
                        // fontSize: fontSize * 0.8,
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
        <div
            className={cn('lz-input', props?.className)}
        >
            {renderText()}
            <input 
                type={props?.type ?? "text"}
                className={"content"}
                placeholder={props?.placeholder ?? ""}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
}
