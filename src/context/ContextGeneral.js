import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ContextGeneral = (props) => {

    const [nickname, setNickname] = useState('');
    const [players, setPlayers] = useState([]);
    const [lobbyName, setLobbyName] = useState('')
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const [turn, setTurn] = useState('')
    const [tokenColor, setTokenColor] = useState('')

    const dictStates = {
        nickname: nickname,
        players: players,
        lobbyName: lobbyName,
        posX: posX,
        posY: posY,
        turn: turn,
        tokenColor: tokenColor,

        setNickname: nickname => setNickname(nickname),
        setPlayers: players => setPlayers(players),
        setLobbyName: lobbyName => setLobbyName(lobbyName),
        setPosX: posX => setPosX(posX),
        setPosY: posY => setPosY(posY),
        setTurn: turn => setTurn(turn),
        setTokenColor: tokenColor => setTokenColor(tokenColor)

    }

    return (
        <ThemeContext.Provider value={dictStates}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ContextGeneral;

// nickname, setNickname, players, setPlayers, posX, setPosX, posY, setPosY, turn, setTurn