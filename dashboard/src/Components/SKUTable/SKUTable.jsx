import React, { useState } from 'react'
import './SKUTable.css'

const SKUTable = ({ skuData }) => {
    const [activeTab, setActiveTab] = useState('Official Store')
    const [searchTerm, setSearchTerm] = useState('')

    const filteredData = skuData.filter(sku => 
        sku.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="skuTableContainer">
            {/* Header with Title and Action */}
            <div className="skuTableHeader">
                <h2 className="skuTableTitle">SKUs</h2>
                <div className="skuTableActions">
                    <button className="exportButton">📊 Export</button>
                </div>
            </div>

            {/* Tabs */}
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

            {/* Search Bar */}
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

            {/* Table */}
            <div className="skuTableWrapper">
                <table className="skuTable">
                    <thead>
                        <tr>
                            <th className="checkboxColumn">
                                <input type="checkbox" />
                            </th>
                            <th>SKU Name</th>
                            <th>Content Score</th>
                            <th>Title Coverage</th>
                            <th>Images</th>
                            <th>Bullet Points</th>
                            <th>Description</th>
                            <th>A+ Content</th>
                            <th>Reviews & Ratings</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((sku, index) => (
                            <tr key={index} className="skuTableRow">
                                <td className="checkboxColumn">
                                    <input type="checkbox" />
                                </td>
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
