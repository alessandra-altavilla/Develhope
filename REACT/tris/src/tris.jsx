import { useState } from "react"

export default function Tris() {

    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState(null);

    const combos = {
        across: [[0,1,2], [3,4,5], [6,7,8]],
        down: [[0,3,6], [1,4,7], [2,5,8]],
        diagonal: [[0,4,8], [2,4,6]],
    }

    const handleClick = (num) => {
        if (cells[num] !== "" || winner) return;

        let squares = [...cells];
        squares [num] = turn;
        setCells(squares);
        checkWinner(squares);
        setTurn(turn === "X" ? "O" : "X");
    }

    const checkWinner = (squares) => {
        for (let combo in combos)
    }

    return (
        <div>
            <h1>My Tris</h1>
        </div>
    )
}