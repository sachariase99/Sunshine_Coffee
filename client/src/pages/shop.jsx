import Header from "../components/header"
import ProductCards from "../components/shop/productCards"

const Shop = ({ addToCart }) => {
    

    return (
        <div>
            <Header />
            <h1 className="text-[128px] font-licorice text-center mt-4 mb-8">Our picks for you</h1>
            <ProductCards addToCart={addToCart} />
        </div>
    )
}

export default Shop
