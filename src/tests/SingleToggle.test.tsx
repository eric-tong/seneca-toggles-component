import React from 'react';
import {configure, mount, ReactWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SingleToggle, {SingleToggleProps, SingleToggleState} from "../components/SingleToggle";

const leftOptionContent = "Option 1";
const rightOptionContent = "Option 2";

configure({adapter: new Adapter()});
describe("SingleToggle", () => {
    let props: SingleToggleProps;
    let singleToggle: ReactWrapper<SingleToggleProps, SingleToggleState, SingleToggle>;

    beforeEach(() => {
        props = {
            optionsContent: [leftOptionContent, rightOptionContent]
        };
        singleToggle = mount(
            <SingleToggle {...props} />
        );
    });

    it("Contains two optionsContent", () => {
        const optionDivs = singleToggle.find(".option");

        const actual = optionDivs.length;
        const expected = 2;

        expect(actual).toEqual(expected);
    });

    it("Contains optionsContent with content based on props", () => {
        const optionDivs = singleToggle.find(".option");

        const actual = [optionDivs.at(0).text(), optionDivs.at(1).text()];
        const expected = [leftOptionContent, rightOptionContent];

        expect(actual).toEqual(expected);
    });

    it("Sets right option index as active when clicked", () => {
        singleToggle.setState({activeIndex: 0});
        const optionDivs = singleToggle.find(".option");
        const rightOptionDiv = optionDivs.at(1);

        rightOptionDiv.simulate('click');
        const actual = singleToggle.state().activeIndex;
        const expected = 1;

        expect(actual).toEqual(expected);
    });

    it("Sets left option index as active when clicked", () => {
        singleToggle.setState({activeIndex: 1});
        const optionDivs = singleToggle.find(".option");
        const leftOptionDiv = optionDivs.at(0);

        leftOptionDiv.simulate('click');
        const actual = singleToggle.state().activeIndex;
        const expected = 0;

        expect(actual).toEqual(expected);
    });

    it("Right option contains active class when clicked", () => {
        singleToggle.setState({activeIndex: 0});
        const optionDivs = singleToggle.find(".option");
        const rightOptionDiv = optionDivs.at(1);

        rightOptionDiv.simulate('click');
        const actual = rightOptionDiv.hasClass("active");

        expect(actual).toBeTruthy();
    });
});
