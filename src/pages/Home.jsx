import React from "react"
import axios from 'axios';
import Nav from '../componets/Nav'
import {Link} from 'react-router-dom'

function Home() {
    const [product, setProducts] =React.useState([]);
    const [search, setSearch] =React.useState([]);


    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    const searchBar = product.filter(e=>
        e.title.includes(search)
    )

    return(
        <>
    <Nav />
    {/* Search */}
    <div className="bg-gray-200">
    <div className="container h-[10vh]  flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="relative">

            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search here" />

            <div className="absolute top-4 right-3">
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
            </div>
        </div>
    </div>
    
<div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
{searchBar.map((e)=>(
    <div className="w-72 bg-white shadow-md hover:shadow-xl">
    <p className="text-lg font-bold text-black truncate block capitalize">{e.title}</p>
            <a href="#">
                <img src={e.image}
                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl pt-4" />
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs"></span>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">${e.price}</p>
                    </div>
                </div>
            </a>
            <div className=" flex justify-end">
                <p className="w-[12vw] flex items-center text-indigo-700 py-2 px-6 gap-2 rounded justify-end">
                <Link to={`/details/${e.id}`}><span>
                        View More
                    </span></Link>
                </p>
            
            </div>
            
        </div>
    ))}
</div>

        </>
    )
}
export default Home