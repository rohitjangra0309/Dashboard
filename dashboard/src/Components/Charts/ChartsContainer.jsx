import React from 'react'
import Charts from './Charts'


function ChartsContainer() {
    const brandContentData = [
        { name: '17 May 24', value: 20 },
        { name: '19 May 24', value: 60 },
        { name: '21 May 24', value: 75 },
      ]
    
      const assessmentData = [
        { name: '17 May 24', value: 25 },
        { name: '19 May 24', value: 70 },
        { name: '21 May 24', value: 85 },
      ]
  return (
    <div>
        <Charts brandContentData={brandContentData} assessmentData={assessmentData} />
    </div>
  )
}

export default ChartsContainer