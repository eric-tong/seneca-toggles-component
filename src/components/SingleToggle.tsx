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
    render() {
        return (
            <div>
                {this.props.optionsContent.map((option, index) =>
                    <SingleToggleOption
                        key={index}
                        content={option}
                        isActive={true}
                        onClick={() => this.setActiveState(index == 0 ? 0 : 1)}
                    />
                )}
            </div>
        );
    }

    setActiveState = (activeIndex: 0 | 1) => {
        this.setState({
            activeIndex: activeIndex
        });
    }
}