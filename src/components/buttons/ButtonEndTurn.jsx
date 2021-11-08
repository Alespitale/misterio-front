import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ws } from '../WebSocket'
import { ThemeContext } from "../../context/ContextGeneral";

const ButtonEndTurn = (buttonSuspTrue) => {

    const dictStates = useContext(ThemeContext)

    const takes = {
        'action': 'match_end_turn',
        'match_name': dictStates.lobbyName
    };
    const handleClick = () => buttonSuspTrue

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                disabled={dictStates.nickname === dictStates.turn ? false : true}
                onClick={() => {
                    ws.send(JSON.stringify(takes));
                    handleClick()
                    
                }}
            >
                End Turn
            </Button>
        </div>

    );
};

export default ButtonEndTurn;