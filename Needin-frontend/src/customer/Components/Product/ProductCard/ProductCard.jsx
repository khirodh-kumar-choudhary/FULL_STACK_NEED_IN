import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();
  

  const handleNavigate=()=>{
    navigate(`/product/${product?.id}`)
  }

  return (
   <div onClick={handleNavigate} className='productCard w-[15rem] border m-3 transition-all cursor-pointer '>
    <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={imageUrl} alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        <p  className='font-bold opacity-60'>{brand}</p>
            <p className=''>{title}</p>
        
        <p className='font-semibold opacity-50'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'>₹{discountedPrice}</p>
            <p className='opacity-50 line-through'>₹{price}</p>
            <p className='text-green-600 font-semibold'>{discountPersent}% off</p>
        </div>
        
    </div>
   </div>
  );
};

 export default ProductCard;


// import React from 'react'
// import "./ProductCard.css"
// import { useNavigate } from 'react-router-dom'

// const ProductCard = ( { product }) => {
//   const navigate =useNavigate();
//   return (
//     <div onClick={()=>navigate('/product/${5}')} className='ProductCard w-[15rem] m-3 transition-all cursor-pointer'>
//       <div className='h-[20rem]'>
//         <img  className="h-full w-full object-cover object-left-top"src="https://www.wecare-carpet.com/wp-content/uploads/2021/08/wecare__sofa-cleaning.jpg"
//          alt=" "/>
//       </div>
//       <div className='text-part bg-white p-3'>
//         <div>
//           <p className='font-bold opacity-60'>sofa and carpet cleaning</p>
//           <p>Dry vacuuming to remove crumbs and dirt particles</p>
//         </div>
//         <div className='flex  items-center space-x-2'>
//           <p className='font-semibold'>₹99</p>
//           <p className='line-through opacity-50'>₹199</p>
//           <p className='text-green-600 font-semibold'>50% off</p>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default ProductCard;



// import React from 'react'
// import "./ProductCard.css"
// import { useNavigate } from 'react-router-dom'

// const ProductCard = ( { product }) => {
//   const navigate =useNavigate();
//   return (
//     <div onClick={()=>navigate('/product/${5}')} className='ProductCard w-[15rem] m-3 transition-all cursor-pointer'>
//       <div className='h-[20rem]'>
//         <img  className="h-full w-full object-cover object-left-top"src="https://www.wecare-carpet.com/wp-content/uploads/2021/08/wecare__sofa-cleaning.jpg"
//          alt=" "/>
//       </div>
//       <div className='text-part bg-white p-3'>
//         <div>
//           <p className='font-bold opacity-60'>sofa and carpet cleaning</p>
//           <p>Dry vacuuming to remove crumbs and dirt particles</p>
//         </div>
//         <div className='flex  items-center space-x-2'>
//           <p className='font-semibold'>₹99</p>
//           <p className='line-through opacity-50'>₹199</p>
//           <p className='text-green-600 font-semibold'>50% off</p>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default ProductCard;