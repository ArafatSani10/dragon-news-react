import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center ">
            <div className="">{user.name}</div>
            <div className="nav space-x-5   ">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            
            <div className="login flex gap-3 items-center">
                <div className="">
                    <img src="https://i.ibb.co.com/G2S0BDq/user.png" alt="" />
                </div>
                <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;