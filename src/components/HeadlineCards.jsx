// Component: HeadlineCards
import Hamburguer_01 from '../../public/assets/img/hamburguesas_01.jpg';
import Pizza_01 from '../../public/assets/img/pizzas_01.jpg';
import Dona_01 from '../../public/assets/img/donas_01.jpg';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1650px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun s Out, BOGO Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] lg:max-h-[360px] w-full object-cover rounded-xl'
          src={Hamburguer_01}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] lg:max-h-[360px] w-full object-cover rounded-xl'
          src={Pizza_01}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] lg:max-h-[360px] w-full object-cover rounded-xl'
          src={Dona_01}
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
