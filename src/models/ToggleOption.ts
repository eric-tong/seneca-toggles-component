export default class ToggleOption {
    answerPair: [string, string];
    correctAnswerIndex: 0 | 1;

    constructor(leftAnswer: string, rightAnswer: string, correctAnswerIndex: 0 | 1) {
        this.answerPair = [leftAnswer, rightAnswer];
        this.correctAnswerIndex = correctAnswerIndex;
    }
}