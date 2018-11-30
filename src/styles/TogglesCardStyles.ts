import {darkRedHue, darkYellowHue, lightRedHue, lightYellowHue} from "../constants/Colors";

export const getTogglesCardStyle = (percentageScore: number) => {
    if (percentageScore < 1) {
        const lightHueRange = lightYellowHue - lightRedHue;
        const darkHueRange = darkYellowHue - darkRedHue;

        const lightHue = lightRedHue + lightHueRange * percentageScore;
        const darkHue = darkRedHue + darkHueRange * percentageScore;
        return {
            backgroundImage: `linear-gradient(to bottom, hsla(${lightHue}deg, 93.9%, 68%, 0.7), hsla(${darkHue}deg, 93.2%, 53.9%, 0.69))`
        }
    } else {
        // noinspection SpellCheckingInspection
        return {
            backgroundImage: "linear-gradient(to bottom, #47E4c1, #07CDDD)"
        }
    }
};