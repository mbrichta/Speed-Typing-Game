import { useState, useEffect, useRef } from "react"

function useWordGame() {

    const startingTime = 20
    const [text, setText] = useState("")
    const [wordCount, setWordCount] = useState(0)
    const [timeRemanining, setTimeRemaining] = useState(startingTime)
    const [gameState, setGameState] = useState(false)

    const textRef = useRef(null)


    function textAreaHandler(event) {
        const { value } = event.target
        setText(value)
    }

    function calWordCount(str) {
        const wordArr = str.trim().split(" ")
        const wordCount = wordArr.filter(w => w !== "").length
        setWordCount(wordCount)
    }

    useEffect(() => {
        if (gameState && timeRemanining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if (timeRemanining === 0) {
            calWordCount(text)
            setGameState(false)
        }
    }, [timeRemanining, gameState])

    function startGame() {
        setText("")
        setTimeRemaining(startingTime)
        setGameState(true)
        setWordCount(0)
        textRef.current.disabled = false
        textRef.current.focus()
    }

    return {
        text,
        wordCount,
        timeRemanining,
        gameState,
        textAreaHandler,
        textRef,
        startGame
    }
}

export default useWordGame
