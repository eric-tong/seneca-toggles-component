import React from 'react';
import {configure, mount, ReactWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SingleTogglesContainer, {SingleTogglesContainerProps} from "../components/SingleTogglesContainer";

const answerPairs: [string, string][] = [
    ["Answer 1-1", "Answer 1-2"],
    ["Answer 2-1", "Answer 2-2"],
    ["Answer 3-1", "Answer 3-2"],
    ["Answer 4-1", "Answer 4-2"]
];
const activeAnswerIndices: (0 | 1)[] = [0, 1, 0, 1];

configure({adapter: new Adapter()});
describe("SingleToggle", () => {
    let singleTogglesContainer: ReactWrapper<SingleTogglesContainerProps, {}, SingleTogglesContainer>;
    let onAnswerClick = (singleToggleIndex: number, selectedAnswerIndex: 0 | 1) => {
        let activeAnswerIndices = singleTogglesContainer.prop("activeAnswerIndices");
        activeAnswerIndices[singleToggleIndex] = selectedAnswerIndex;
        singleTogglesContainer.setProps({activeAnswerIndices: activeAnswerIndices});
    };
    let props = {answerPairs: answerPairs, activeAnswerIndices: activeAnswerIndices, onAnswerClick: onAnswerClick};
    singleTogglesContainer = mount(<SingleTogglesContainer {...props} />);

    beforeEach(() => {
        singleTogglesContainer.setProps(props);
    });

    it("Contains the number of toggles equal to number of answer pairs", () => {
        const singleToggleDivs = singleTogglesContainer.find(".single-toggle");

        const actual = singleToggleDivs.length;
        const expected = answerPairs.length;

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

        expect(actual).toEqual(answerPairs);
    });

    it("Activates answers based on active indices", () => {
        const activeAnswerIndices: (0 | 1)[] = [0, 1, 0, 1];
        singleTogglesContainer.setProps({activeAnswerIndices: activeAnswerIndices});
        const singleToggleAnswerDivs = singleTogglesContainer.find(".active");

        let actual = singleToggleAnswerDivs.map(singleToggleAnswerDiv => singleToggleAnswerDiv.text());
        let expected = answerPairs.map((answer, index) => answer[activeAnswerIndices[index]]);

        expect(actual).toEqual(expected);
    });

    it("Clicking on active answer does not switch active index", () => {
        const activeAnswerIndices: (0 | 1)[] = [0, 0, 0, 0];
        singleTogglesContainer.setProps({activeAnswerIndices: activeAnswerIndices});
        const singleToggleAnswerDivs = singleTogglesContainer.find(".answer");

        singleToggleAnswerDivs.at(0).simulate("click");
        singleToggleAnswerDivs.at(4).simulate("click");

        let actual = singleTogglesContainer.prop("activeAnswerIndices");
        let expected = [0, 0, 0, 0];

        expect(actual).toEqual(expected);
    });

    it("Clicking on inactive answer switches active index", () => {
        const activeAnswerIndices: (0 | 1)[] = [0, 0, 0, 0];
        singleTogglesContainer.setProps({activeAnswerIndices: activeAnswerIndices});
        const singleToggleAnswerDivs = singleTogglesContainer.find(".answer");

        singleToggleAnswerDivs.at(1).simulate("click");
        singleToggleAnswerDivs.at(5).simulate("click");

        let actual = singleTogglesContainer.prop("activeAnswerIndices");
        let expected = [1, 0, 1, 0];

        expect(actual).toEqual(expected);
    });
});
