import React, {useState} from "react";

type gameScreenProps = {
    credits: number;
    setCredits: any;
}

const GameScreen: React.FunctionComponent<gameScreenProps> = ({credits, setCredits}) => {
    const [cards, setCards] = useState([] as any);
    const [betAmount, setBetAmount] = useState(0 as number);


    return(
        <div className="gameScreenDiv">Game Screen</div>
    );
};

export default GameScreen;