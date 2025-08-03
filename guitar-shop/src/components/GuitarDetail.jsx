import React from 'react';

function GuitarDetail({ guitar }) {
  return (
    <div style={{ padding: '1rem 0', maxWidth: 800, margin: '0 auto' }}>
      <h1>{guitar.name}</h1>
    </div>
  );
}

export default GuitarDetail;
