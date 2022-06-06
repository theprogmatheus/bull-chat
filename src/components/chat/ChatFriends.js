// import styles
import './styles/ChatFriends.css';

const ChatFriends = () => {
  return (
    <div className="chat-friends">
   
      <div className="chat-friend-card" onClick={(e) => console.log(e)}>
        <img className="chat-friend-card-avatar" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/user.png" alt="image" />
        <p className="chat-friend-card-username">Walter White</p>
      </div>

    </div>
  )
}

export default ChatFriends  