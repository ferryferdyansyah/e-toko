import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { NavLink, Button } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

const Product = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async() => {
            setLoading(true)
            const response = await fetch (`https://fakestoreapi.com/products/${id}  `)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const Loading = () => {
        return(
            <>
                <h1 className='text-center py-5' style={{ fontFamily: "Poppins" }}>Loading.....</h1>
                {/* <div className="col-md-6">
                    <Skeleton height={400}/>
                </div> */}
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6 text-center py-5">
                    <img src={product.image} alt="" height={400} width="400px" />
                </div>
                <div className="col-md-6 my-4 py-5">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead">Rating {product.rating && product.rating.rate} <AiFillStar/></p>
                    <h3 className="display-6 my-4">$ {product.price}</h3>
                    <p className="lead" style={{ fontFamily: "Arial", fontWeight: "300", textAlign:"justify"}}>{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>Add to cart</button>
                    <Button href='/cart' className="px-4 py-2 ms-2" variant="dark">Go to cart</Button>
                </div>
            </>
        )
    }
  return (
    <div>
        <div className="container py-5">
            <div className="row justify-content-center py-5">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product