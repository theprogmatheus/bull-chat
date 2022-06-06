// import styles
import './styles/ChatInput.css';

// import hooks
import { useState } from 'react';

const ChatInput = ({ setChatData, url }) => {

    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // check if message is empty
        if (!(message.replace(/\s/g, '') === '')) {


            const jsonMessage = {
                username: "Sheldon",
                message: message,
                me: true,
                chatColor: '#55e9fa'
            };



            setChatData((chatData) => [...chatData, jsonMessage]);
            setMessage("");

            const res = await fetch(`${url}/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: jsonMessage.username,
                    message: jsonMessage.message
                })
            })
        }
    }

    return (
        <form className="chat-input" onSubmit={handleSubmit}>
            <input className="emoji-button" type="button" value=":)" />
            <input className="more-button" type="button" value="#" />
            <input
                className="input-message"
                type="text"
                name="message"
                autoComplete="off"
                placeholder="Message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <input className="submit-button" type="submit" value="Send" />
        </form>
    )
}

export default ChatInput