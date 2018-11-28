import React from "react";
import {Component} from "react";
import SingleToggleAnswer from "./SingleToggleAnswer";

export interface SingleToggleProps {
    answers: [string, string];
}

export interface SingleToggleState {
    activeIndex: 0 | 1;
}

export default class SingleTogglesContainer extends Component<SingleToggleProps, SingleToggleState> {
    constructor(props: SingleToggleProps) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    render() {
        return (
            <div>
                {this.props.answers.map((answer, index) =>
                    <SingleToggleAnswer
                        key={index}
                        content={answer}
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