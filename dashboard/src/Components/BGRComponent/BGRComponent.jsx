import React from 'react'
import './BGRComponent.css'

const BGRComponent = ({ categories, contentScore, assortmentScore }) => {
    return (
        <div>


            {/* Search Bar */}

            <div className="bgrHeader">
                <h2>BGR</h2>
                <div className="bgrSearchContainer">

                    <input
                        type="text"
                        placeholder="Search..."
                        className="bgrSearchInput"
                    />
                    <button className="bgrSearchButton">🔍</button>
                </div>
            </div>




            {/* Right Side - BGR Content */}
            <div className="bgrRightPanel">
                {/* BGR Title */}


                {/* Menu and Scores Row */}
                <div className="bgrMenuScoresRow">
                    {/* Hamburger Menu */}
                    <div className="bgrHamburgerMenu">
                        <button className="hamburgerButton">
                            <div className="hamburgerLine"></div>
                            <div className="hamburgerLine"></div>
                            <div className="hamburgerLine"></div>
                        </button>
                    </div>

                    {/* Content Score */}
                    <div className="bgrScoreCard">
                        <div className="scoreLabel">Content Score</div>
                        <div className="scoreValue">{contentScore}</div>
                        <div className="scoreSubtext">Current</div>
                    </div>

                    {/* Assortment */}
                    <div className="bgrScoreCard">
                        <div className="scoreLabel">Assortment</div>
                        <div className="scoreValue">{assortmentScore}</div>
                        <div className="scoreSubtext">Total</div>
                    </div>
                </div>
            </div>

            {/* Main BGR Layout */}
            <div className="bgrMainContainer">
                {/* Left Side - Categories */}
                <div className="bgrLeftPanel">
                    <h3 className="bgrCategoriesTitle">Categories</h3>
                    <div className="bgrCategoriesList">
                        {categories.map((category, index) => (
                            <div key={index} className="bgrCategoryItem">
                                <div className="categoryLabel">
                                    {category.name}
                                </div>
                                <div className={`categoryScore ${category.status}`}>
                                    {category.score}
                                </div>
                                <div className={`statusIndicator ${category.status}`}></div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BGRComponent
