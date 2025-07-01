import React, { useState } from 'react'
import './SKUTable.css'
import Tooltip from './Tooltip'
import ChartModal from './ChartModal'
import { useDashboard } from '../../context/DashboardContext'

const SKUTable = ({ skuData }) => {
    const [activeTab, setActiveTab] = useState('Official Store')
    const [searchTerm, setSearchTerm] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedSku, setSelectedSku] = useState(null)
    const { categories, selectedCategoryId } = useDashboard()

    // Get selected category name
    const selectedCategory = categories.find(cat => cat.id === selectedCategoryId)
    const selectedCategoryName = selectedCategory ? selectedCategory.name : 'All Categories'

    // Tooltip content for each column
    const tooltipContent = {
        contentScore: {
            title: "Content Score",
            description: "Overall content quality score based on title, images, description, and bullet points"
        },
        titleCoverage: {
            title: "Title Coverage",
            description: "How well the product title covers important keywords and product features"
        },
        images: {
            title: "Images",
            description: "Quality and completeness of product images including main and lifestyle photos"
        },
        bulletPoints: {
            title: "Bullet Points",
            description: "Quality and effectiveness of product feature bullet points"
        },
        description: {
            title: "Description",
            description: "Completeness and quality of the product description content"
        },
        aPlusContent: {
            title: "A+ Content",
            description: "Whether the product has enhanced A+ content for better presentation"
        },
        reviews: {
            title: "Reviews & Ratings",
            description: "Overall review score and rating performance for the product"
        }
    }

    const filteredData = skuData.filter(sku => 
        sku.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleOpenChart = (sku) => {
        setSelectedSku(sku)
        setModalOpen(true)
    }

    const handleCloseChart = () => {
        setModalOpen(false)
        setSelectedSku(null)
    }

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
                            <th className="scoreColumn">
                                <Tooltip 
                                    title={tooltipContent.contentScore.title}
                                    description={tooltipContent.contentScore.description}
                                >
                                    CONTENT SCORE
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title={tooltipContent.titleCoverage.title}
                                    description={tooltipContent.titleCoverage.description}
                                >
                                    TITLE COVERAGE
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title={tooltipContent.images.title}
                                    description={tooltipContent.images.description}
                                >
                                    IMAGES
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title={tooltipContent.bulletPoints.title}
                                    description={tooltipContent.bulletPoints.description}
                                >
                                    BULLET POINTS
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title={tooltipContent.description.title}
                                    description={tooltipContent.description.description}
                                >
                                    DESCRIPTION
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title={tooltipContent.aPlusContent.title}
                                    description={tooltipContent.aPlusContent.description}
                                >
                                    A+ CONTENT
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title={tooltipContent.reviews.title}
                                    description={tooltipContent.reviews.description}
                                >
                                    REVIEWS & RATINGS
                                </Tooltip>
                            </th>
                            <th className="actionColumn">ACTION</th>
                        </tr>
                        {/* Second header row - Sub details */}
                        <tr className="headerRow2">
                            <th className="skuNameColumn">Overall</th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title="Average Content Score"
                                    description={`Average content score across all ${filteredData.length} SKUs in this category`}
                                >
                                    {filteredData.length > 0 ? 
                                        (filteredData.reduce((sum, sku) => sum + sku.contentScore, 0) / filteredData.length).toFixed(1) 
                                        : '0.0'}
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title="Average Title Coverage"
                                    description={`Average title coverage score across all ${filteredData.length} SKUs in this category`}
                                >
                                    {filteredData.length > 0 ? 
                                        (filteredData.reduce((sum, sku) => sum + sku.titleCoverage, 0) / filteredData.length).toFixed(1) 
                                        : '0.0'}
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title="Average Images Score"
                                    description={`Average images score across all ${filteredData.length} SKUs in this category`}
                                >
                                    {filteredData.length > 0 ? 
                                        (filteredData.reduce((sum, sku) => sum + sku.images, 0) / filteredData.length).toFixed(1) 
                                        : '0.0'}
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title="Average Bullet Points Score"
                                    description={`Average bullet points score across all ${filteredData.length} SKUs in this category`}
                                >
                                    {filteredData.length > 0 ? 
                                        (filteredData.reduce((sum, sku) => sum + sku.bulletPoints, 0) / filteredData.length).toFixed(1) 
                                        : '0.0'}
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title="Average Description Score"
                                    description={`Average description score across all ${filteredData.length} SKUs in this category`}
                                >
                                    {filteredData.length > 0 ? 
                                        (filteredData.reduce((sum, sku) => sum + sku.description, 0) / filteredData.length).toFixed(1) 
                                        : '0.0'}
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title="A+ Content Adoption"
                                    description={`${filteredData.filter(sku => sku.aPlus === 'Yes').length} out of ${filteredData.length} SKUs have A+ content`}
                                >
                                    {filteredData.filter(sku => sku.aPlus === 'Yes').length}/{filteredData.length}
                                </Tooltip>
                            </th>
                            <th className="scoreColumn">
                                <Tooltip 
                                    title="Average Reviews Score"
                                    description={`Average reviews and ratings score across all ${filteredData.length} SKUs in this category`}
                                >
                                    {filteredData.length > 0 ? 
                                        (filteredData.reduce((sum, sku) => sum + sku.reviews, 0) / filteredData.length).toFixed(1) 
                                        : '0.0'}
                                </Tooltip>
                            </th>
                            <th className="actionColumn">⋯</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((sku, index) => (
                            <tr key={index} className="skuTableRow">
                                <td className="skuNameCell">
                                    <div className="skuNameContainer">
                                        <span className="skuName">{sku.name}</span>
                                        <button 
                                            className="chart-button"
                                            onClick={() => handleOpenChart(sku)}
                                            title="View Performance Chart"
                                        >
                                            📊
                                        </button>
                                    </div>
                                </td>
                                <td className="scoreCell">
                                    <Tooltip 
                                        title={tooltipContent.contentScore.title}
                                        description={`Score: ${sku.contentScore}/100 - ${tooltipContent.contentScore.description}`}
                                    >
                                        <div className="scoreContainer">
                                            <span className={`scoreValue ${sku.status.content}`}>
                                                {sku.contentScore}
                                            </span>
                                            <div className={`scoreDot ${sku.status.content}`}></div>
                                        </div>
                                    </Tooltip>
                                </td>
                                <td className="scoreCell">
                                    <Tooltip 
                                        title={tooltipContent.titleCoverage.title}
                                        description={`Score: ${sku.titleCoverage}/100 - ${tooltipContent.titleCoverage.description}`}
                                    >
                                        <div className="scoreContainer">
                                            <span className={`scoreValue ${sku.status.title}`}>
                                                {sku.titleCoverage}
                                            </span>
                                            <div className={`scoreDot ${sku.status.title}`}></div>
                                        </div>
                                    </Tooltip>
                                </td>
                                <td className="scoreCell">
                                    <Tooltip 
                                        title={tooltipContent.images.title}
                                        description={`Score: ${sku.images}/100 - ${tooltipContent.images.description}`}
                                    >
                                        <div className="scoreContainer">
                                            <span className={`scoreValue ${sku.status.images}`}>
                                                {sku.images}
                                            </span>
                                            <div className={`scoreDot ${sku.status.images}`}></div>
                                        </div>
                                    </Tooltip>
                                </td>
                                <td className="scoreCell">
                                    <Tooltip 
                                        title={tooltipContent.bulletPoints.title}
                                        description={`Score: ${sku.bulletPoints}/100 - ${tooltipContent.bulletPoints.description}`}
                                    >
                                        <div className="scoreContainer">
                                            <span className={`scoreValue ${sku.status.bullet}`}>
                                                {sku.bulletPoints}
                                            </span>
                                            <div className={`scoreDot ${sku.status.bullet}`}></div>
                                        </div>
                                    </Tooltip>
                                </td>
                                <td className="scoreCell">
                                    <Tooltip 
                                        title={tooltipContent.description.title}
                                        description={`Score: ${sku.description}/100 - ${tooltipContent.description.description}`}
                                    >
                                        <div className="scoreContainer">
                                            <span className={`scoreValue ${sku.status.desc}`}>
                                                {sku.description}
                                            </span>
                                            <div className={`scoreDot ${sku.status.desc}`}></div>
                                        </div>
                                    </Tooltip>
                                </td>
                                <td className="aPlusCell">
                                    <Tooltip 
                                        title={tooltipContent.aPlusContent.title}
                                        description={`${sku.aPlus === 'Yes' ? 'Has A+ content' : 'No A+ content'} - ${tooltipContent.aPlusContent.description}`}
                                    >
                                        <span className="aPlusValue">{sku.aPlus}</span>
                                    </Tooltip>
                                </td>
                                <td className="scoreCell">
                                    <Tooltip 
                                        title={tooltipContent.reviews.title}
                                        description={`Score: ${sku.reviews}/100 - ${tooltipContent.reviews.description}`}
                                    >
                                        <div className="scoreContainer">
                                            <span className={`scoreValue ${sku.status.reviews}`}>
                                                {sku.reviews}
                                            </span>
                                            <div className={`scoreDot ${sku.status.reviews}`}></div>
                                        </div>
                                    </Tooltip>
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

            {/* Chart Modal */}
            <ChartModal 
                isOpen={modalOpen}
                onClose={handleCloseChart}
                skuName={selectedSku?.name}
                chartData={selectedSku}
            />
        </div>
    )
}

export default SKUTable
