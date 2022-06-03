// import styles
import './styles/ChatBanner.css';

const ChatBanner = () => {
    return (
        <div className="chat-banner">
            <a className="chat-banner-user" href="">
                <img className="chat-banner-avatar" src="https://tm.ibxk.com.br/2021/02/11/11153102407255.jpg" alt="image" />
                <span className="chat-banner-username">Sheldon Cooper Group</span>
            </a>
            <button className="chat-banner-close-button">X</button>
        </div>
    )
}

export default ChatBanner