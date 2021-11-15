import React, { useState, useContext } from 'react';
import { ws } from '../WebSocket'
import { TextField } from '@material-ui/core';
import { ThemeContext } from '../../context/ContextGeneral';

import './Chat.css';

const Chat = ({ buffer, newPlayer, leftPlayer }) => {

    const [msg, setMsg] = useState('');

    const dictStates = useContext(ThemeContext);

    const takesLobbySend = {
        'action': 'chat_lobby_send',
        'player_name': dictStates.nickname,
        'chat_name': dictStates.lobbyName,
        'message': msg
    };



    return (
        <div className="chat-container">

            <div className="chat-content">
                {buffer.map(buff => <p style={{ color: 'white' }}>{buff}</p>)}

                {newPlayer && <p style={{ color: '#99DD29' }}> {newPlayer} entry to the lobby</p>}
                {leftPlayer && <p style={{ color: '#BD1E2A' }}> {leftPlayer} left the lobby</p>}
            </div>


            <div className="chat-container-input">
                <TextField
                    className="chat-input"
                    ariant="filled"
                    size="small"
                    autoFocus={true}
                    value={msg}
                    onChange={(e) => { setMsg(e.target.value) }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            ws.send(JSON.stringify(takesLobbySend));
                            setMsg('')
                        }
                    }}
                >
                </TextField>
            </div>
        </div>
    );
};

export default Chat;