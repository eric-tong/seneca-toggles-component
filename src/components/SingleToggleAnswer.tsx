import React, {Component} from "react";

export interface SingleToggleProps {
    content: string;
    isActive: boolean;
    onClick: () => void;
}

export default class SingleToggleAnswer extends Component<SingleToggleProps> {
    render() {
        return (
            <div className={this.classNames} onClick={this.props.onClick}>
                {this.props.content}
            </div>
        );
    }

    get classNames() {
        let className = "answer";
        if (this.props.isActive) {
            className += " active";
        }
        return className;
    }
}