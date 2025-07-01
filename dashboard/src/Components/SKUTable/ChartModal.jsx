import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './ChartModal.css'

const ChartModal = ({ isOpen, onClose, skuName, chartData }) => {
    if (!isOpen) return null

    // Sample chart data for the SKU
    const sampleData = [
        { name: '17 May 24', contentScore: chartData?.contentScore || 75, titleCoverage: chartData?.titleCoverage || 80 },
        { name: '19 May 24', contentScore: chartData?.contentScore + 5 || 80, titleCoverage: chartData?.titleCoverage + 3 || 83 },
        { name: '21 May 24', contentScore: chartData?.contentScore - 2 || 78, titleCoverage: chartData?.titleCoverage + 5 || 85 },
        { name: '23 May 24', contentScore: chartData?.contentScore + 3 || 81, titleCoverage: chartData?.titleCoverage + 2 || 87 },
        { name: '25 May 24', contentScore: chartData?.contentScore + 7 || 85, titleCoverage: chartData?.titleCoverage + 8 || 93 }
    ]

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Performance Trends - {skuName}</h3>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                
                <div className="modal-body">
                    <div className="chart-container-modal">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={sampleData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis 
                                    dataKey="name" 
                                    tick={{ fontSize: 12, fill: '#6b7280' }}
                                    axisLine={{ stroke: '#e5e7eb' }}
                                />
                                <YAxis 
                                    tick={{ fontSize: 12, fill: '#6b7280' }}
                                    axisLine={{ stroke: '#e5e7eb' }}
                                />
                                <Tooltip 
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '6px',
                                        fontSize: '12px'
                                    }}
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="contentScore" 
                                    stroke="#3b82f6" 
                                    strokeWidth={2}
                                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                                    name="Content Score"
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="titleCoverage" 
                                    stroke="#10b981" 
                                    strokeWidth={2}
                                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                                    name="Title Coverage"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    
                    <div className="chart-legend">
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#3b82f6' }}></div>
                            <span>Content Score</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
                            <span>Title Coverage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartModal 