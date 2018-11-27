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
            options: [leftOptionContent, rightOptionContent]
        };
        singleToggle = mount(
            <SingleToggle {...props} />
        );
    });

    it("Contains two options", () => {
        const optionDivs = singleToggle.find(".option");
        expect(optionDivs.length).toEqual(2);
    });

    it("Contains options with content based on props", () => {
        const optionDivs = singleToggle.find(".option");
        expect(optionDivs.at(0).text()).toEqual(leftOptionContent);
        expect(optionDivs.at(1).text()).toEqual(rightOptionContent);
    });
});
