import React, {useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import MovieList from "./movieList";


import './characterDetails.css';


export default function CharacterDetails({selectedChar, setSelectedChar}){
    const [character, setCharacter] = useState({...selectedChar, movie_list:[]});
    
    const [showInput, setShowInput] = useState(false);
   
   


  const handleClose = () => setSelectedChar();
  
  const handleGenderChange = (e)=>{
    if(e.key === 'Enter'){
        setShowInput(false);
    }
    setCharacter({...character, gender : e.target.value});

  }

    return(<>
        
  
        <Modal show={selectedChar} onHide={handleClose} >
          <Modal.Header className="container-header">
            <Modal.Title>Character Details</Modal.Title>
            <div type="button" class="btn-close" aria-label="Close" onClick={handleClose}>❌</div>
          </Modal.Header>
          <Modal.Body className="container-body">
          <Stack gap={4}>
      <div className="items border" data-testid="name"><label><b>Name</b></label> : <span >{character.name}</span> </div>
      <div className="items border" data-testid="hair-color"><label><b>Hair Colour</b></label> :  <span className="capitalize">{character.hair_color}</span> </div>
      <div className="items border" data-testid="eye-color"><label><b>Eye Colour</b></label> :  <span className="capitalize">{character.eye_color}</span>  </div>
      <div className="items border" data-testid="gender"><label><b>Gender</b></label> :  <span className="capitalize">{showInput? <><span><input placeholder = "Type Gender" value={character.gender} onChange = {handleGenderChange}/></span> <span onClick={()=>{setShowInput(false)}} data-testid="close-input">❌</span></>: <>{character.gender} <span onClick={()=>{setShowInput(true)}} data-testid="show-input">🖊</span> </>}</span></div>
      <div className="items border" data-testid="home-planet"><label><b>Home Planet</b></label> :   <span className="capitalize">{character.homePlanet}</span></div>
      <div className="items border">
        <MovieList films={character.films}/>
        
         </div>
    </Stack>
          </Modal.Body>
          <Modal.Footer className="container-header">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>)
}
