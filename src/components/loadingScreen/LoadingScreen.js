// import styles
import './LoadingScreen.css';

const LoadingScreen = ({ message }) => {
    return (
        <div className="load-screen">
            <div className="load-screen-image"></div>
            {message ? (<h3 className="load-screen-message">{message}</h3>) : (<></>)}
        </div>
    )
}

export default LoadingScreen;