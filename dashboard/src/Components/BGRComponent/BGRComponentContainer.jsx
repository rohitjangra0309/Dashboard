import React from 'react'
import BGRComponent from './BGRComponent'

function BGRComponentContainer() {
    // Sample categories data
    const categories = [
        { name: 'Category 01', score: '₹100 / INR', status: 'success' },
        { name: 'Category 02', score: '₹100 / INR', status: 'success' },
        { name: 'Category 03', score: '₹100 / INR', status: 'error' },
        { name: 'Category 04', score: '₹100 / INR', status: 'error' },
        { name: 'Assessment', score: '₹100 / INR', status: 'success' },
        { name: 'Overall', score: '₹100 / INR', status: 'success' },
    ]

    // Sample scores
    const contentScore = "85"
    const assortmentScore = "92"

    return (
        <div>
            <BGRComponent 
                categories={categories}
                contentScore={contentScore}
                assortmentScore={assortmentScore}
            />
        </div>
    )
}

export default BGRComponentContainer
