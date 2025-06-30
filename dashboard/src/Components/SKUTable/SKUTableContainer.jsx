import React from 'react'
import SKUTable from './SKUTable'

function SKUTableContainer() {
    // Sample SKU data matching the image
    const skuData = [
        {
            name: 'HM Face - Cleansing - New All in One...',
            contentScore: 10.0,
            titleCoverage: 100.0,
            images: 100.0,
            bulletPoints: 100.0,
            description: 100.0,
            aPlus: 'NR',
            reviews: 100.0,
            status: { 
                content: 'error', 
                title: 'success', 
                images: 'success', 
                bullet: 'success', 
                desc: 'success', 
                reviews: 'success' 
            }
        },
        {
            name: 'HM Face - Cleansing - New All in One...',
            contentScore: 100.0,
            titleCoverage: 100.0,
            images: 100.0,
            bulletPoints: 100.0,
            description: 100.0,
            aPlus: 'Yes',
            reviews: 100.0,
            status: { 
                content: 'success', 
                title: 'success', 
                images: 'success', 
                bullet: 'success', 
                desc: 'success', 
                reviews: 'success' 
            }
        },
        {
            name: 'HM Face - Cleansing - New All in One...',
            contentScore: 100.0,
            titleCoverage: 100.0,
            images: 100.0,
            bulletPoints: 100.0,
            description: 100.0,
            aPlus: 'No',
            reviews: 100.0,
            status: { 
                content: 'success', 
                title: 'error', 
                images: 'warning', 
                bullet: 'warning', 
                desc: 'warning', 
                reviews: 'error' 
            }
        },
        {
            name: 'HM Face - Cleansing - New All in One...',
            contentScore: 100.0,
            titleCoverage: 100.0,
            images: 100.0,
            bulletPoints: 100.0,
            description: 100.0,
            aPlus: 'Yes',
            reviews: 100.0,
            status: { 
                content: 'error', 
                title: 'success', 
                images: 'success', 
                bullet: 'success', 
                desc: 'success', 
                reviews: 'success' 
            }
        },
        {
            name: 'HM Face - Cleansing - New All in One...',
            contentScore: 100.0,
            titleCoverage: 100.0,
            images: 100.0,
            bulletPoints: 100.0,
            description: 100.0,
            aPlus: 'No',
            reviews: 100.0,
            status: { 
                content: 'success', 
                title: 'error', 
                images: 'success', 
                bullet: 'success', 
                desc: 'success', 
                reviews: 'error' 
            }
        },
        {
            name: 'HM Face - Cleansing - New All in One...',
            contentScore: 100.0,
            titleCoverage: 100.0,
            images: 100.0,
            bulletPoints: 100.0,
            description: 100.0,
            aPlus: 'Yes',
            reviews: 100.0,
            status: { 
                content: 'error', 
                title: 'error', 
                images: 'success', 
                bullet: 'success', 
                desc: 'success', 
                reviews: 'error' 
            }
        },
        {
            name: 'HM Face - Cleansing - New All in One...',
            contentScore: 100.0,
            titleCoverage: 100.0,
            images: 100.0,
            bulletPoints: 100.0,
            description: 100.0,
            aPlus: 'Yes',
            reviews: 100.0,
            status: { 
                content: 'success', 
                title: 'success', 
                images: 'success', 
                bullet: 'success', 
                desc: 'success', 
                reviews: 'success' 
            }
        }
    ]

    return (
        <div>
            <SKUTable skuData={skuData} />
        </div>
    )
}

export default SKUTableContainer
