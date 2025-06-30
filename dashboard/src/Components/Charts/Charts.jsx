import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import './Charts.css'

const Charts = ({ brandContentData, assessmentData }) => {
    return (
        <div>        {/* Header */}
            <div className="dashboard-header">
                <h1 className="dashboard-title">Overview</h1>
                <div className="dashboard-date">
                    Current Score is for 19 Jun 25
                </div>
            </div>

            {/* Overview Section - Charts */}
            <div className="overview-grid">
                {/* Brand Content Score Chart */}
                <div className="chart-card">
                    <div className="chart-header">
                        <h2 className="chart-title">Brand Content Score</h2>
                        
                    </div>
                    <span className="chart-score">00</span>
                    <span className="chart-subtitle"> on 30 May 25</span>
                    <p className="chart-subtitle">
                        A score (00%) up (00%) 30 May 25
                    </p>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={brandContentData}>
                                <defs>
                                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.3} />
                                        <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.05} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#94a3b8' }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#94a3b8' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        fontSize: '12px'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#60a5fa"
                                    strokeWidth={2}
                                    fill="url(#blueGradient)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Assessment Chart */}
                <div className="chart-card">
                    <div className="chart-header">
                        <h2 className="chart-title">Assessment</h2>
                        
                    </div>
                    <span className="chart-score">00</span>
                    <span className="chart-subtitle"> on 30 May 25</span>
                    <p className="chart-subtitle">
                        A score (00%) up (00%) 30 May 25
                    </p>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={assessmentData}>
                                <defs>
                                    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#34d399" stopOpacity={0.3} />
                                        <stop offset="100%" stopColor="#34d399" stopOpacity={0.05} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#94a3b8' }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#94a3b8' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        fontSize: '12px'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#34d399"
                                    strokeWidth={2}
                                    fill="url(#greenGradient)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div></div>
    )
}

export default Charts