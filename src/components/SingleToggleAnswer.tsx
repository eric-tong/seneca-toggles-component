import React, {Component} from "react";

export interface SingleToggleProps {
    content: string;
    isActive: boolean;
}

export default class SingleToggleAnswer extends Component<SingleToggleProps> {
    render() {
        return (
            <div className={this.classNames}>
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