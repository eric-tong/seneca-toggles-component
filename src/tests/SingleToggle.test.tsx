import React from 'react';
import {configure, mount, ReactWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SingleToggle, {SingleToggleProps} from "../components/SingleToggle";

const leftAnswer = "Answer 1";
const rightAnswer = "Answer 2";

configure({adapter: new Adapter()});
describe("SingleToggle", () => {
    let props: SingleToggleProps;
    let singleToggle: ReactWrapper<SingleToggleProps, {}, SingleToggle>;
    let setActiveState = (activeIndex: 0 | 1) => {
        singleToggle.setProps({activeIndex: activeIndex});
    };

    beforeEach(() => {
        props = {
            answers: [leftAnswer, rightAnswer],
            activeIndex: 0,
            onActiveIndexChange: setActiveState
        };
        singleToggle = mount(
            <SingleToggle {...props} />
        );
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
        const expected = [leftAnswer, rightAnswer];

        expect(actual).toEqual(expected);
    });

    it("Sets right answer index as active when clicked", () => {
        singleToggle.setProps({activeIndex: 0});
        const answerDivs = singleToggle.find(".answer");
        const rightAnswerDiv = answerDivs.at(1);

        rightAnswerDiv.simulate('click');
        const actual = singleToggle.props().activeIndex;
        const expected = 1;

        expect(actual).toEqual(expected);
    });

    it("Sets left answer index as active when clicked", () => {
        singleToggle.setProps({activeIndex: 1});
        const answerDivs = singleToggle.find(".answer");
        const leftAnswerDiv = answerDivs.at(0);

        leftAnswerDiv.simulate('click');
        const actual = singleToggle.props().activeIndex;
        const expected = 0;

        expect(actual).toEqual(expected);
    });

    it("Right answer contains active class when clicked", () => {
        singleToggle.setProps({activeIndex: 0});
        const answerDivs = singleToggle.find(".answer");
        const rightAnswerDiv = answerDivs.at(1);

        rightAnswerDiv.simulate('click');
        const hasActiveClass = singleToggle.find(".answer").at(1).hasClass("active");

        expect(hasActiveClass).toBeTruthy();
    });

    it("Left answer does not contain active class when right answer is clicked", () => {
        singleToggle.setProps({activeIndex: 0});
        const answerDivs = singleToggle.find(".answer");
        const rightAnswerDiv = answerDivs.at(1);

        rightAnswerDiv.simulate('click');
        const hasActiveClass = singleToggle.find(".answer").at(0).hasClass("active");

        expect(hasActiveClass).toBeFalsy();
    });

    it("Left answer contains active class when clicked", () => {
        singleToggle.setProps({activeIndex: 1});
        const answerDivs = singleToggle.find(".answer");
        const leftAnswerDiv = answerDivs.at(0);

        leftAnswerDiv.simulate('click');
        const hasActiveClass = singleToggle.find(".answer").at(0).hasClass("active");

        expect(hasActiveClass).toBeTruthy();
    });

    it("Right answer does not contain active class when left answer is clicked", () => {
        singleToggle.setProps({activeIndex: 1});
        const answerDivs = singleToggle.find(".answer");
        const leftAnswerDiv = answerDivs.at(0);

        leftAnswerDiv.simulate('click');
        const hasActiveClass = singleToggle.find(".answer").at(1).hasClass("active");

        expect(hasActiveClass).toBeFalsy();
    });
});
