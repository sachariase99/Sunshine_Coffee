import bean_bags from '../assets/bean_bags.jpg'
import bean_jar from '../assets/bean_jar.jpg'
import coffee_flower from '../assets/coffee_flower.jpg'

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 my-4'>
      <div className='flex flex-col text-center'>
        <h2 className='font-licorice text-[64px]'>The right beans</h2>
        <p className='font-inika my-4 mx-4 '>Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.</p>
        <img className='h-[321px] w-full object-cover mt-2 rounded-lg' src={bean_jar} alt="Beans" />
      </div>
      <div className='flex flex-col text-center'>
        <h2 className='font-licorice text-[64px]'>Carefully handled</h2>
        <p className='font-inika my-4 mx-4 '>Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection.</p>
        <img className='h-[321px] w-full object-cover mt-2 rounded-lg' src={bean_bags} alt="Bean Bags" />
      </div>
      <div className='flex flex-col text-center'>
        <h2 className='font-licorice text-[64px]'>From us to you</h2>
        <p className='font-inika my-4 mx-4 pb-6'>Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.</p>
        <img className='h-[321px] w-full object-cover mt-2 rounded-lg' src={coffee_flower} alt="Coffee" />
      </div>
    </div>
  )
}

export default About