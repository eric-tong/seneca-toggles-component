import React from 'react';
import {configure, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SingleToggle, {SingleToggleProps} from "../components/SingleToggle";

const answerPair: [string, string] = ["Answer 1", "Answer 2"];

configure({adapter: new Adapter()});
describe("SingleToggle", () => {
    let setActiveState = () => {
        let activeIndex = singleToggle.prop("activeIndex");
        singleToggle.setProps({activeIndex: activeIndex ? 0 : 1});
    };
    let props: SingleToggleProps = {
        answerPair: answerPair,
        activeIndex: 0,
        onClick: setActiveState
    };
    let singleToggle = mount(<SingleToggle {...props} />);

    beforeEach(() => {
        singleToggle.setProps(props);
    });

    it("Contains two answersContent", () => {
        const answerDivs = singleToggle.find(".answer");

        const actual = answerDivs.length;
        const expected = 2;

        expect(actual).toEqual(expected);
    });

    it("Contains answersContent with content based on props", () => {
        const answerDivs = singleToggle.find(".answer");

        const actual = [answerDivs.at(0).text(), answerDivs.at(1).text()];

        expect(actual).toEqual(answerPair);
    });

    it("Sets right answer index as active when clicked and left index is active", () => {
        singleToggle.setProps({activeIndex: 0});

        singleToggle.simulate('click');
        const actual = singleToggle.props().activeIndex;
        const expected = 1;

        expect(actual).toEqual(expected);
    });

    it("Sets left answer index as active when clicked and right index is active", () => {
        singleToggle.setProps({activeIndex: 1});

        singleToggle.simulate('click');
        const actual = singleToggle.props().activeIndex;
        const expected = 0;

        expect(actual).toEqual(expected);
    });

    it("Right answer contains active class when clicked and left answer is active", () => {
        singleToggle.setProps({activeIndex: 0});

        singleToggle.simulate('click');
        const hasActiveClass = singleToggle.find(".answer").at(1).hasClass("active");

        expect(hasActiveClass).toBeTruthy();
    });

    it("Left answer does not contain active class when clicked and left answer is active", () => {
        singleToggle.setProps({activeIndex: 0});

        singleToggle.simulate('click');
        const hasActiveClass = singleToggle.find(".answer").at(0).hasClass("active");

        expect(hasActiveClass).toBeFalsy();
    });

    it("Left answer contains active class when clicked and right answer is active", () => {
        singleToggle.setProps({activeIndex: 1});

        singleToggle.simulate('click');
        const hasActiveClass = singleToggle.find(".answer").at(0).hasClass("active");

        expect(hasActiveClass).toBeTruthy();
    });

    it("Right answer does not contain active class when clicked and right answer is active", () => {
        singleToggle.setProps({activeIndex: 1});

        singleToggle.simulate('click');
        const hasActiveClass = singleToggle.find(".answer").at(1).hasClass("active");

        expect(hasActiveClass).toBeFalsy();
    });
});
