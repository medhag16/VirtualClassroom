import React from 'react';
import { useEffect, useState } from "react";

function RandomQuote() {

    const [quotes,setQuotes]=useState([]);
    const [randomQuote,setRandomQuote]=useState("");
    const [color,setColor]=useState("#ff8");

    useEffect(()=>{
        async function fetchData(){
            const response=await fetch("https://type.fit/api/quotes");
            const data=await response.json();
            setQuotes(data);
            let randIndex=Math.floor(Math.random()*data.length);
            setRandomQuote(data[randIndex]);
        }fetchData();
    },[])

    const getNewQuote=()=>{
        const colors=[
            "#F0F8FF","#faebd7","#deb887","#f49750","#e99698","#dcdcdc","#ffe4e1","#ffdab9"
        ];
        let randIndex=Math.floor(Math.random()*quotes.length);
        let randColorIndex=Math.floor(Math.random()*colors.length);
        setRandomQuote(quotes[randIndex]);
        setColor(colors[randColorIndex]);
    }

    return (
        <div className="card" style={{backgroundColor:color}}>
            <div className="card-header"><b>Thought of the Day</b></div>
            <div className="card-body">
                <h className="card-title">&quot;{randomQuote.text}&quot;</h>
                <div style={{height:"35px", textAlign: "right"}}></div>
                <h5 className="card-text" >- {randomQuote.author}</h5>
                <button  onClick={getNewQuote} className="btn btn-primary ml-3" style={{alignItems:"stretch"}}>New Quote</button>
            </div>
        </div>   
    );
}

export default RandomQuote;
