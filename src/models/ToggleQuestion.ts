import ToggleOption from "./ToggleOption";

export default class ToggleQuestion {
    statement: string;
    options: ToggleOption[];

    constructor(statement: string, ...options: ToggleOption[]) {
        this.statement = statement;
        this.options = options;
    }

    get incorrectAnswerIndices() {
        return this.options.map(option => option.correctAnswerIndex ? 0 : 1);
    }

    get answerPairs() {
        let toAnswerPair = (option: ToggleOption) => option.answerPair;
        return this.options.map(toAnswerPair);
    };
}