import React, { createContext, useContext, useState } from "react";
import { NUMBERS } from "../core/utils";

interface IGameContextData {
    currentStep: number;
    answers: boolean[];
    getResult(): number;
    setStep(step: number): void;
    setAnswer(answer: boolean, step: number): void;
    resetGame(): void;
}

const GameContext = createContext<IGameContextData>({} as IGameContextData);

interface GameProviderData {
    children: React.ReactNode;
}

const GameProvider: React.FC<GameProviderData> = ({ children }) => {

    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<boolean[]>([]);

    const setAnswer = (answer: boolean, step: number) => {
        const newData: boolean[] = [...answers];
        newData[step] = answer;
        setAnswers(newData);
    }

    const setStep = (step: number) => {
        setCurrentStep(step);
    }

    const getResult = () => {
        let result = 0;
        answers.forEach((it, i) => {
            if (it) result += NUMBERS[i][0];
        })
        return result;
    }

    const resetGame = () => {
        setAnswers([]);
        setCurrentStep(0);
    }

    return (
        <GameContext.Provider value={{ currentStep, answers, getResult, setStep, setAnswer, resetGame }}>
            {children}
        </GameContext.Provider>
    )
}

const useGameProvider = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGameProvider must be used within an GameProvider.');
    }
    return context;
}

export { useGameProvider };
export default GameProvider;