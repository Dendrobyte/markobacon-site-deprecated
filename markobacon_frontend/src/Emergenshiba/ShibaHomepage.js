import axios from 'axios';
import { useState, useEffect } from 'react';
import ShibaCard from './ShibaCard';
import './shibastyles.css';
import config from './config.json'

// let fs = require('fs')
// const imgBase = './shibas/'
// const imgDir = fs.readdirSync('./shibas')

function ShibaHomepage() {
    // Respective API calls
    const shibaBaseUrl = "https://shibe.online/api/shibes?count=20";
    const quoteUrl = "https://quotes15.p.rapidapi.com/quotes/random/";
    
    const [shibaCardArr, setShibaCardArr] = useState([])
    const [shibaImgArr, setShibaImgArr] = useState([])
    const [quotes, setQuotes] = useState([])
    const [count, setCount] = useState(2);
    const [summonText, setSummonText] = useState('Summon Another Shiba');
    const titles = ['The Vanguard', 'Second in Command', 'The Backup', 'The Intelligence Leader', 'The Apprentice', 'Along for the ride...']

    // Get a new random shiba image and add it to the shiba img array
    // TODO: So you only have to make one call for both shibas and quotes, hold on to six results and show/hide only a certain number
    async function getShibaImage() {

        axios.get(shibaBaseUrl, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
            })
        .then((response) => {
            // Query a bunch of dogs in case we get unlucky with the randomness
            let resLen = response.data.length
            let randDogNum = Math.floor(Math.random() * resLen)

            let counter = 0 // Just in case luck is truly not on our side
            let newImgUrl = response.data[randDogNum]
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

    // Retrieve initial set of quotes
    // We're fine to just hold them in the array since we get like 50 at a time
    const addQuote = () => {
        axios.get(quoteUrl, {
            'headers': {
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
                'X-RapidAPI-Key': config.QUOTES_API_KEY // You'll have to do this one on your own! Rapid API is the site, just make an account.
            }
          })
        .then((response) => {
            let newQuote = {quote: response.data.content, author: response.data.originator.name}
            setQuotes([...quotes, newQuote])
            return;
        })
        .catch((err) => {
            alert("Error fetching a quote :( Please refresh")
            console.log(err)
            return;
        })
    }

    // Function to trigger when the summon shiba button is clicked
    let summonShiba = (e) => {
        
        if (count > 6) {
            setSummonText("Don't Hoard")
            alert("You can't have all the shibas to yourself!")
            return
        }
        else if (count > 3) {
            setSummonText("You need MORE Shibas?!")
        }
        setCount(count + 1)
    }

    let modeSwitch = () => {
        alert("Future implementation for a cats API... is pending...")
    }

    // Whenever the count is updated, we'll get a new shiba image and a new quote
    useEffect(() => {
        addQuote()
        getShibaImage()
    }, [count])

    // And then, whenever the images are updated (since we're working with state variables) add the component
    // TODO: I can't help but feel like this got complicated. Welp.
    useEffect(() => {
        if (shibaImgArr.length === 0) return
        let cardArr = shibaImgArr.reduce((acc, imgUrl) => {
            let cardTitle =  acc.length < 6 ? titles[acc.length] : 'Surprise Shiba'
            acc.push({ title: cardTitle, imgUrl: imgUrl, quote: quotes[acc.length]});
            return acc;
        }, [])
        setShibaCardArr(cardArr);
    }, [quotes])

    return <>
        <div className="container">
            <div className="page-title">
                <h1 className="page-title-title">Emergen-shiba</h1>
                <p className="page-title-subtitle">For when you need motivation in a pinch <i className="smallText">(it's like emergenCY but SHIba... get it?!)</i></p>
            </div>
            <div className="cards-container">
                {
                    shibaCardArr.map(({ title, imgUrl, quote}, idx) => {
                        return <ShibaCard key={idx} title={title} imgUrl={imgUrl} quote={quote} />
                    })
                }
            </div>

            <div className="buttons">
                <button className="buttonSingle buttonSummon" onClick={(e) => summonShiba(e)}>{ summonText }</button>
                <button className="buttonSingle buttonTagout" clickable="true" onClick={modeSwitch}>Meow?</button>
            </div>

            <div className="footer">
                <p className="footer-text">Shibes courtesy of <a href="https://shibe.online">shibe.online</a> by <a href="https://twitter.com/covoxkid/">@covoxkid</a></p>
                <p className="footer-text">Quotes courtesy of <a href="https://rapidapi.com/martin.svoboda/api/quotes15/">this random API</a> (sorry if the quotes are a little weird)</p>
            </div>
        </div>
    </>
}

export default ShibaHomepage;