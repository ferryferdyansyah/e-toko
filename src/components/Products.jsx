import React, {useState, useEffect} from 'react'
import { NavLink, Button } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

const Products = () => {
    
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true

    useEffect(() => {
        const getProducts = async() => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)

                console.log(filter)
            }

            return () => {
                componentMounted = false
            }
        }

        getProducts()
    }, [])
    
  const Loading = () => {
      return(
          <>
          <h1 className='text-center' style={{fontFamily: "Poppins"}}>Loading.....</h1>
            {/* <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div> */}
          </>
      )
  }

  const filterProduct = (cat) => {
      const updateList = data.filter((x) => x.category === cat)
      setFilter(updateList )
  }

  const ShowProducts = () => {
      return(
      <>
      <div className="buttons d-flex mb-5 pb-5 justify-content-center">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women' Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
      </div>
      {filter.map((product) => {
          return(
              <>
                <div className="col-md-3 mb-4">
                      <div className="card h-100 p-4 text-center" key={product.id}>
                          <img src={product.image} className="card-img-top" height={275} alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                  <p className="card-text lead fw-bold">${product.price}</p>
                              <Button href={`/products/${product.id}`} variant="outline-dark">Buy Now</Button>
                              </div>
                      </div>
                </div>
              </>
          )
      })}
      </>
      )
  }
  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row p-5">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Our Product</h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}

export default Products