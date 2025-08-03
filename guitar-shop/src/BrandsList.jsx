import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
    }
  }
`;

function BrandsList({ onSelectBrand }) {
  const { loading, error, data } = useQuery(GET_ALL_BRANDS);

  if (loading) return <p>Loading brands...</p>;
  if (error) return <p>Error loading brands: {error.message}</p>;

  return (
    <div>
      <h2>Select a Brand</h2>
      {data.findAllBrands.map(brand => (
        <button
          key={brand.id}
          onClick={() => onSelectBrand(brand.id)}
          style={{ margin: '5px' }}
        >
          {brand.name}
        </button>
      ))}
    </div>
  );
}

export default BrandsList;
