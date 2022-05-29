/*
 *
 *    CONFIGURATION BACKEND (THEORETICAL SETUP)
 * 
 * 
 *    {
 *         "name": "Mark",
 *         "increment": 49,
 *         "balance": 95,
 *         "lastDateIncr": "unix?",
 *         "transactions": [
 *             {
 *                 "cost": 0,
 *                 "reason": "Test"
 *             }
 *         ]
 *     }
*/

import { useState } from "react"
const bcrypt = require('bcrypt');

// TODO: I need to hit a backend or something

const MagicNum = () => {

    let name = "Mark"
    let currIncr = 49
    let lastDateIncr = Date.parse('04 Dec 1995 00:12:00 GMT') // TODO: Load from database
    let passwordHash = "$2a$12$k84u73cHApLEsTkIWvo91.dmSvoX318QkZ..tYbIaCwyowJBqXbs2" // cheerio123

    const [transactions, setTransactions] = useState([{"cost": 0, "reason": "test"}]) // TODO: Load from database
    const [balance, setBalance] = useState(95)
    const [currCost, setCurrCost] = useState(0)
    const [currTransaction, setCurrTransaction] = useState("")

    const [password, setPassword] = useState("")
    const [passEntered, setPassEntered] = useState(false)

    const submitNewPurchase = () => {
        setTransactions(...transactions, {"cost": currCost, "reason": currTransaction})
    }

    const incrementBal = () => {
        // TODO: Adjust for my timezone?
        let today = Date.now()
        if(today.getDay() === lastDateIncr.getDay()) {
            alert("You've already updated the number today!")
            return 0
        } else {
            setBalance(balance + currIncr)
            lastDateIncr = Date.now()
        }
    }

    const checkPassword = () => {
        if (bcrypt.compareSync(password, passwordHash)) { // NOTE: Could be using .then for this
            setPassEntered(true)
        } else {
            alert("Wrong password!")
            setPassword("")
        }
    }

    return (
        <>
            <div className="incr_button_container">
                <h2>Your Balance: {balance}</h2>
                <button className="incr_button" onClick={incrementBal}>Increment Magic Number</button>
            </div>

            <div className="loggedin_form">
                <form>
                    <label className="textlabel">Enter cost:</label>
                    <input name="cost" className="textinput" type="text" value={currCost} onChange={e => setCurrCost(e)}/>

                    <label className="textlabel">Enter reason:</label>
                    <input name="cost" className="textinput" type="text" value={currTransaction} onChange={e => setCurrTransaction(e)} />

                    <button className="submitButton" onClick={submitNewPurchase}>Add Purchase</button>
                </form>
            </div>

            <div className="past_transactions">
                <ul>
                {
                    transactions.map((transaction, idx) => {
                        return <li key={idx}>${transaction.cost} -- {transaction.reason}</li>
                    })
                }
                </ul>
            </div>
        </>
    ) ? passEntered : (
        <>
            <p>Enter Password:</p>
            <div className="loggedout_form">
                <form>
                    <label className="textLabel">Password:</label>
                    <input name="cost" className="textinput" type="password" value={password} onChange={e => setPassword(e)}/>

                    <button className="submitButton" onClick={checkPassword}>Check Password</button>
                </form>
            </div>
        </>
    )

}

export default MagicNum;