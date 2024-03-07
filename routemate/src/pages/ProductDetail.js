import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
  const params = useParams();

  console.log(params.id);
  return (
    <div>ProductDetail</div>
  )
}
