import { BsArrowRight } from "react-icons/bs";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl border flex flex-col">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-[#FF3811]">Price: ${price}</p>
          <button className="btn text-[#FF3811] text-2xl font-bold">
            <BsArrowRight></BsArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
