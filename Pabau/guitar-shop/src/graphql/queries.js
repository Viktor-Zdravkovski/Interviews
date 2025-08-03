import { gql } from '@apollo/client';

export const GET_MODELS_BY_BRANDS = gql`
  query GetModelsByBrand($id: ID!, $sortBy: sortBy!) {
    findBrandModels(id: $id, sortBy: $sortBy) {
       id
       name
      type
      image
       description
       price
       specs {
         bodyWood
         neckWood
         fingerboardWood
         pickups
         tuners
         scaleLength
         bridge
       }
       musicians {
         name
         musicianImage
         bands
       }
     }
   }
 `;

