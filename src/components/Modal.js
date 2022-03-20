import { useState } from 'react';
import '../style/modal.scss';
const Modal = (props) => {
    const [{ status, solution }, setStatus] = useState(JSON.parse(localStorage.getItem("board-data")));
    if (status == "WIN") {
        return (
            <>
                <div className="backdrop" />
                <div className="cookiesContent" id="cookiesPopup">
                    <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
                    <p>Congratulations! You managed to finish the game. Have a cookie! </p>
                    <button className="accept" onClick={props.handlePrompt}>Thank You!</button>
                </div>
            </>

        )
    }
    else {
        return (

            <>
                <div className="backdrop" />
                <div className="cookiesContent" id="cookiesPopup">
                    <img src="https://cdn-icons.flaticon.com/png/512/3769/premium/3769878.png?token=exp=1647002745~hmac=45c0f3e8f97de22e032f3887f4efdabe" alt="cookies-img" />
                    <p>Try again! The correct word is  {solution}</p>
                    <button className="accept" onClick={props.handlePrompt}>Awwww</button>
                </div>
            </>
        )

    }

}
export default Modal;