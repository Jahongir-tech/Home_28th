import { request } from '@/api'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProductCreate = () => {
    const token = useSelector(s=> s.token.value)
    const [categories, setCategories] = useState(null)
    useEffect(()=>{
        request
            .get("/product-category/get")
            .then(res => {
                setCategories(res.data)
            })
    }, [])

    const handleCreateProduct = e => {
        e.preventDefault()
        let formData = new FormData(e.target)
        const product = Object.fromEntries(formData)

        product.price = +product.price
        product.categoryId = +product.categoryId
        product.stock = +product.stock
        product.average_rating = 0
        
        request
            .post("/product/create", product)
    }
  return (
    <div>
        <p>ProductCreate</p>
        <form onSubmit={handleCreateProduct} action="">
            <input className='border' type="text" name='name' />
            <textarea className='border' name="description" id=""></textarea>
            <input className='border' type="number" name='price' />
            <input className='border' type="text" name='image' />
            <select className='border' name="categoryId" id="">
                {
                    categories?.map((category)=> (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </select>
            <input className='border' type="number" name='stock' />
            <button>Create</button>
        </form>

    </div>
  )
}

export default ProductCreate