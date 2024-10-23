import React from 'react';
import './stats.scss';

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats-container">
        {/* First Progress Bar */}
        <div className="stats-card">
          <div
            role="progressbar"
            aria-valuenow="800"
            aria-valuemin="0"
            aria-valuemax="1000"
            style={{ '--value': 800 }}
            className="custom-progress-bar blue"
          >
          </div>
          <h3>Million Dollars Committed</h3>
        </div>

        {/* Second Progress Bar */}
        <div className="stats-card">
          <div
            role="progressbar"
            aria-valuenow="68"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ '--value': 68 }}
            className="custom-progress-bar yellow"
          >
          </div>
          <h3>Parcels Available</h3>
        </div>

        {/* Third Progress Bar */}
        <div className="stats-card">
          <div
            role="progressbar"
            aria-valuenow="53"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ '--value': 53 }}
            className="custom-progress-bar pink"
          >
          </div>
          <h3>Parcels Taken</h3>
        </div>

        {/* Fourth Progress Bar */}
        <div className="stats-card">
          <div
            role="progressbar"
            aria-valuenow="22"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ '--value': 22 }}
            className="custom-progress-bar pink"
          >
          </div>
          <h3>Parcels under Discussion</h3>
        </div>
      </div>
    </div>
  );
}

export default Stats;
