import React from "react";
import {Component} from "react";
import SingleToggleAnswer from "./SingleToggleAnswer";

export interface SingleToggleProps {
    answerPair: [string, string];
    activeIndex: 0 | 1;
    onAnswerClick: (activeIndex: 0 | 1) => void;
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
            <div className="single-toggle">
                {this.props.answerPair.map((answer, index) =>
                    <SingleToggleAnswer
                        key={index}
                        content={answer}
                        isActive={index == this.props.activeIndex}
                        onClick={() => this.props.onAnswerClick(index ? 1 : 0)}
                    />
                )}
            </div>
        );
    }
}