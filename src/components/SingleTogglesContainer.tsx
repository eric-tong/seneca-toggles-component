import React from "react";
import {Component} from "react";
import SingleToggle from "./SingleToggle";

export interface SingleTogglesContainerProps {
    answerPairs: [string, string][];
}

export default class SingleTogglesContainer extends Component<SingleTogglesContainerProps, {}> {
    render() {
        return (
            <div>
                {this.props.answerPairs.map((answer, index) =>
                    <SingleToggle
                        key={index}
                        answerPair={answer}
                        activeIndex={0}
                        onActiveIndexChange={() => {
                        }}/>
                    )}
            </div>
        );
    }
}