import React from "react";
import "./titleScreen.css";

function TitleScreen() {
    return(
        <div className="titleScreenDiv">
            <div className="header">Blackjack</div>
            <div className="creditDiv">Choose your starting credits</div>
            <div className="playButtonDiv">
                <button className="playButton">Play</button>
            </div>
        </div>
    )
}

export default TitleScreen;