import React from "react";
import "./titleScreen.css";
import { Link } from "react-router-dom";
import goldCredit from "../imgs/goldCredit.png";

type titleScreenProps = {
    credits: number;
    setCredits: any;
};

const TitleScreen: React.FunctionComponent<titleScreenProps> = ({credits, setCredits}) => {


    const incrementCredits = () => {
        if (credits < 250) {
            setCredits((prevCredits: number) => prevCredits + 50);
        };
    };

    const decrementCredits = () => {
        if (credits > 0) {
            setCredits((prevCredits: number) => prevCredits - 50);
        }
    }


    return(
        <div className="titleScreenDiv">
            <div className="header">Blackjack</div>
            <div className="creditDiv">
                <div className="creditsTitle">Choose Your Starting Credits</div>
                <div className="creditsBody">
                    <div className="creditsDecrease" onClick={decrementCredits}>-</div>
                    <div className="creditsPreview">
                        <img src={goldCredit} alt="Gold Credit" className="creditImg"></img>
                        <div className="creditCount">{credits}</div>
                    </div>
                    <div className="creditsIncrease" onClick={incrementCredits}>+</div>
                </div>
            </div>
            <div className="playButtonDiv">
                <button className="playButton"><Link to="/play" className="buttonLink">Play</Link></button>
            </div>
        </div>
    );
};

export default TitleScreen;