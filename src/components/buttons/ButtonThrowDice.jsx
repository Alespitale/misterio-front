import React from "react";
import { Button } from "@material-ui/core";
import { ws } from '../WebSocket'

const ButtonThrowDice = (props) => {

  const takes = {
    'action': 'match_roll_dice',
    'match_name': props.matchName
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        disabled = {props.diceRolled}
        onClick={() => {
          ws.send(JSON.stringify(takes))
          
        }}
      >
         Throw Dice
      </Button>
    </div>
  );
}

export default ButtonThrowDice;