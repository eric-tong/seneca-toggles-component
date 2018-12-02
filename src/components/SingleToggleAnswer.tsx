import React, {Component} from "react";
import {getSingleToggleAnswerStyle} from "../styles/TogglesCardStyles";

export interface SingleToggleProps {
    content: string;
    isActive: boolean;
    hue?: number;
}

export default class SingleToggleAnswer extends Component<SingleToggleProps> {
    render() {
        return (
            <div className={this.classNames} style={this.singleToggleAnswerStyle}>
                {this.props.content}
            </div>
        );
    }

    private get singleToggleAnswerStyle() {
        return this.props.isActive ? getSingleToggleAnswerStyle(this.props.hue) : undefined;
    }

    private get classNames() {
        let className = "answer";
        if (this.props.isActive) {
            className += " active";
        }
        return className;
    }
}