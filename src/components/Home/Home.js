import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Table from "../Table/Table";

import StationaryComponents from "./StationaryComponents";
import Loader from "../Loader";
import axios from "axios";
import { formatData } from "../../functions/format";
import { checkDateCreated } from "../../functions/checkDateCreated";
import CharacterDetails from "../CharacterDetails/charcaterDetails";


export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedChar, setSelectedChar] = useState();
    const prevPageNumber = usePrevious(pageNumber);
    
    

    window.onload = () => {
        const cachedPage = JSON.parse(localStorage.getItem(`page${pageNumber}`));
        checkDateCreated();
        displayPage(cachedPage);
    };

    useEffect(() => {
        if (prevPageNumber !== pageNumber) {
            const cachedPage = JSON.parse(localStorage.getItem(`page${pageNumber}`));
            displayPage(cachedPage);
        }
    });

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    function displayPage(cachedPage) {
        cachedPage === null ? fetchPage() : setCharacters(cachedPage.components);
    }

    function changePage(type, number) {
        
        switch (type) {
            case "next":
                if (pageNumber < 9) setPageNumber(prevPageNumber => prevPageNumber + 1);
                break;
            case "previous":
                if (pageNumber > 1) setPageNumber(prevPageNumber => prevPageNumber - 1);
                break;
            default:
                setPageNumber(number);
                break;
        }
    }

   

    async function fetchPage() {
        setIsFetching(true);
        const pageResults = await axios
            .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
            .then(response => response.data.results)
            .catch(error => console.log(error));
        setAdditionalData(pageResults);
    }
    
    async function setAdditionalData(results) {
        console.log(results);
        for (let character of results) {
            character = formatData(character);
            
            character.homePlanet = await fetchHomePlanet(character);
        }
        cachePage(results);
        setCharacters([...results]);
    }

    function fetchHomePlanet(character) {
        console.log(character.hom)
        const httpsHomePlanet = character.homeworld;
        return axios
            .get(httpsHomePlanet)
            .then(response => response.data.name)
            .catch(error => console.log(error));
    }

    function cachePage(newPageComponents) {
        
            const storageItem = {
                pageNumber: pageNumber,
                components: newPageComponents,
            };
            localStorage.setItem(`page${pageNumber}`, JSON.stringify(storageItem));
        
        if (pageNumber === 1) localStorage.setItem("date-created", JSON.stringify(new Date().getTime()));
        setIsFetching(false);
    }

   

    if (isFetching) {
        return (
            <div className="App">
               
                <Loader pageNumber={pageNumber} />
            </div>
        );
    } else {
        return (
            <div className="App">
                <StationaryComponents
                    
                    changePage={changePage}
                    
                    
                />

                {selectedChar && <CharacterDetails setSelectedChar={setSelectedChar} selectedChar={selectedChar}/>}
                <h4 style={{ color: "#fee71e", marginTop: 20 }}>Page: {pageNumber}</h4>
                <Table characters = { characters} setSelectedChar={setSelectedChar}/>
            </div>
        );
    }
}
