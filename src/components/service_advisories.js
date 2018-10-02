import React from 'react';

export default ({ advisories }) => {
  if (advisories.length) {
    return (
      <div className="alert alert-warning">
        { advisories.map(advisory => advisory.description['#cdata-section']) }
      </div>
    )
  }
  return null;
}