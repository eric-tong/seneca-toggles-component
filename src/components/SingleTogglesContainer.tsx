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
                {this.props.answerPairs.map((answerPair, index) =>
                    <SingleToggle
                        key={index}
                        answerPair={answerPair}
                        activeIndex={0}
                        onAnswerClick={() => {
                        }}/>
                    )}
            </div>
        );
    }
}