import React from "react";
import {Component} from "react";

export interface SingleToggleProps {
    content: string;
    isActive: boolean;
    onClick: () => void;
}

export default class SingleToggleOption extends Component<SingleToggleProps> {
    render() {
        return (
            <div className={this.getClassNames()} onClick={this.props.onClick}>
                {this.props.content}
            </div>
        );
    }

    getClassNames = () => {
        let className = "option";
        if (this.props.isActive) {
            className += " active";
        }
        return className;
    }
}