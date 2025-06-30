import React from 'react'
import BGRComponent from './BGRComponent'
import { useDashboard } from '../../context/DashboardContext'

function BGRComponentContainer() {
    const { categories, selectedCategoryId, currentData, selectCategory } = useDashboard()

    return (
        <div>
            <BGRComponent 
                categories={categories}
                contentScore={currentData.globalScores.contentScore}
                assortmentScore={currentData.globalScores.assortmentScore}
                selectedCategoryId={selectedCategoryId}
                onCategorySelect={selectCategory}
            />
        </div>
    )
}

export default BGRComponentContainer
