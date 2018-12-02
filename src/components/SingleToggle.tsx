import React, {Component} from "react";
import SingleToggleAnswer from "./SingleToggleAnswer";
import {getSliderStyle} from "../styles/TogglesCardStyles";

export interface SingleToggleProps {
    answerPair: [string, string];
    activeIndex: 0 | 1;
    hue?: number;
    onClick: () => void;
}

export default class SingleToggle extends Component<SingleToggleProps> {
    render() {
        return (
            <div className="single-toggle-wrapper" onClick={() => this.props.onClick()}>
                <div className={this.sliderClassName} style={getSliderStyle(this.props.hue)}/>
                <div className="single-toggle">
                    {this.props.answerPair.map((answer, index) =>
                        <SingleToggleAnswer
                            key={index}
                            content={answer}
                            isActive={index == this.props.activeIndex}
                            hue={this.props.hue}/>
                    )}
                </div>
            </div>
        );
    }

    private get sliderClassName() {
        return "slider " + (this.props.activeIndex ? "right" : "left");
    }
}