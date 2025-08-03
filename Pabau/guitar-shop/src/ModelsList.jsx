import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MODELS_BY_BRAND } from './graphql/queries';

function ModelsList({ brandId, onSelectModel }) {
    const { loading, error, data } = useQuery(GET_MODELS_BY_BRAND, {
        variables: {
            id: brandId,
            sortBy: { field: "price", order: "ASC" }
        }
    });

    if (loading) return <p>Loading models...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Models</h2>
            {data.findBrandModels.map(model => (
                <div
                    key={model.id}
                    style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", cursor: "pointer" }}
                    onClick={() => onSelectModel(model.id)}
                >
                    <h3>{model.name} ({model.type})</h3>
                    <img src={model.image} alt={model.name} width={200} />
                    <p>{model.description}</p>
                    <p>Price: ${model.price}</p>
                </div>
            ))}
        </div>
    );
}


export default ModelsList;
