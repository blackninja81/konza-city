import React from 'react'
import './opportunity.scss'
import OpportunityCard from './OpportunityCard'

const Opportunity = () => {
  return (
    <div className="opportunity-container">
        <h2>Investment Opportunities</h2>
        <OpportunityCard/>
    </div>
  )
}

export default Opportunity