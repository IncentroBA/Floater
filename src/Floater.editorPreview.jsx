import { createElement } from "react";
import { FloaterComponent } from "./components/FloaterComponent";

export function Preview({ content, eventDelay, target }) {
    return <FloaterComponent target={target} content={content} eventDelay={eventDelay} />;
}
