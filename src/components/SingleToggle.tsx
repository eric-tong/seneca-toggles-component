import React from "react";
import {Component} from "react";
import SingleToggleOption from "./SingleToggleOption";

export interface SingleToggleProps {
    optionsContent: [string, string];
}

export interface SingleToggleState {
    activeIndex: 0 | 1;
}

export default class SingleToggle extends Component<SingleToggleProps, SingleToggleState> {
    constructor(props: SingleToggleProps) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    render() {
        return (
            <div>
                {this.props.optionsContent.map((option, index) =>
                    <SingleToggleOption
                        key={index}
                        content={option}
                        isActive={index == this.state.activeIndex}
                        onClick={() => this.setActiveState(index)}
                    />
                )}
            </div>
        );
    }

    setActiveState = (activeIndex: number) => {
        this.setState({
            activeIndex: activeIndex ? 1 : 0
        });
    }
}