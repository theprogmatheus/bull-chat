// import styles
import './styles/ChatContent.css';

// import hooks
import { useEffect } from 'react';

const ChatContent = ({ chatContent }) => {

    // scrool to last message
    const scrollToEnd = () => {
        let chatContentDiv = document.getElementById("chat-content");
        chatContentDiv.scrollTop = chatContentDiv.scrollHeight;
    }

    useEffect(() => {
        scrollToEnd();
    }, [chatContent]);

    return (
        <div className="chat-content" id="chat-content">
            {
                chatContent.map(
                    (message, index) => (
                        <div key={index} className={`chat-content-message${message.me ? " chat-content-message-self" : ""}`}>
                            {!message.me && <a className="chat-content-message-username" style={{ color: message.chatColor }} href=''>{message.username}</a>}
                            <p className="chat-content-message-message">{message.message}</p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ChatContent