import { Component, createElement } from "react";
import { FloaterComponent } from "./components/FloaterComponent";
import { FloaterControlledComponent } from "./components/FloaterControlledComponent";
import "./ui/Floater.css";

export default class Floater extends Component {
    render() {
        const hover = this.props.event == "hover" ? true : false;
        const noStyles = this.props.noStyles
            ? {
                  floater: {
                      filter: "none"
                  },
                  container: {
                      backgroundColor: "transparent",
                      color: "#000",
                      minHeight: 0,
                      minWidth: 0,
                      padding: 0
                  },
                  content: {
                      fontSize: 14
                  },
                  arrow: {
                      color: "transparent",
                      display: "none",
                      length: 0,
                      margin: 0,
                      spread: 0
                  }
              }
            : {};

        let floater;
        if (hover) {
            floater = (
                <FloaterControlledComponent
                    target={this.props.target}
                    content={this.props.content}
                    autoOpen={this.props.autoOpen}
                    disableFlip={this.props.disableFlip}
                    event={this.props.event}
                    disableHoverToClick={this.props.disableHoverToClick}
                    hideArrow={this.props.hideArrow}
                    offset={this.props.offset}
                    placement={this.props.placement}
                    showCloseButton={this.props.showCloseButton}
                    styles={noStyles}
                />
            );
        } else {
            floater = (
                <FloaterComponent
                    target={this.props.target}
                    content={this.props.content}
                    autoOpen={this.props.autoOpen}
                    disableFlip={this.props.disableFlip}
                    event={this.props.event}
                    disableHoverToClick={this.props.disableHoverToClick}
                    hideArrow={this.props.hideArrow}
                    offset={this.props.offset}
                    placement={this.props.placement}
                    showCloseButton={this.props.showCloseButton}
                    styles={noStyles}
                />
            );
        }
        return floater;
    }
}
