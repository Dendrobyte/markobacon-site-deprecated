import axios from 'axios';
import { useState, useEffect } from 'react';
import ShibaCard from './ShibaCard';
import './shibastyles.css';

let fs = require('fs')
const imgBase = './shibas/'
const imgDir = fs.readdirSync('./shibas')

function ShibaHomepage() {
    // Respective API calls
    const shibaBaseUrl = "https://shiba.online/api/shibas?urls=true&httpsUrls=true";
    const quoteUrl = "https://quotable.io/quotes?page=1";
    
    const[shibaCardArr, setShibaCardArr] = useState('')
    const[shibaImgArr, setShibaImgArr] = useState([])
    const[count, setCount] = useState(1);
    const[summonText, setSummonText] = useState('Summon Another Shiba');

    // Get list of shiba images. Helper function to keep things a little clean
    const getShibaImageList = async() => { 
        let resultArr = []
        imgDir.forEach(img => {
            console.log(img)
        })
    }

    // Get a new random shiba image and add it to the shiba img array
    async function updateShibaImages() {
        let imgArrSize = imgDir.length
        let randImgNum = Math.floor(Math.count * imgArrSize)-1
        let found = false
        while (found === false) {
            let newImgPath = imgBase + imgDir[randImgNum]
            if (!shibaImgArr.includes(newImgPath)) {
                setShibaImgArr(...shibaImgArr, newImgPath)
                found = true // This will be fine..... right.....
            }
        }

        /*axios.get(`${shibaBaseUrl}&count=${count}`, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
            })
        .then(response => 
            response.json())
        .then((response) => {
            console.log(response)
            return response;
        })
        .catch(err => 
            console.log("Error retreiving shiba images: " + err));
            return null;
            */
           
    }

    const getQuotes = () => {
        return ['To be or not to be', 'that is the question', 'tis nobler in the mind to suffer', 'the slings and arrows of outrageous fortune', 'to die to sleep', 'for in that sleep of death what dreams may come']

        // axios.get(`${quoteUrl}&limit=${count}`)
        // .then((response) => {
        //     return response.json();
        // })
    }

    // Function to trigger when the summon shiba button is clicked
    let summonShiba = (e) => {
        if (count >= 6) {
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
        updateShibaImages()
    }

    // Whenever the count is updated, we'll get a new shiba image
    useEffect(() => {
        updateShibaImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    // And then, whenever the images are updated (since we're working with state variables) add the component
    // TODO: I can't help but feel like this got complicated. Welp.
    useEffect(() => {
        let quotes = getQuotes()
        let cardArr = shibaImgArr.reduce((acc, imageUrl) => {
            acc.push({ imageUrl: imageUrl, quote: quotes[acc.length]});
            return acc;
        }, [])
        setShibaCardArr(cardArr);
    }, [shibaImgArr])

    return <>
        <div className="container">
            <p>Hi</p>
            <div className="cards">
                {
                    shibaCardArr.map(({ imgUrl, quote}, idx) => {
                        <ShibaCard key={idx} imgUrl={imgUrl} quote={quote} />
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