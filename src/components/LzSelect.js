import React from 'react';
import '../styles/LzSelect.css';

export default function LzSelect(props) {

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

    const renderOption = () => {
        let ans = [];
        if (props.options !== null && props.options !== undefined) {
            for (let i = 0; i < props.options.length; i++) {
                ans.push(
                    <option key={`${i}`} value={props.options[i]}>{props.options[i]}</option>
                );
            }
        }
        return ans;
    }

    return (
        <div className={"lz-select" + " " + props?.className ?? ""}>
            {renderText()}
            <select
                className="content"
                value={props.value}
                onChange={props.onChange}
            >
                {renderOption()}
            </select>
        </div>
    );
}
