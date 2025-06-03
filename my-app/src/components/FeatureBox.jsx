import React from 'react';

function FeatureBox({ title, description, visible }) {
  return (
    <div className={`feature-box ${visible ? 'visible' : ''}`} tabIndex="0">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default FeatureBox;
