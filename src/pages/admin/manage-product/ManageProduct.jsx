import Products from '@/components/products/Products'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const ManageProduct = () => {
    const {data,loading} = useFetch("/product/get", )
    // const [products, setProducts] = useState(null)

    // useEffect(()=>{
    //   request
    //     .get("/product/get")
    //     .then(res => setProducts(res.data))
    // }, [])
  return (
    <div>ManageProduct
         {
            loading && <p>Loading...</p> 
        }
         <Products isAdmin={true} data={data}/>
    </div>
  )
}

export default ManageProduct