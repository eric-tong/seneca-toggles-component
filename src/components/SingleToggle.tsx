import React, {Component} from "react";
import SingleToggleAnswer from "./SingleToggleAnswer";

export interface SingleToggleProps {
    answerPair: [string, string];
    activeIndex: 0 | 1;
    onClick: () => void;
}

export default class SingleToggle extends Component<SingleToggleProps> {
    render() {
        return (
            <div className="single-toggle-wrapper" onClick={() => this.props.onClick()}>
                <div className={this.sliderClassName}/>
                <div className="single-toggle">
                    {this.props.answerPair.map((answer, index) =>
                        <SingleToggleAnswer
                            key={index}
                            content={answer}
                            isActive={index == this.props.activeIndex}
                        />
                    )}
                </div>
            </div>
        );
    }

    get sliderClassName() {
        return "slider " + (this.props.activeIndex ? "right" : "left");
    }
}