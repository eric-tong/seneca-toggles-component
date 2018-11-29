import React from 'react';
import {configure, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SingleTogglesContainer from "../components/SingleTogglesContainer";

const answers: [string, string][] = [
    ["Answer 1-1", "Answer 1-2"],
    ["Answer 2-1", "Answer 2-2"],
    ["Answer 3-1", "Answer 3-2"],
    ["Answer 4-1", "Answer 4-2"]
];

configure({adapter: new Adapter()});
describe("SingleToggle", () => {
    let props = {answerPairs: answers};
    let singleTogglesContainer = mount(<SingleTogglesContainer {...props} />);

    beforeEach(() => {
        singleTogglesContainer.setProps(props);
    });

    it("Contains the number of toggles equal to number of answer pairs", () => {
        const singleToggleDivs = singleTogglesContainer.find(".single-toggle");

        const actual = singleToggleDivs.length;
        const expected = answers.length;

        expect(actual).toEqual(expected);
    });

    it("Contains toggles with content equals to answer pairs", () => {
        const singleToggleDivs = singleTogglesContainer.find(".single-toggle");

        let actual = singleToggleDivs.map(singleToggleDiv => {
            let singleToggleAnswerDivs = singleToggleDiv.find(".answer");
            return [
                singleToggleAnswerDivs.at(0).text(),
                singleToggleAnswerDivs.at(1).text()
            ];
        });

        expect(actual).toEqual(answers);
    });

    it("Activates answers based on active indices", () => {
        const activeIndices: (0 | 1)[] = [0, 1, 0, 1];
        singleTogglesContainer.setState({activeIndices: activeIndices});
        const singleToggleAnswerDivs = singleTogglesContainer.find(".active");

        let actual = singleToggleAnswerDivs.map(singleToggleAnswerDiv => singleToggleAnswerDiv.text());
        let expected = answers.map((answer, index) => answer[activeIndices[index]]);

        expect(actual).toEqual(expected);
    });

    it("Activates answers based on active indices", () => {
        const activeIndices: (0 | 1)[] = [0, 1, 0, 1];
        singleTogglesContainer.setState({activeIndices: activeIndices});
        const singleToggleAnswerDivs = singleTogglesContainer.find(".active");

        let actual = singleToggleAnswerDivs.map(singleToggleAnswerDiv => singleToggleAnswerDiv.text());
        let expected = answers.map((answer, index) => answer[activeIndices[index]]);

        expect(actual).toEqual(expected);
    });
});
