import React, { useState } from 'react'
import './SKUTable.css'
import { useDashboard } from '../../context/DashboardContext'

const SKUTable = ({ skuData }) => {
    const [activeTab, setActiveTab] = useState('Official Store')
    const [searchTerm, setSearchTerm] = useState('')
    const { categories, selectedCategoryId } = useDashboard()

    // Get selected category name
    const selectedCategory = categories.find(cat => cat.id === selectedCategoryId)
    const selectedCategoryName = selectedCategory ? selectedCategory.name : 'All Categories'

    const filteredData = skuData.filter(sku => 
        sku.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="skuTableContainer">
            {/* Header with Title and Action */}
            <div className="skuTableHeader">
                <h2 className="skuTableTitle">SKUs - {selectedCategoryName}</h2>
                <div className="skuTableActions">
                    <button className="exportButton">📊 Export</button>
                </div>
            </div>

            {/* Tabs and Search in same container */}
            <div className="skuTabsSearchContainer">
                {/* Tabs on left */}
                <div className="skuTabs">
                    <button 
                        className={`skuTab ${activeTab === 'Official Store' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Official Store')}
                    >
                        📦 Official Store
                    </button>
                    <button 
                        className={`skuTab ${activeTab === 'Summaries' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Summaries')}
                    >
                        📋 Summaries
                    </button>
                </div>

                {/* Search on right */}
                <div className="skuSearchContainer">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="skuSearchInput"
                    />
                    <button className="skuSearchButton">🔍</button>
                    <button className="skuFilterButton">⚙️</button>
                </div>
            </div>

            {/* Table with 2-row header */}
            <div className="skuTableWrapper">
                <table className="skuTable">
                    <thead>
                        {/* First header row - Main column names */}
                        <tr className="headerRow1">
                            <th className="skuNameColumn">SKU NAME</th>
                            <th className="scoreColumn">CONTENT SCORE</th>
                            <th className="scoreColumn">TITLE COVERAGE</th>
                            <th className="scoreColumn">IMAGES</th>
                            <th className="scoreColumn">BULLET POINTS</th>
                            <th className="scoreColumn">DESCRIPTION</th>
                            <th className="scoreColumn">A+ CONTENT</th>
                            <th className="scoreColumn">REVIEWS & RATINGS</th>
                            <th className="actionColumn">ACTION</th>
                        </tr>
                        {/* Second header row - Sub details */}
                        <tr className="headerRow2">
                            <th className="skuNameColumn">Overall</th>
                            <th className="scoreColumn">{filteredData.length > 0 ? 
                                (filteredData.reduce((sum, sku) => sum + sku.contentScore, 0) / filteredData.length).toFixed(1) 
                                : '0.0'}</th>
                            <th className="scoreColumn">{filteredData.length > 0 ? 
                                (filteredData.reduce((sum, sku) => sum + sku.titleCoverage, 0) / filteredData.length).toFixed(1) 
                                : '0.0'}</th>
                            <th className="scoreColumn">{filteredData.length > 0 ? 
                                (filteredData.reduce((sum, sku) => sum + sku.images, 0) / filteredData.length).toFixed(1) 
                                : '0.0'}</th>
                            <th className="scoreColumn">{filteredData.length > 0 ? 
                                (filteredData.reduce((sum, sku) => sum + sku.bulletPoints, 0) / filteredData.length).toFixed(1) 
                                : '0.0'}</th>
                            <th className="scoreColumn">{filteredData.length > 0 ? 
                                (filteredData.reduce((sum, sku) => sum + sku.description, 0) / filteredData.length).toFixed(1) 
                                : '0.0'}</th>
                            <th className="scoreColumn">{filteredData.filter(sku => sku.aPlus === 'Yes').length}/{filteredData.length}</th>
                            <th className="scoreColumn">{filteredData.length > 0 ? 
                                (filteredData.reduce((sum, sku) => sum + sku.reviews, 0) / filteredData.length).toFixed(1) 
                                : '0.0'}</th>
                            <th className="actionColumn">⋯</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((sku, index) => (
                            <tr key={index} className="skuTableRow">
                                <td className="skuNameCell">
                                    <div className="skuNameContainer">
                                        <span className="skuName">{sku.name}</span>
                                    </div>
                                </td>
                                <td className="scoreCell">
                                    <div className="scoreContainer">
                                        <span className={`scoreValue ${sku.status.content}`}>
                                            {sku.contentScore}
                                        </span>
                                        <div className={`scoreDot ${sku.status.content}`}></div>
                                    </div>
                                </td>
                                <td className="scoreCell">
                                    <div className="scoreContainer">
                                        <span className={`scoreValue ${sku.status.title}`}>
                                            {sku.titleCoverage}
                                        </span>
                                        <div className={`scoreDot ${sku.status.title}`}></div>
                                    </div>
                                </td>
                                <td className="scoreCell">
                                    <div className="scoreContainer">
                                        <span className={`scoreValue ${sku.status.images}`}>
                                            {sku.images}
                                        </span>
                                        <div className={`scoreDot ${sku.status.images}`}></div>
                                    </div>
                                </td>
                                <td className="scoreCell">
                                    <div className="scoreContainer">
                                        <span className={`scoreValue ${sku.status.bullet}`}>
                                            {sku.bulletPoints}
                                        </span>
                                        <div className={`scoreDot ${sku.status.bullet}`}></div>
                                    </div>
                                </td>
                                <td className="scoreCell">
                                    <div className="scoreContainer">
                                        <span className={`scoreValue ${sku.status.desc}`}>
                                            {sku.description}
                                        </span>
                                        <div className={`scoreDot ${sku.status.desc}`}></div>
                                    </div>
                                </td>
                                <td className="aPlusCell">
                                    <span className="aPlusValue">{sku.aPlus}</span>
                                </td>
                                <td className="scoreCell">
                                    <div className="scoreContainer">
                                        <span className={`scoreValue ${sku.status.reviews}`}>
                                            {sku.reviews}
                                        </span>
                                        <div className={`scoreDot ${sku.status.reviews}`}></div>
                                    </div>
                                </td>
                                <td className="actionCell">
                                    <button className="actionMenuButton">⋯</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="skuTableFooter">
                <div className="skuPagination">
                    <span>1-7 of 100 SKUs</span>
                </div>
                <div className="skuPaginationControls">
                    <button className="paginationButton">←</button>
                    <button className="paginationButton">→</button>
                </div>
            </div>
        </div>
    )
}

export default SKUTable
