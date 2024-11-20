import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();

    if (!product || !product.imageURL || product.imageURL.length === 0) {
        return null;
    }

    const id = product.title;
    const idString = (id) => {
        return String(id).toLowerCase().split(' ').join('-').slice(0, 10);
    };
    const rootId = idString(id);

    function handleClick() {
        console.log(rootId);
        navigate(`/product/${rootId}`, {
            state: {
                item: product,
            },
        });
    }

    const StarRating = ({ rating }) => {
        const totalStars = 5;
        
        return (
          <div className="flex gap-1">
            {[...Array(totalStars)].map((_, index) => (
              <FaStar
                key={index}
                size={10}
                className={`${
                  index < rating 
                    ? 'fill-orange-400 text-orange-400' 
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
        );
      };

    return (
        <div onClick={handleClick} className="group flex flex-col gap-4 text-xs overflow-hidden" style={{ flex: '0 0 23%' }}>
            <div className="relative aspect-square w-full overflow-hidden">
                <div className={`${product.inStock ? 'bg-green-400' : 'bg-red-400'} absolute text-white p-1 text-xs top-2 left-2 z-10`}>
                    {product.inStock ? 'In stock': "Not available"}
                </div>
                <img 
                    src={product.imageURL} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold " style={{ letterSpacing: '1px', whiteSpce: 'nowrap' }}>
                    {product.title}
                </h4>
                <div className="flex gap-2 items-center text-md">
                    <p className="text-red-500 font-medium">${product.price.toFixed(2)}</p>
                    <p className="flex gap-1 items-center">
                        <StarRating rating={product.reviews.rating} />
                    </p>
                    <p>{'('+product.reviews.count+')'}</p>
                </div>
                <div className="flex gap-3 ">
                    <p className='text-xs'>{(product.description).slice(0, 29)+'...'}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
