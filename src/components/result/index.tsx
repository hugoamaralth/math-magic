import { useCountUp } from 'use-count-up';
import { ResultText, textShadow } from './styles';
import { useEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";

interface IResult {
    answer: number;
}

const Result: React.FC<IResult> = ({ answer }) => {

    const isFocused = useIsFocused();

    const { value, reset } = useCountUp({
        isCounting: true,
        end: answer,
        duration: 3,
        easing: 'easeOutCubic'
    })

    useEffect(() => {
        reset();
    }, [answer, isFocused])

    return (
        <ResultText style={{ ...textShadow.TS }}>
            {value}
        </ResultText>
    )
}

export default Result;