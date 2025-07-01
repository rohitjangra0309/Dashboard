import React from 'react'
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import '../../App.css'
import infoIcon from '../../assets/infoIcon.svg'

const Charts = ({ brandContentData, assessmentData, selectedCategoryName }) => {
    return (
        <div>        {/* Header */}
            <div className="dashboardHeader">
                <h1 className="dashboardTitle">
                    Overview for <span className="categoryNameTag">{selectedCategoryName}</span>
                </h1>
                <div className="dashboardDate">
                    <img src={infoIcon} alt="Info" className="infoIcon" />
                    <span>Content Score is for 19 Jun 25</span>

                </div>
            </div>

            {/* Overview Section - Charts */}
            <div className="overviewGrid">
                {/* Brand Content Score Chart */}
                <div className="chartCard">
                    <div className="chartHeader">
                        <h2 className="chartTitle">Brand Content Score</h2>
                        <img src={infoIcon} alt="Info" className="infoIcon" />
                    </div>
                    <span className="chartScore">{brandContentData && brandContentData.length > 0 ? brandContentData[brandContentData.length - 1].value : '00'}</span>
                    <span className="chartSubtitle"> on 30 May 25</span>
                    <p className="chartSubtitle">
                        <span className="trendIndicator">▲ {brandContentData && brandContentData.length > 1 ?
                            ((brandContentData[brandContentData.length - 1].value - brandContentData[brandContentData.length - 2].value) / brandContentData[brandContentData.length - 2].value * 100).toFixed(1)
                            : '0.0'}% ({brandContentData && brandContentData.length > 1 ?
                                (brandContentData[brandContentData.length - 1].value - brandContentData[brandContentData.length - 2].value).toFixed(0)
                                : '00'})</span> vs MTD 30 May 25
                    </p>
                    <div className="chartContainer">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={brandContentData}>
                                <defs>
                                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.3} />
                                        <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.05} />
                                    </linearGradient>
                                </defs>
                                <XAxis
                                    dataKey="name"
                                    axisLine={{ stroke: '#00000020', strokeWidth: 1 }}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#9ca3af' }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={false}
                                    hide={true}
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
                                    dot={{ fill: 'white', stroke: '#60a5fa', strokeWidth: 2, r: 4 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Assessment Chart */}
                <div className="chartCard">
                    <div className="chartHeader">
                        <h2 className="chartTitle">Assessment</h2>
                        <img src={infoIcon} alt="Info" className="infoIcon" />
                    </div>
                    <span className="chartScore">{assessmentData && assessmentData.length > 0 ? assessmentData[assessmentData.length - 1].value : '00'}</span>
                    <span className="chartSubtitle"> on 30 May 25</span>
                    <p className="chartSubtitle">
                        <span className="trendIndicator">▲ {assessmentData && assessmentData.length > 1 ?
                            ((assessmentData[assessmentData.length - 1].value - assessmentData[assessmentData.length - 2].value) / assessmentData[assessmentData.length - 2].value * 100).toFixed(1)
                            : '0.0'}% ({assessmentData && assessmentData.length > 1 ?
                                (assessmentData[assessmentData.length - 1].value - assessmentData[assessmentData.length - 2].value).toFixed(0)
                                : '00'})</span> vs MTD 30 May 25
                    </p>
                    <div className="chartContainer">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={assessmentData}>
                                <defs>
                                    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#34d399" stopOpacity={0.3} />
                                        <stop offset="100%" stopColor="#34d399" stopOpacity={0.05} />
                                    </linearGradient>
                                </defs>
                                <XAxis
                                    dataKey="name"
                                    axisLine={{ stroke: '#00000020', strokeWidth: 1 }}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#9ca3af' }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={false}
                                    hide={true}
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
                                    dot={{ fill: 'white', stroke: '#34d399', strokeWidth: 2, r: 4 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div></div>
    )
}

export default Charts