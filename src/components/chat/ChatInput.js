// import styles
import './styles/ChatInput.css';

// import hooks
import { useState } from 'react';

const ChatInput = ({ setChatData }) => {

    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // check if message is empty
        if (!(message.replace(/\s/g, '') === '')) {

            setChatData((chatData) => [...chatData, {

                username: "Sheldon",
                message: message,
                me: true,
                chatColor: '#55e9fa'

            }]);

            console.log(message.split(" ").length);

            setMessage("");
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