import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Table from "../Table/Table";
import Buttons from "./Buttons";


import Loader from "../Loader";
import axios from "axios";
import { formatData } from "../../functions/format";
import { checkDateCreated } from "../../functions/checkDateCreated";
import CharacterDetails from "../CharacterDetails/charcaterDetails";
import {  Character ,cacheDataType} from '../../Types/characterType';


export default function Home() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [selectedChar, setSelectedChar] = useState<Character | undefined>();
    const prevPageNumber = usePrevious(pageNumber);
    
    

    window.onload = () => {
        let data = localStorage.getItem(`page${pageNumber}`);
        const cachedPage : cacheDataType= data? JSON.parse(data): null;
        checkDateCreated();
        displayPage(cachedPage);
    };
   

    useEffect(() => {
        let data = localStorage.getItem(`page${pageNumber}`);
        if (prevPageNumber !== pageNumber ) {
            const cachedPage : cacheDataType = data? JSON.parse(data): null;
            displayPage(cachedPage);
        }
    });

    function usePrevious(value: number): number | undefined {
        const ref = useRef<number>();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    function displayPage(cachedPage : cacheDataType) {
        cachedPage === null ? fetchPage() : setCharacters(cachedPage.components);
    }

    function changePage(type : string, number?: number) : void {
        
        switch (type) {
            case "next":
                if (pageNumber < 9) setPageNumber(prevPageNumber => prevPageNumber + 1);
                break;
            case "previous":
                if (pageNumber > 1) setPageNumber(prevPageNumber => prevPageNumber - 1);
                break;
            default:
            if(number){
                setPageNumber(number);
            }    
            
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
    
    async function setAdditionalData(results : Character[]) {
        console.log(results);
        for (let character of results) {
            character = formatData(character);
            
            character.homePlanet = await fetchHomePlanet(character);
        }
        cachePage(results);
        setCharacters([...results]);
    }

    function fetchHomePlanet(character : Character) {
        console.log(character.hom)
        const httpsHomePlanet = character.homeworld;
        return axios
            .get(httpsHomePlanet)
            .then(response => response.data.name)
            .catch(error => console.log(error));
    }

    function cachePage(newPageComponents : Character[]) {
        
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
               
                <Loader />
            </div>
        );
    } else {
        return (
            <div className="App">
                <div>
                <br />
                <Buttons changePage={changePage} />
            </div>

                {selectedChar && <CharacterDetails setSelectedChar={setSelectedChar} selectedChar={selectedChar}/>}
                <h4 style={{ color: "#fee71e", marginTop: 20 }}>Page: {pageNumber}</h4>
                <Table characters = { characters} setSelectedChar={setSelectedChar}/>
            </div>
        );
    }
}
