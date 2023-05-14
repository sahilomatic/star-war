import React , {useEffect, useState} from 'react';
import MovieList from "./movieList";
import './characterDetails.css';
import { Link } from 'react-router-dom';

function CharacterDetailPage() {

  const [character, setCharacter] = useState({films:[], gender:'', name: '',hair_color:'',eye_color:'',homePlanet:''});
  const [showInput, setShowInput] = useState<boolean>(false);
   



  
  
 

  

  useEffect(()=>{
    let character = localStorage.getItem('character');
   
    if(!character){
      window.location.href="/";
    }
    else{
      setCharacter(character? JSON.parse(character): null);
    }
    

  },[character])

  const handleGenderChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    
    setCharacter({...character, gender : e.target.value});

  }

  return (
    <div>

        <h1 className='character'>Character Details Page</h1>




<div className="items border" data-testid="name"><h6><b>Name</b></h6> : <span >{character.name}</span> </div>
      <div className="items border" data-testid="hair-color"><h6><b>Hair Colour</b></h6> :  <span className="capitalize">{character.hair_color}</span> </div>
      <div className="items border" data-testid="eye-color"><h6><b>Eye Colour</b></h6> :  <span className="capitalize">{character.eye_color}</span>  </div>
      <div className="items border" data-testid="gender"><h6><b>Gender</b></h6> :  <span className="capitalize">{showInput? <><span><input placeholder = "Type Gender" value={character.gender} onChange = {handleGenderChange}/></span> <span onClick={()=>{setShowInput(false)}} data-testid="close-input" className="cursor">❌</span></>: <>{character.gender} <span onClick={()=>{setShowInput(true)}} data-testid="show-input" className="cursor">🖊</span> </>}</span></div>
      <div className="items border" data-testid="home-planet"><h6><b>Home Planet</b></h6> :   <span className="capitalize">{character.homePlanet}</span></div>
      {character.films.length>0 && <div className="items border">
        <MovieList films={character.films}/>
        
         </div>}


        <Link to="/" className='character'>Back</Link>
    </div>
  )
}

export default CharacterDetailPage