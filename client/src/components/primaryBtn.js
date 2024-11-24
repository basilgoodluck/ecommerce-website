import { Link } from 'react-router-dom';

const PrimaryBtn = ({content}) => {
  return (
    <div className='w-full'>
        <button className='block text-white text-xs md:text-md bg-red-600 rounded-md m-auto py-4 px-5'><Link to="/products">{content}</Link></button>
    </div>  
  )
}

export default PrimaryBtn
