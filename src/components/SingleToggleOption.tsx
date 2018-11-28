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
            <div className="option" onClick={this.props.onClick}>
                {this.props.content}
            </div>
        );
    }
}