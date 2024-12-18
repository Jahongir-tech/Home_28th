import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Category = () => {
  const {data} =  useFetch("/product-category/get")
  console.log(data);
  
  return (
    <div>Category</div>
  )
}

export default Category