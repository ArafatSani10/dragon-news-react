
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold mb-3">Login With</h1>
            <div className="*:w-full space-y-2">
                <button className="btn"><FaGoogle></FaGoogle>Login with google </button>
                <button className="btn"><FaGithub ></FaGithub>Login with GitHub</button>
            </div>

        </div>
    );
};

export default SocialLogin;