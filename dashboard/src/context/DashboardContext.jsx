import React, { createContext, useContext, useState, useEffect } from 'react'
import dashboardData from '../data/dashboardData.json'

const DashboardContext = createContext()

// Custom hook to use dashboard context
const useDashboard = () => {
    const context = useContext(DashboardContext)
    if (!context) {
        throw new Error('useDashboard must be used within a DashboardProvider')
    }
    return context
}

const DashboardProvider = ({ children }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState('category01')
    const [categories, setCategories] = useState([])
    const [currentData, setCurrentData] = useState({
        chartData: { brandContent: [], assessment: [] },
        skuData: [],
        globalScores: { contentScore: '0', assortmentScore: '0' }
    })

    useEffect(() => {
        // Load initial data
        setCategories(dashboardData.categories)
        setCurrentData({
            chartData: dashboardData.categories[0].chartData,
            skuData: dashboardData.categories[0].skuData,
            globalScores: dashboardData.globalScores
        })
    }, [])

    useEffect(() => {
        // Update current data when selected category changes
        const selectedCategory = categories.find(cat => cat.id === selectedCategoryId)
        if (selectedCategory) {
            setCurrentData({
                chartData: selectedCategory.chartData,
                skuData: selectedCategory.skuData,
                globalScores: dashboardData.globalScores
            })
        }
    }, [selectedCategoryId, categories])

    const selectCategory = (categoryId) => {
        setSelectedCategoryId(categoryId)
    }

    const value = {
        categories,
        selectedCategoryId,
        currentData,
        selectCategory
    }

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )
}

// Export the hook and provider
export { useDashboard, DashboardProvider } 