// import styles
import './FlexBox.css';

// import components
import ChatFriends from './chat/ChatFriends';
import Chat from './chat/Chat';

const FlexBox = () => {
    return (
        <div className="flexbox">
            <div className="flexbox-one">
                <ChatFriends />
            </div>
            <div className="flexbox-two">
                <Chat background='url(https://i.pinimg.com/originals/85/04/30/850430a750fb80c1ebaa5e740fc7cbd6.jpg)' />
            </div>
        </div>
    )
}

export default FlexBox