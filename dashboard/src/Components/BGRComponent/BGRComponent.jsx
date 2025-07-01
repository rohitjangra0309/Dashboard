import React from 'react'
import './BGRComponent.css'

const BGRComponent = ({ categories, contentScore, assortmentScore, selectedCategoryId, onCategorySelect }) => {
    return (
        <div className="bgrContainer">
            {/* Header Row - BGR title and Search */}
            <div className="bgrTopHeader">
                <h2 className="bgrTitle">BGR</h2>
                <div className="bgrSearchContainer">
                    <div className="bgrSearchInputWrapper">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="bgrSearchInput"
                        />
                        <span className="bgrSearchIcon">🔍</span>
                    </div>
                </div>
            </div>

            {/* Second Row - Hamburger Menu, Score Cards, and Categories */}
            <div className="bgrSecondRow">
                {/* Left Side - Hamburger Menu and Score Cards */}
                <div className="bgrLeftContent">
                    {/* Hamburger Menu */}
                    <div className="bgrHamburgerContainer">
                        <div className="bgrHamburgerMenu">
                            <button className="hamburgerButton">
                                <div className="hamburgerLine"></div>
                                <div className="hamburgerLine"></div>
                                <div className="hamburgerLine"></div>
                            </button>
                        </div>
                    </div>

                    {/* Score Cards */}
                    <div className="bgrScoreCards">
                        <div className="bgrScoreCardContainer">
                            <div className="bgrScoreCard">
                                <div className="scoreLabel">Content <br /> Score</div>
                            </div>
                        </div>

                        <div className="bgrScoreCardContainer">
                            <div className="bgrScoreCard">
                                <div className="scoreLabel">Assortment</div>
                            </div>
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
                                    {category.chartData.brandContent && category.chartData.brandContent.length > 0 
                                        ? category.chartData.brandContent[category.chartData.brandContent.length - 1].value 
                                        : '00'}
                                </div>
                                <div className={`categoryTrendIndicator ${
                                    category.chartData.brandContent && category.chartData.brandContent.length > 1 ? 
                                        (category.chartData.brandContent[category.chartData.brandContent.length - 1].value - 
                                         category.chartData.brandContent[category.chartData.brandContent.length - 2].value) >= 0 ? 'positive' : 'negative'
                                        : 'positive'
                                }`}>
                                    {category.chartData.brandContent && category.chartData.brandContent.length > 1 ? 
                                        (category.chartData.brandContent[category.chartData.brandContent.length - 1].value - 
                                         category.chartData.brandContent[category.chartData.brandContent.length - 2].value) >= 0 ? '▲' : '▼'
                                        : '▲'} {category.chartData.brandContent && category.chartData.brandContent.length > 1 ? 
                                        ((category.chartData.brandContent[category.chartData.brandContent.length - 1].value - 
                                          category.chartData.brandContent[category.chartData.brandContent.length - 2].value) / 
                                          category.chartData.brandContent[category.chartData.brandContent.length - 2].value * 100).toFixed(1) 
                                        : '0.0'}% ({category.chartData.brandContent && category.chartData.brandContent.length > 1 ? 
                                        (category.chartData.brandContent[category.chartData.brandContent.length - 1].value - 
                                          category.chartData.brandContent[category.chartData.brandContent.length - 2].value).toFixed(0) 
                                        : '00'})
                                </div>
                            </div>
                            
                            {/* Rectangle 3: Trend */}
                            <div className="categoryScoreRect">
                                <div className={`categoryScore ${category.status}`}>
                                    {category.chartData.brandContent && category.chartData.brandContent.length > 0 
                                        ? category.chartData.brandContent[category.chartData.brandContent.length - 1].value 
                                        : '00'}
                                </div>
                                <div className={`categoryTrendIndicator ${
                                    category.chartData.brandContent && category.chartData.brandContent.length > 1 ? 
                                        (category.chartData.brandContent[category.chartData.brandContent.length - 1].value - 
                                         category.chartData.brandContent[category.chartData.brandContent.length - 2].value) >= 0 ? 'positive' : 'negative'
                                        : 'positive'
                                }`}>
                                    {category.chartData.brandContent && category.chartData.brandContent.length > 1 ? 
                                        (category.chartData.brandContent[category.chartData.brandContent.length - 1].value - 
                                         category.chartData.brandContent[category.chartData.brandContent.length - 2].value) >= 0 ? '▲' : '▼'
                                        : '▲'} {category.chartData.brandContent && category.chartData.brandContent.length > 1 ? 
                                        ((category.chartData.brandContent[category.chartData.brandContent.length - 1].value - 
                                          category.chartData.brandContent[category.chartData.brandContent.length - 2].value) / 
                                          category.chartData.brandContent[category.chartData.brandContent.length - 2].value * 100).toFixed(1) 
                                        : '0.0'}% ({category.chartData.brandContent && category.chartData.brandContent.length > 1 ? 
                                        (category.chartData.brandContent[category.chartData.brandContent.length - 1].value - 
                                          category.chartData.brandContent[category.chartData.brandContent.length - 2].value).toFixed(0) 
                                        : '00'})
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BGRComponent
