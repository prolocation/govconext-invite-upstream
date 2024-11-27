import React from "react";
import "./ErrorIndicator.scss";
import {ReactComponent as CriticalIcon} from "../icons/critical.svg";
import DOMPurify from "dompurify";

export default function ErrorIndicator({msg, standalone = false, decode = true, adjustMargin = false}) {
    const className = `error-indication ${standalone ? "standalone" : ""} ${adjustMargin ? "adjust-margin" : ""}`;
    msg = msg.replaceAll("?", "");
    return decode ? <span className={className}><CriticalIcon/>{msg}</span> :
        <span className={className}>
            <CriticalIcon/>
            <span className={"error-message"}
                  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(msg, {ADD_ATTR: ['target']})}}/>
        </span>
}