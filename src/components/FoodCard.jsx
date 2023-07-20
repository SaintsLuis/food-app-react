/* eslint-disable react/prop-types */
// componente que muestra la informacion de un item de comida

const FoodCard = ({ food }) => {
  return (
    <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
      <img
        src={food.image}
        alt={food.name}
        className='w-full h-[300px] object-cover rounded-t-lg'
      />
      <div className='flex justify-between px-2 py-4'>
        <p className='font-bold'>{food.name}</p>
        <p>
          <span className='bg-orange-500 text-white p-1 rounded-full'>
            {food.price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
