import React from 'react';
import {configure, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TogglesCard, {TogglesCardProps} from "../components/TogglesCard";
import ToggleQuestion from "../models/ToggleQuestion";
import ToggleOption from "../models/ToggleOption";

const toggleQuestion = new ToggleQuestion("Question statement",
    new ToggleOption("Answer 1-1", "Answer 1-2"),
    new ToggleOption("Answer 2-1", "Answer 2-2"),
    new ToggleOption("Answer 3-1", "Answer 3-2"),
    new ToggleOption("Answer 4-1", "Answer 4-2"),
);

configure({adapter: new Adapter()});
describe("TogglesCard", () => {
    let props: TogglesCardProps = {toggleQuestion: toggleQuestion};
    let togglesCard = mount(<TogglesCard {...props} />);

    beforeEach(() => {
        togglesCard.setProps(props);
    });

    it("Contains the number of toggles equal to number of options", () => {
        const singleToggleDivs = togglesCard.find(".single-toggle");

        const actual = singleToggleDivs.length;
        const expected = toggleQuestion.options.length;

        expect(actual).toEqual(expected);
    });
});
