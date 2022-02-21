import { Component, createElement } from "react";
import { FloaterComponent } from "./components/FloaterComponent";

export default class Floater extends Component {
    render() {
        return (
            <FloaterComponent
                target={this.props.target}
                content={this.props.content}
                eventDelay={this.props.eventDelay}
            />
        );
    }
}

export function getPreviewCss() {
    return require("./ui/Floater.css");
}
