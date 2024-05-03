import { Link } from "react-router-dom"

const ShopNow = () => {
  return (
    <div className="flex flex-col items-center text-center my-4">
      <h2 className='text-[128px] font-licorice'>Shop now</h2>
      <p className='text-[24px] w-[905px] font-inika'>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing</p>
      <Link to="/shop" className="px-16 bg-black text-white text-[24px] py-4 rounded-lg mb-12 mt-6">Go to products</Link>
    </div>
  )
}

export default ShopNow