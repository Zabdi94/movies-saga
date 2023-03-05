//IMPORTS
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { TextField} from "@mui/material"

function MovieIems () {
const dispatch = useDispatch();
const history = useHistory

console.log('in details');

const[description,setDiscription] = useState('');
const[title, setTitle] = useState('')
const[poster,setPoster] = useState('')

const getMovie = (event) => {
    event.preventDefault();
    dispatch({
        type: 'ADD_MOVIE',
        payload: {
            title: title,
            poster: poster,
            description: description
        }
    })
}


return (
    <div>
         <form noValidate autoComplete='off' 
                onSubmit={getMovie}>
            
                     <TextField size='medium' label='Title' variant='outlined' color='secondary' type='text' value={title} onChange={(evt)=> {setTitle(evt.target.value)}}/>
                     <TextField size='medium' label='Poster' variant='outlined' color='secondary' type='text' value={poster} onChange={(evt)=> {setPoster(evt.target.value)}}/>
                     <TextField size='medium' label='Description' variant='outlined' color='secondary' type='text' value={description} onChange={(evt)=> {setDiscription(evt.target.value)}}/>
                     <Button size='medium' type='submit' color='secondary' variant='outlined'>Add a New Movie</Button>
                 </form>
        
        
    </div>
)

}
export default MovieIems;