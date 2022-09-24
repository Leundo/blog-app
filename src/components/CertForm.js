import React from 'react';
import '../styles/CertForm.css';
import { useState, useEffect } from "react";

import LzInput from './LzInput';
import LzButton from './LzButton';
import LzAlert from './LzAlert';

import { apiGetCertification, apiGetUsername } from '../util/Api';

export default function CertForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [alertDate, setAlertDate] = useState({
        text: "",
        type: "none",
    });

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        apiGetUsername((res, err) => {
            if (err) {

            } else if (res.data.code === 200) {
                setAlertDate({
                    text: res.data.data + " 已获得授权证明",
                    type: "success",
                });
            }
        });
    }, [])

    const onSubmitClick = (e) => {
        if (username === "" || password === "") {
            setAlertDate({
                text: "信息未填写完整",
                type: "error",
            });
            return;
        }

        apiGetCertification(username, password, (res) => {
            console.log(res);
            if (res.data.code === 200) {
                setAlertDate({
                    text: "授权验证成功",
                    type: "success",
                });
            } else {
                setAlertDate({
                    text: "授权验证失败",
                    type: "error",
                });
            }
        });

    }

    return (
        <div className='cert-form'>
            <div className='div-form'>
                <LzInput
                    className='lz-certform-input'
                    text="授权识别码"
                    type="text"
                    width={300}

                    value={username}
                    onChange={onUsernameChange}
                />

                <LzInput
                    className='lz-certform-input'
                    text="授权口令"
                    type="password"
                    width={300}

                    value={password}
                    onChange={onPasswordChange}
                />

                <LzButton
                    className='lz-certform-button'
                    text="授权验证"
                    onClick={onSubmitClick}
                />

            </div>
            <LzAlert
                className={`cert-form-alert ${alertDate.type}`}
                text={alertDate.text}
            />
        </div>
    );
}
