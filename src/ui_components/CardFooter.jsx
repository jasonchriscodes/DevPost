import { BASE_URL } from "@/api";
import { Link } from "react-router-dom";
import pic from "../images/pic.jpg";

const CardFooter = ({ blog }) => {
  return (
    <Link to={`/profile/${blog.author.username}`}>
      <div className="flex items-center gap=4 ">
        <span className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src={pic}
              className="c rounded-full w-full h-full object-cover"
            />
          </div>

          <small className="text-[#97989F] text-[12px] font-semibold">
            John Doe
          </small>
        </span>

        <small className="text-[#97989F] text-[12px] font-semibold ml-3">
          04 Jun 2026
        </small>
      </div>
    </Link>
  );
};

export default CardFooter;
