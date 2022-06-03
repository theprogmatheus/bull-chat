// import styles
import './styles/ChatContent.css';

// import hooks
import { useEffect } from 'react';

const ChatContent = ({ background, chatContent }) => {

    // scrool to last message
    const scrollToEnd = () => {
        let chatContentDiv = document.getElementById("chat-content");
        chatContentDiv.scrollTop = chatContentDiv.scrollHeight;
    }

    useEffect(() => {
        scrollToEnd();
    }, [chatContent]);

    return (
        <div className="chat-content" id="chat-content" style={background !== null && { background }}>
            {
                chatContent.map(
                    (message, index) => (
                        <div key={index} className={`chat-content-message-container${message.me ? " chat-content-message-container-self" : ""}`}>
                            <div className="chat-content-message">
                                {!message.me && <a className="chat-content-message-username" style={{ color: message.chatColor }} href=''>{message.username}</a>}
                                <p className="chat-content-message-message">{message.message}</p>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ChatContent