import React, { useState } from 'react'
import './Tooltip.css'

const Tooltip = ({ children, title, description }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div 
            className="tooltip-container"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className="tooltip">
                    <div className="tooltip-title">{title}</div>
                    <div className="tooltip-description">{description}</div>
                </div>
            )}
        </div>
    )
}

export default Tooltip 