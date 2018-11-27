import React from 'react';
import {configure, mount, ReactWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SingleToggle, {SingleToggleProps} from "../components/SingleToggle";

const leftOptionContent = "Option 1";
const rightOptionContent = "Option 2";

configure({adapter: new Adapter()});
describe("SingleToggle", () => {
    let props: SingleToggleProps;
    let singleToggle: ReactWrapper;

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
});
