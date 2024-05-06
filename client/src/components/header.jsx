import coffeeBeans from '../assets/coffee-beans.png';
import LineSpacer from './lineSpacer';

const Header = () => {
    return (
        <div className='relative'>
            <img className='w-full h-[655px] object-cover' src={coffeeBeans} alt="Beans" />
            <h1 className='text-[64px] md:text-[96px] xl:text-[128px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center text-white font-licorice px-4'>We Love Coffee<br />And all the people who make it</h1>
            <LineSpacer />
        </div>
    )
}

export default Header
