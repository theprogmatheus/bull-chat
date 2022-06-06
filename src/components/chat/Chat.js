// import styles
import './styles/Chat.css';

// import hooks
import { useState, useEffect } from 'react';

// import components
import ChatBanner from './ChatBanner';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';




const Chat = ({ background }) => {

    // Chat data states
    const [chatData, setChatData] = useState([]);


    const url = "http://localhost:8080/messages";

    // 1 - Resgatando dados
    useEffect(() => {

        async function fetchData() {

            const response = await fetch(`${url}/list`);
            const data = await response.json();

            // log the data
            console.log(data);

            setChatData(data);
        }

        fetchData();
    }, [])




    return (
        <div className="chat">
            <ChatBanner />
            <ChatContent
                background={background}
                chatContent={chatData}
            />
            <ChatInput setChatData={setChatData} url={url} />
        </div>
    )
}

export default Chat