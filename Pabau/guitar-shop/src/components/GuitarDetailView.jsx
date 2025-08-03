const GuitarDetailView = ({ guitar, onBack }) => {
    return (
        <div style={{ padding: '2rem' }}>
            {/* Back Button */}
            <button onClick={onBack} style={{
                marginBottom: '2rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#ff6600',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
            }}>
                ← Back to Selection
            </button>

            {/* Hero Section */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                marginBottom: '2rem'
            }}>
                <img
                    src={guitar.image}
                    alt={guitar.name}
                    style={{ width: '200px', borderRadius: '12px' }}
                />
                <h1 style={{ fontSize: '2.5rem', color: '#ff6600' }}>
                    {guitar.name}
                </h1>
            </div>

            {/* Description / Tabs */}
            <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ flex: 1 }}>
                    <h2>Description</h2>
                    <p>{guitar.description || "No description available."}</p>
                </div>

                <div style={{ flex: 1 }}>
                    <h2>Famous Musicians</h2>
                    <p>Coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default GuitarDetailView;
