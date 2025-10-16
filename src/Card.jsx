// function reveal({id}){
//     document.getElementById(id).style.display = ""
// }
import { useState } from 'react'

function Card({id, question, answer}){
    const [count, setCount] = useState(0)
    return(
        <li>
            <button onClick={() => {if (document.getElementById(id).style.display === "none") {
                document.getElementById(id).style.display = null
            }else{
                document.getElementById(id).style.display = "none"
            }}}>
                <b className="question">{question}</b>
            </button>
            <p className="answer" id={id}>{answer}</p>
        </li>
    )
}

export default Card