import React,{useEffect} from "react";
import ListGames from "../list-games";
import {Button} from "@material-ui/core";
import axios from 'axios'
import api from '../../configs/api'

const ButtonJoinGame = () => {

  useEffect(() => {

    const joinGame = async () => {
        try {
            const response = await axios({
                method: 'put',
                url: `${api.url}/join-player`,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        catch (error) {
            console.log(error, "The lobby is full or the player is already in the lobby");
        }
    };
    joinGame();
  }, []);

  return (
    <div>
      <Button variant = "contained" color = "secondary" onClick = {ListGames}> Join Game </Button>
    </div>
  );
}



export default ButtonJoinGame