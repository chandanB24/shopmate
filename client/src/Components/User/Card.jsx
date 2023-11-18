

const Card = ({ shop })=> {
  return (
    <>
      <div className="relative flex-col hover:scale-105 duration-500">
        <img src={shop.img} alt="item" className="w-full h-36 rounded-xl mb-2" />
        <h2 className="text-xl font-semibold">{shop.name}</h2>
        <p className="text-sm font-light">{shop.addr}</p>
        <p className="absolute top-0 w-1/4 font-semibold text-black bg-white rounded-br-md rounded-tl-md">
          21 min
        </p>
      </div>
    </>
  );
}

export default Card;
