import {darkBlueHue, darkRedHue, darkYellowHue, lightRedHue, lightYellowHue} from "../constants/Colors";

export const getTogglesCardStyle: (percentageScore: number) => { backgroundImage: string, pointerEvents: "all" | "none" }
    = (percentageScore: number) => {
    if (percentageScore < 1) {
        const lightHue = interpolate(lightRedHue, lightYellowHue, percentageScore);
        const darkHue = interpolate(darkRedHue, darkYellowHue, percentageScore);
        return {
            backgroundImage: `linear-gradient(to bottom, hsla(${lightHue}deg, 93.9%, 68%, 0.7), hsla(${darkHue}deg, 93.2%, 53.9%, 0.69))`,
            pointerEvents: "all"
        };
    } else {
        // noinspection SpellCheckingInspection
        return {
            backgroundImage: "linear-gradient(to bottom, #47E4C1, #07CDDD)",
            pointerEvents: "none"
        };
    }
};

export const getSingleToggleHue = (percentageScore: number) => {
    if (percentageScore < 1) {
        return interpolate(darkRedHue, darkYellowHue, percentageScore);
    } else {
        return darkBlueHue;
    }
};

export const getSliderStyle = (hue: number = average(lightRedHue, darkRedHue)) => {
    let shadowColor: string;
    if (hue < 50) {
        shadowColor = `hsla(${hue}deg, 58.5%, 48.2%, 0.4)`;
    } else {
        shadowColor = `hsla(${hue}deg, 51.1%, 44.8%, 0.5)`;
    }

    return {
        boxShadow: `0 0 6px 1px ${shadowColor}`
    };
};

export const getSingleToggleAnswerStyle = (hue: number = average(lightRedHue, darkRedHue)) => {
    let color: string;
    if (hue < 50) {
        color = `hsl(${hue}deg, 75.8%, 59.4%)`;
    } else {
        color = `hsl(${hue}deg, 100%, 34.5%)`;
    }

    return {
        color: color
    };
};

const interpolate = (from: number, to: number, percentage: number) => {
    const range = to - from;
    return from + range * percentage;
};

const average = (a: number, b: number) => {
    return (a + b) / 2;
};