import "../styles/components/Collapse.css";
import Arrow from  '../assets/arrow.png';
import { useState } from "react";

function Collapse ({title, content}) {

const [isCollapsed, setIsCollapsed] = useState(true);
const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
};
    return (
        <div className="Collapse">
            <h2 className="Collapse-Title" onClick={toggleCollapse}>{title}
                <img 
                    src={Arrow} 
                    alt="Open-Info" 
                    className={isCollapsed ? "Arrow-Collapsed Toogled" : "Arrow-Collapsed"}
                />
            </h2> 
            {!isCollapsed &&<p>{content}</p>}
        </div>
    )
}

export default Collapse;