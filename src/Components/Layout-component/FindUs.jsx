import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className=" font-semibold mb-3 ">
                Find us on
            </h2>
            <div className="join join-vertical flex">
                <button className="btn join-item justify-start">
                    <FaFacebook ></FaFacebook>Facebook

                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter ></FaTwitter>Twitter
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagram ></FaInstagram>Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;