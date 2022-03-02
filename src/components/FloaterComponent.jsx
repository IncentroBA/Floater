import { createElement } from "react";
import Floater from "react-floater";

export function FloaterComponent(props) {
    return (
        <Floater
            autoOpen={props.autoOpen}
            content={props.content}
            disableFlip={props.disableFlip}
            disableHoverToClick={props.disableHoverToClick}
            event={props.event}
            eventDelay={props.eventDelay}
            hideArrow={props.hideArrow}
            offset={props.offset}
            placement={props.placement}
            showCloseButton={props.showCloseButton}
            styles={props.styles}
        >
            {props.target}
        </Floater>
    );
}
