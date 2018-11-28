import React from "react";
import {Component} from "react";
import SingleToggleAnswer from "./SingleToggleAnswer";

export interface SingleToggleProps {
    answers: [string, string];
    activeIndex: 0 | 1;
    onActiveIndexChange: (activeIndex: 0 | 1) => void;
}

export default class SingleToggle extends Component<SingleToggleProps, {}> {
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
                        isActive={index == this.props.activeIndex}
                        onClick={() => this.props.onActiveIndexChange(index ? 1 : 0)}
                    />
                )}
            </div>
        );
    }
}