// imports
import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ws } from "../WebSocket";
import { ThemeContext } from "../../context/ContextGeneral";

const ButtonStartGame = (props) => {

    const dictStates = useContext(ThemeContext)

    return (
        <div>
            <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={() => {
                    ws.send(JSON.stringify({
                        'action': 'lobby_start_match',
                        'player_name': dictStates.nickname,
                        'lobby_name': dictStates.lobbyName
                    }));
                }}
            >
                Start
            </Button>
        </div>

    );
};

export default ButtonStartGame;

