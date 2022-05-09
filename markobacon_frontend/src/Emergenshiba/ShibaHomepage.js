import axios from 'axios';
import { useState, useEffect } from 'react';
import ShibaCard from './ShibaCard';
import './shibastyles.css';

// let fs = require('fs')
// const imgBase = './shibas/'
// const imgDir = fs.readdirSync('./shibas')

function ShibaHomepage() {
    // Respective API calls
    const shibaBaseUrl = "https://dog.ceo/api/breed/shiba/images" // "http://shibe.online/api/shibes?count=1";
    const quoteUrl = "https://quotable.io/quotes?page=1";
    
    const[shibaCardArr, setShibaCardArr] = useState([])
    const[shibaImgArr, setShibaImgArr] = useState([])
    const[count, setCount] = useState(2);
    const[summonText, setSummonText] = useState('Summon Another Shiba');

    // Get a new random shiba image and add it to the shiba img array
    // TODO: So you only have to make one call for both shibas and quotes, hold on to six results and show/hide only a certain number
    async function getShibaImage() {

        axios.get(shibaBaseUrl, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
            })
        .then((response) => { // Shibe API may need an intermediate response.json() call?
            // For the dog API because it returns 19 dogs
            let resLen = response.data.message.length
            let randDogNum = Math.floor(Math.random() * resLen)

            // TODO: Change this if/when you're able to pull from the shibe.online api
            let counter = 0 // Just in case luck is truly not on our side
            let newImgUrl = response.data.message[randDogNum]
            while(shibaImgArr.includes(newImgUrl) && counter <= 10) {
                // Find one we don't have
                randDogNum = Math.floor(Math.random() * resLen)
                newImgUrl = response.data.message[randDogNum]
                counter++
            }
            
            setShibaImgArr([...shibaImgArr, newImgUrl])
            return;
        })
        .catch(err => 
            console.log("Error retreiving shiba images: " + err));
            return;

    }

    // Retrieve the quotes
    // TODO: Implement this bad boi
    const getQuotes = () => {
        return ['To be or not to be', 'that is the question', 'tis nobler in the mind to suffer', 'the slings and arrows of outrageous fortune', 'to die to sleep', 'for in that sleep of death what dreams may come']

        // axios.get(`${quoteUrl}&limit=${count}`)
        // .then((response) => {
        //     return response.json();
        // })
    }

    // Function to trigger when the summon shiba button is clicked
    let summonShiba = (e) => {
        
        if (count > 6) {
            alert("You can't have all the shibas to yourself!")
            setSummonText("Don't Hoard")
            e.clickable = "false";
            return
        }
        else if (count > 3) {
            setSummonText("You need MORE Shibas?!")
        }
        setCount(count + 1)
    }

    let tagOut = () => {
        getShibaImage()
    }

    // Whenever the count is updated, we'll get a new shiba image
    useEffect(() => {
        getShibaImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    // And then, whenever the images are updated (since we're working with state variables) add the component
    // TODO: I can't help but feel like this got complicated. Welp.
    useEffect(() => {
        let quotes = getQuotes()
        if (shibaImgArr.length === 0) return
        let cardArr = shibaImgArr.reduce((acc, imgUrl) => {
            acc.push({ imgUrl: imgUrl, quote: quotes[acc.length]});
            return acc;
        }, [])
        setShibaCardArr(cardArr);
    }, [shibaImgArr])

    return <>
        <div className="container">
            <div className="cards-container">
                {
                    shibaCardArr.map(({ imgUrl, quote}, idx) => {
                        console.log(imgUrl)
                        return <ShibaCard key={idx} imgUrl={imgUrl} quote={quote} />
                    })
                }
            </div>

            <div className="buttons">
                <button className="buttonSummon" onClick={summonShiba}>{ summonText }</button>
                <button className="buttonTagout" clickable="true" onClick={tagOut}>Regenerate Shibas</button>
            </div>
        </div>
    </>
}

export default ShibaHomepage;