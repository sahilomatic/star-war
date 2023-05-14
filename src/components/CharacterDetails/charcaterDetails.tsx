import React, {useState , useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import MovieList from "./movieList";
import {SelectedCharProp } from '../../Types/characterType';

import './characterDetails.css';


export default function CharacterDetails({selectedChar, setSelectedChar}: SelectedCharProp){
    const [character, setCharacter] = useState({...selectedChar, movie_list:[]});
    
    const [showInput, setShowInput] = useState<boolean>(false);
   



  const handleClose = () => setSelectedChar(undefined);
  
  const handleGenderChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    
    setCharacter({...character, gender : e.target.value});

  }

  const handleRedirection = ()=>{

    localStorage.setItem('character',JSON.stringify(character));
    window.location.href='/character';
  }

    return(<>
        
  
        <Modal show={!!selectedChar} onHide={handleClose} >
          <Modal.Header className="container-header">
            <Modal.Title>Character Details</Modal.Title>
            <div  aria-label="Close" onClick={ handleClose} className="cursor">❌</div>
          </Modal.Header>
          <Modal.Body className="container-body">
          <Stack gap={4}>
      <div className="items border" data-testid="name"><h6><b>Name</b></h6> : <span >{character.name}</span> </div>
      <div className="items border" data-testid="hair-color"><h6><b>Hair Colour</b></h6> :  <span className="capitalize">{character.hair_color}</span> </div>
      <div className="items border" data-testid="eye-color"><h6><b>Eye Colour</b></h6> :  <span className="capitalize">{character.eye_color}</span>  </div>
      <div className="items border" data-testid="gender"><h6><b>Gender</b></h6> :  <span className="capitalize">{showInput? <><span><input placeholder = "Type Gender" value={character.gender} onChange = {handleGenderChange}/></span> <span onClick={()=>{setShowInput(false)}} data-testid="close-input" className="cursor">❌</span></>: <>{character.gender} <span onClick={()=>{setShowInput(true)}} data-testid="show-input" className="cursor">🖊</span> </>}</span></div>
      <div className="items border" data-testid="home-planet"><h6><b>Home Planet</b></h6> :   <span className="capitalize">{character.homePlanet}</span></div>
      <div className="items border">
        <MovieList films={character.films}/>
        
         </div>
    </Stack>
          </Modal.Body>
          <Modal.Footer className="container-header">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleRedirection}>
              Page
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>)
}
