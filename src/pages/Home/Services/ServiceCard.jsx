import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl border flex flex-col">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{title}</h2>
        {/* <div className="flex items-center justify-between"> */}
        <p className="text-xl font-bold text-[#FF3811]">Price: ${price}</p>
        <Link to={`/checkout/${_id}`}>
          <button className="btn text-[#FF3811] text-2xl font-bold">
            Book Now <BsArrowRight></BsArrowRight>
          </button>
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
