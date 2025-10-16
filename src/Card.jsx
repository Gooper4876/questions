// function reveal({id}){
//     document.getElementById(id).style.display = ""
// }
import { useState } from 'react'

function Card({id, question, answer}){
    const [showAnswer, setShowAnswer] = useState(false);

    // Use a custom event to notify other cards to hide their answers
    function handleClick() {
        // Dispatch event to hide all answers
        window.dispatchEvent(new CustomEvent('hideAllAnswers', { detail: id }));
        setShowAnswer((prev) => !prev);
    }

    // Listen for the event and hide answer if it's not this card
    useState(() => {
        function handler(e) {
            if (e.detail !== id) setShowAnswer(false);
        }
        window.addEventListener('hideAllAnswers', handler);
        return () => window.removeEventListener('hideAllAnswers', handler);
    }, [id]);

    return (
        <li>
            <button onClick={handleClick}>
                <b className="question">{question}</b>
            </button>
            <p className="answer" id={id} style={{display: showAnswer ? "" : "none"}}>{answer}</p>
        </li>
    );
}

export default Card