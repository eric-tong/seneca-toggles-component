import React from 'react';
import {configure, mount, ReactWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TogglesCard, {TogglesCardProps, TogglesCardState} from "../components/TogglesCard";
import ToggleQuestion from "../models/ToggleQuestion";
import ToggleOption from "../models/ToggleOption";

const toggleQuestion = new ToggleQuestion("Question statement",
    new ToggleOption("Answer 1-1", "Answer 1-2", 0),
    new ToggleOption("Answer 2-1", "Answer 2-2", 0),
    new ToggleOption("Answer 3-1", "Answer 3-2", 1),
    new ToggleOption("Answer 4-1", "Answer 4-2", 1)
);
const activeAnswersIndices: (0 | 1)[] = [0, 0, 0, 0];

configure({adapter: new Adapter()});
describe("TogglesCard", () => {
    let props: TogglesCardProps = {toggleQuestion: toggleQuestion, defaultActiveAnswerIndices: [1, 1, 0, 0]};
    let state: TogglesCardState = {activeAnswerIndices: activeAnswersIndices, currentScore: 0};
    let togglesCard: ReactWrapper<TogglesCardProps, TogglesCardState, TogglesCard> = mount(<TogglesCard {...props} />);

    beforeEach(() => {
        togglesCard.setProps(props);
        togglesCard.setState(state);
    });

    it("Contains the number of toggles equal to number of options", () => {
        const singleToggleDivs = togglesCard.find(".single-toggle");

        const actual = singleToggleDivs.length;
        const expected = toggleQuestion.options.length;

        expect(actual).toEqual(expected);
    });

    it("Switches active index on clicking single toggle", () => {
        const activeAnswerIndices: (0 | 1)[] = [0, 0, 0, 0];
        togglesCard.setState({activeAnswerIndices: activeAnswerIndices});
        const singleToggleAnswerDivs = togglesCard.find(".single-toggle");

        singleToggleAnswerDivs.at(0).simulate("click");
        singleToggleAnswerDivs.at(2).simulate("click");

        let actual = togglesCard.state("activeAnswerIndices");
        let expected = [1, 0, 1, 0];

        expect(actual).toEqual(expected);
    });

    it("Calculates current score from state", () => {
        const activeAnswerIndices: (0 | 1)[] = [0, 0, 0, 0];
        togglesCard.setState({activeAnswerIndices: activeAnswerIndices});

        let actual = togglesCard.state().currentScore;
        let expected = 2;

        expect(actual).toEqual(expected);
    });

    it("Locks when all responses are correct", () => {
        const activeAnswerIndices: (0 | 1)[] = [0, 0, 1, 1];
        togglesCard.setState({activeAnswerIndices: activeAnswerIndices});
        const singleToggleAnswerDivs = togglesCard.find(".single-toggle");

        singleToggleAnswerDivs.at(0).simulate("click");
        singleToggleAnswerDivs.at(2).simulate("click");

        let actual = togglesCard.state("activeAnswerIndices");
        let expected = [0, 0, 1, 1];

        expect(actual).toEqual(expected);
    });

    it("Resets to default active indices if the number of options changes", () => {
        const activeAnswerIndices: (0 | 1)[] = [0, 0, 1, 1];
        togglesCard.setState({activeAnswerIndices: activeAnswerIndices});
        const defaultActiveAnswerIndices: (0 | 1)[] = [1, 1, 1, 1, 1];

        let toggleQuestion = togglesCard.props().toggleQuestion;
        toggleQuestion.options.push(new ToggleOption("Answer 5-1", "Answer 5-2", 1));
        togglesCard.setProps({
            toggleQuestion: toggleQuestion,
            defaultActiveAnswerIndices: defaultActiveAnswerIndices
        });

        let actual = togglesCard.state("activeAnswerIndices");

        expect(actual).toEqual(defaultActiveAnswerIndices);
    });
});
