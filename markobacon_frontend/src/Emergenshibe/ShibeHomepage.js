import axios from 'axios';
import { response } from 'express';
import { useState, state, useEffect } from 'react';
import ShibeCard from './ShibeCard';
import './shibe_styles.css';

function ShibeHomepage() {
    // Respective API calls
    const shibeBaseUrl = "http://shibe.online/api/shibes";
    const quoteUrl = "https://quotable.io/quotes?page=1";
    
    const[shibeCardArr, setShibaCardArr] = useState('')
    const[count, setCount] = useState(1);
    const[summonText, setSummonText] = useState('Summon Another Shibe');


    async function getShibeImages() {
        axios.get(`${shibeBaseUrl}?count=${count}`)
        .then(response => 
            response.json())
        .then((response) => {
            return response;
        })
        .catch(err => 
            console.log("Error retreiving shibe images: " + err));
            return null;
    }

    async function getQuotes(){
        axios.get(`${quoteUrl}&limit=${count}`)
        .then((response) => {
            return response.json();
        })
        .then(() => {
            return response.results
        })
    }

    let summonShibe = (e) => {
        if (count >= 6) {
            alert("You can't have all the Shibes to yourself!")
            setSummonText("Don't Hoard")
            e.clickable = false;
            return
        }
        else if (count > 3) {
            setSummonText("You need MORE Shibes?!")
        }
        setCount(count + 1)
    }

    let tagOut = () => {
        getShibeImages()
    }

    useEffect(() => {
        let shibeImageArray = getShibeImages();
        let quoteArray = ['To be or not to be', 'that is the question', 'tis nobler in the mind to suffer', 'the slings and arrows of outrageous fortune', 'to die to sleep', 'for in that sleep of death what dreams may come']
        // let quoteArray = getQuotes()
        let cardArr = shibeImageArray.reduce((acc, imageUrl) => {
            acc.push(<ShibeCard imageUrl={imageUrl} quote={quoteArray[acc.length]} />);
            return acc;
        }, [])
        setShibaCardArr(cardArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    return <>
        <div className="container">
            <div className="cards">
                {
                    shibeCardArr.forEach((card) =>{
                        return card;
                    })
                    /*
                    shibeCardArr.map((item, index) => {
                        (
                            <ShibeCard imageUrl={imageUrl} quote={quoteArray[acc.length]} />
                        )
                    })
                    */
                }
            </div>

            <div className="buttons">
                <button className="buttonSummon" onClick={summonShibe}></button>
                <button className="buttonTagout" clickable={true} onClick={tagOut}>Regenerate Shibes</button>
            </div>
        </div>
    </>
}

export default ShibeHomepage;