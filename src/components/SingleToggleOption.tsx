import React from "react";
import {Component} from "react";

export interface SingleToggleProps {
    content: string;
    isActive: boolean;
}

export default class SingleToggleOption extends Component<SingleToggleProps> {
    render() {
        return (
            <div className="option">
                {this.props.content}
            </div>
        );
    }
}