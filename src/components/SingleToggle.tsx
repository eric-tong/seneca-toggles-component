import {Component} from "react";
import React from "react";

export interface SingleToggleProps {
    options: [string, string];
}

export interface SingleToggleState {
    activeIndex: 0 | 1;
}

export default class SingleToggle extends Component<SingleToggleProps, SingleToggleState> {
    render() {
        return (
            <div>
                <div className="option">Toggle</div>
                <div className="option">Toggle</div>
            </div>
        );
    }
}