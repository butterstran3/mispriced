import { React, useState } from "react";
import "./tooltip.css";

const Tooltip = ({text, children}) => {
    
    const [visible, setVisible] = useState(false);

    return (
        <div className="tooltip_container" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {children}
            {visible && <div className="tooltip">{text}</div>}
        </div>
    )
}

export default Tooltip;