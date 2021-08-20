import Searchbar from "../Searchbar/Searchbar";
import "./Recommender.css"

const Recommender = () => {
    return ( 
        <>
        <div className="page-title">
            <h2>Find movies like:</h2>
        </div>
        {/* I will need a new searchbar to handle input, this is just for display */}
        <Searchbar></Searchbar>
        </>
     );
}
 
export default Recommender;