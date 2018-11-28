import React from 'react';
import {configure, mount, ReactWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SingleTogglesContainer, {SingleTogglesContainerProps} from "../components/SingleTogglesContainer";

const answers: [string, string][] = [
    ["Answer 1-1", "Answer 1-2"],
    ["Answer 2-1", "Answer 2-2"],
    ["Answer 3-1", "Answer 3-2"],
    ["Answer 4-1", "Answer 4-2"]
];

configure({adapter: new Adapter()});
describe("SingleToggle", () => {
    let props: SingleTogglesContainerProps;
    let singleTogglesContainer: ReactWrapper<SingleTogglesContainerProps, {}, SingleTogglesContainer>;

    beforeEach(() => {
        props = {
            answerPairs: answers
        };
        singleTogglesContainer = mount(
            <SingleTogglesContainer {...props} />
        );
    });

    it("Contains the number of toggles equal to number of answer pairs", () => {
        const singleToggleDivs = singleTogglesContainer.find(".single-toggle");

        const actual = singleToggleDivs.length;
        const expected = answers.length;

        expect(actual).toEqual(expected);
    });

    it("Contains toggles with content equals to answer pairs", () => {
        const singleToggleDivs = singleTogglesContainer.find(".single-toggle");

        let actual: [string, string][] = [];
        singleToggleDivs.forEach(singleToggleDiv => {
            let singleToggleAnswerDivs = singleToggleDiv.find(".answer");
            let answerPair: [string, string] = [
                singleToggleAnswerDivs.at(0).text(),
                singleToggleAnswerDivs.at(1).text()
            ];
            actual.push(answerPair);
        });

        expect(actual).toEqual(answers);
    });
});
