import React from 'react'
import Charts from './Charts'
import { useDashboard } from '../../context/DashboardContext'

function ChartsContainer() {
    const { currentData, categories, selectedCategoryId } = useDashboard()
    
    // Get selected category name
    const selectedCategory = categories.find(cat => cat.id === selectedCategoryId)
    const selectedCategoryName = selectedCategory ? selectedCategory.name : 'Overview'
    
    return (
        <div>
            <Charts 
                brandContentData={currentData.chartData.brandContent} 
                assessmentData={currentData.chartData.assessment}
                selectedCategoryName={selectedCategoryName}
            />
        </div>
    )
}

export default ChartsContainer