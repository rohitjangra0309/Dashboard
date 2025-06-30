import React from 'react'
import SKUTable from './SKUTable'
import { useDashboard } from '../../context/DashboardContext'

function SKUTableContainer() {
    const { currentData } = useDashboard()

    return (
        <div>
            <SKUTable skuData={currentData.skuData} />
        </div>
    )
}

export default SKUTableContainer
