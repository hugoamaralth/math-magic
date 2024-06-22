import { LinearGradient } from 'expo-linear-gradient'

interface IValues {
    x: number;
    y: number;
}


interface IBackGradient {
    colors: string[];
    values?: {
        start: IValues,
        end: IValues
    };
    style?: any;
    children: React.ReactNode;
}


const defValues = {
    start: {
        x: 0,
        y: 0,
    },
    end: {
        x: 1,
        y: 0
    }
}

const BackGradient: React.FC<IBackGradient> = ({ colors, values: propValues, children, style }) => {
    const values = propValues ? propValues : defValues;
    return (
        <LinearGradient colors={colors} {...values} style={[{ padding: 2, borderRadius: 10 }, style]}>
            {children}
        </LinearGradient >
    )
}

export default BackGradient;