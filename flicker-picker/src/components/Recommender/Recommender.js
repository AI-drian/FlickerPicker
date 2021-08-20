import Searchbar from "../Searchbar/Searchbar";
import "./Recommender.css"

const Recommender = () => {
    return ( 
        <>
        <div className="page-title">
            <h2>Find movies like:</h2>
        </div>
        <Searchbar></Searchbar>
        </>
     );
}
 
export default Recommender;