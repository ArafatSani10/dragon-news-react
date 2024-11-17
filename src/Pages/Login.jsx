import { Link } from "react-router-dom";


const Login = () => {
    return (

        <div className="min-h-screen  flex justify-center items-center">
            <div className="hero bg-base-200 min-h-screen">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                        <h1 className="text-2xl font-semibold text-center">Login Your Account</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral rounded-none">Login</button>
                            </div>
                        </form>
                        <p className="text-center font-semibold">
                            Don't Have An Account ? <Link className="text-red-500" to='/auth/register'>Register </Link>
                        </p>
                    </div>
                </div>
            </div>

    );
};

export default Login;