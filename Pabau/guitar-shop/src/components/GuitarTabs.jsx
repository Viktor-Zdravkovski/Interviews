import React, { useState } from 'react';

function GuitarTabs({ guitar }) {
    const [activeTab, setActiveTab] = useState('specs');

    return (
        <section style={{ maxWidth: 1200, margin: '2rem auto', padding: '2rem 1rem' }}>
            {/* Tabs */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1rem',
                    borderBottom: '2px solid #ccc',
                }}
            >
                <button
                    onClick={() => setActiveTab('specs')}
                    style={{
                        flex: 1,
                        padding: '0.75rem',
                        cursor: 'pointer',
                        border: 'none',
                        borderBottom: activeTab === 'specs' ? '3px solid #ff6600' : 'none',
                        backgroundColor: 'transparent',
                        fontWeight: activeTab === 'specs' ? 'bold' : 'normal',
                        color: activeTab === 'specs' ? '#ff6600' : '#333',
                    }}
                >
                    Specs
                </button>
                <button
                    onClick={() => setActiveTab('musicians')}
                    style={{
                        flex: 1,
                        padding: '0.75rem',
                        cursor: 'pointer',
                        border: 'none',
                        borderBottom: activeTab === 'musicians' ? '3px solid #ff6600' : 'none',
                        backgroundColor: 'transparent',
                        fontWeight: activeTab === 'musicians' ? 'bold' : 'normal',
                        color: activeTab === 'musicians' ? '#ff6600' : '#333',
                    }}
                >
                    Who plays it
                </button>
            </div>

            {/* Tab Content */}
            <div
                style={{
                    padding: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    backgroundColor: '#fefefe',
                }}
            >
                {activeTab === 'specs' && (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><strong>Brand:</strong> {/* no brand field in this object? */}</li>
                        <li><strong>Type:</strong> {selectedGuitar.type}</li>
                        <li><strong>Price:</strong> ${selectedGuitar.price}</li>
                        <li><strong>Body:</strong> {selectedGuitar.specs?.bodyWood || "N/A"}</li>
                        <li><strong>Neck:</strong> {selectedGuitar.specs?.neckWood || "N/A"}</li>
                        <li><strong>Pickups:</strong> {selectedGuitar.specs?.pickups || "N/A"}</li>
                    </ul>

                )}

                {activeTab === 'musicians' && (
                    guitar.musicians && guitar.musicians.length > 0 ? (
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
                            {guitar.musicians.map((artist, idx) => (
                                <li key={idx}>{artist}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No known artists listed.</p>
                    )
                )}
            </div>
        </section>
    );
}

export default GuitarTabs;
