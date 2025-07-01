import React from 'react'
import './BGRComponent.css'

const BGRComponent = ({ categories, contentScore, assortmentScore, selectedCategoryId, onCategorySelect }) => {
    return (
        <div className="bgrContainer">
            {/* Header Row - BGR title and Search */}
            <div className="bgrTopHeader">
                <h2 className="bgrTitle">BGR</h2>
                <div className="bgrSearchContainer">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bgrSearchInput"
                    />
                    <button className="bgrSearchButton">🔍</button>
                </div>
            </div>

            {/* Second Row - Hamburger Menu, Score Cards, and Categories */}
            <div className="bgrSecondRow">
                {/* Left Side - Hamburger Menu and Score Cards */}
                <div className="bgrLeftContent">
                    {/* Hamburger Menu */}
                    <div className="bgrHamburgerMenu">
                        <button className="hamburgerButton">
                            <div className="hamburgerLine"></div>
                            <div className="hamburgerLine"></div>
                            <div className="hamburgerLine"></div>
                        </button>
                    </div>

                    {/* Score Cards */}
                    <div className="bgrScoreCards">
                        <div className="bgrScoreCard">
                            <div className="scoreLabel">Content Score</div>
                            <div className="scoreValue">{contentScore}</div>
                            <div className="scoreSubtext">Current</div>
                        </div>

                        <div className="bgrScoreCard">
                            <div className="scoreLabel">Assortment</div>
                            <div className="scoreValue">{assortmentScore}</div>
                            <div className="scoreSubtext">Total</div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Categories */}
                <div className="bgrCategoriesRow">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className={`bgrCategoryCard ${selectedCategoryId === category.id ? 'selected' : ''}`}
                            onClick={() => onCategorySelect(category.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            {/* Rectangle 1: Category Name */}
                            <div className="categoryHeaderRect">
                                <div className="categoryLabel">
                                    {category.name}
                                </div>
                            </div>
                            
                            {/* Rectangle 2: Score */}
                            <div className="categoryScoreRect">
                                <div className={`categoryScore ${category.status}`}>
                                    {category.score}
                                </div>
                            </div>
                            
                            {/* Rectangle 3: Status */}
                            <div className="categoryStatusRect">
                                <div className="categorySubtitle">
                                    Status: {category.status}
                                </div>
                                <div className={`statusIndicator ${category.status}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BGRComponent
