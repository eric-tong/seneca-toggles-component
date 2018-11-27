import React from 'react';
import SingleToggle, {SingleToggleProps} from "../components/SingleToggle";
import {mount, ReactWrapper} from "enzyme";

describe("SingleToggle", () => {
    let props: SingleToggleProps;
    let mountedSingleToggle: ReactWrapper | undefined;

    const getMountedSingleToggle = () => {
        if (!mountedSingleToggle) {
            mountedSingleToggle = mount(
                <SingleToggle {...props} />
            );
        }
        return mountedSingleToggle;
    };

    beforeEach(() => {
        props = {
            options: ["Option 1", "Option 2"]
        };
        mountedSingleToggle = undefined;
    });

});
