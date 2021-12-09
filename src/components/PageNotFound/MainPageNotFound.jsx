import "./MainPageNotFound.scss";
import sorry from "../../images/mariasorry.gif";

export default function MainPageNotFound(){

    return(
        <div className="main-page-not-found">
            <h1 className="title">404</h1>
            <h2>Hmm that page doesn't exist...</h2>
            <img src={sorry} alt="j" />
            <p>Maybe the link has expired or has been removed. Please go back to search or homepage.</p>
            <p>To report a broken link please contact us!</p>
            <button className="what-to-do-button">WHAT TO DO</button>
        </div>
    )
}