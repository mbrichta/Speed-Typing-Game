import React, { useEffect, useRef } from "react"
import wordGame from "../hooks/wordGame"


function App() {

    const {
        text,
        wordCount,
        timeRemanining,
        gameState,
        textAreaHandler,
        textRef,
        startGame
    } = wordGame()

    return (
        <div className="container">
            <h1>Speed Typing</h1>
            <textarea ref={textRef} onChange={textAreaHandler} value={text} disabled={!gameState} />
            <h4>Time remaining: {timeRemanining}</h4>
            <button onClick={() => startGame()} disabled={gameState}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )

}

export default App