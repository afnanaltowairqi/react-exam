import { useParams } from 'react-router-dom';
import Nav from '../componets/Nav'
import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'


function Details() {
    const [product, setProducts] =React.useState([]);
    const {id} = useParams();

    React.useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    return(
        <>
        <Nav />
        <div className='flex flex-col justify-center items-center pt-10'>
        <div className="flex flex-row justify-between w-[50vw]bg-white shadow-md hover:shadow-xl">
        <div>
            <img src={product.image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        </div>
                <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                    <span className="text-gray-400 mr-3 uppercase text-xs"></span>
                    <p className="text-sm font-semibold text-black cursor-auto my-3">${product.description}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
                        <a href="" className="w-[12vw] flex items-center text-indigo-700 py-2 px-6 gap-2 rounded justify-end">
                        <Link to={`/`}><span>
                                Back
                        </span></Link>
                    </a>
                    </div>
                </div>

        </div>
        </div>
        
    
        
        </>
    );
}
export default Details