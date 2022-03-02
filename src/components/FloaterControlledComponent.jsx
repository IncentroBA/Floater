import React, { useState, createElement } from "react";
import Floater from "react-floater";

export function FloaterControlledComponent(props) {
    const [open, setOpen] = useState(false);

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <Floater
                open={open}
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
        </div>
    );
}
