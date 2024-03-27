import "./PageNotFound.css";
import pageNotFound from "../../../Assets/Images/vecteezy_illustration-vector-graphic-cartoon-character-of-not-connected_6417043.jpg"

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<img  className="img-fluid" src={pageNotFound} alt="diamond" style={{height:"700px",width:"90%"}}/>
        </div>
    );
}

export default PageNotFound;
