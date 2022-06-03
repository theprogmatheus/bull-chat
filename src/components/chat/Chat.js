// import styles
import './styles/Chat.css';

// import hooks
import { useState } from 'react';

// import components
import ChatBanner from './ChatBanner';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';

const Chat = ({ background }) => {

    const [chatData, setChatData] = useState([

        {
            username: "Bull Chat",
            message: "Welcome to BullChat! here, you can speak every bullshit what you wnat...",
            me: false,
            chatColor: '#55e9fa'
        }, {
            username: "Bull Chat",
            message: "This chat was developed with the purpose of training Matheus' skills using React.js, so there is nothing special about this chat, only html, css and js were used here.",
            me: false,
            chatColor: '#55e9fa'
        },
        {
            username: "Bull Chat",
            message: "You can test the chat by typing a text below, and clicking 'send', you will 'send' a message in the chat...as I said, it is a simple project, and there is no integration with any REST API",
            me: false,
            chatColor: '#55e9fa'
        },

        {
            username: "Bull Chat",
            message: "Try it :)",
            me: false,
            chatColor: '#55e9fa'
        }

    ]);


    return (
        <div className="chat">
            <ChatBanner />
            <ChatContent
                background={background}
                chatContent={chatData}
            />
            <ChatInput setChatData={setChatData} />
        </div>
    )
}

export default Chat