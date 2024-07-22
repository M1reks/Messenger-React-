'use client'

import S from './homePage.module.scss'
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import {FC, useEffect, useState} from "react";
import axios from "axios";
const homePage: FC = () => {

    const [message, setMessage] = useState<any>([])
    const [value, setValue] = useState('')
    console.log(value);
    useEffect(() => {
        subscribe()
    }, []);

    const subscribe = async () => {
        try {
            const {data} = await axios.get('http://localhost:5000/get-messages')
            console.log(data);
            setMessage(prev => [data, ...prev])
            await subscribe()
        }catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500)
        }

    }

    const sendMessage = async () => {
        await axios.post('http://localhost:5000/new-messages', {
            message: value,
            id: Date.now()
        })
    }

    return (
        <div className={S.main}>
            <div className={S.contacts}>
                <input  placeholder="Find the friend"/>
                <div className={S.user}>
                    {/*<Image src={} alt={}/>*/}
                    <div className={S.circle}></div>
                    <div className={S.description}>
                        <p>NAME</p>
                        <p>Last message</p>
                    </div>
                </div>
            </div>
            <div className={S.message}>
                <div className={S.form}>
                    <input value={value} onChange={e => setValue(e.target.value)}  type="text"/>
                    <button onClick={sendMessage}>SEND</button>
                </div>
                {message.map(mes => <div key={mes.id}>{mes.message}</div>)}
            </div>
        </div>
    );
};

export default homePage;