import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


function MovieDetails () {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const getDetails = useSelector(store => store.movieDetailsReducer)
    
    useEffect (()=> {
        dispatch({
            type: 'GET_DETAILS',
            payload: params.id
        })
    },[])
    const homePage = () => {
        history.push('/')
    }
    
    
    return (
        <div> 
        
        <h2>VIEW MOVIE {params.id}</h2>

        <div key={getDetails.id}>
            <h2>{getDetails.title}</h2>
             <img src={getDetails.poster}/>
          <p>{getDetails.description}</p>
        <button onClick= {homePage}>Home</button>
        </div>
        </div>
        
        )
        
    }
    export default MovieDetails;