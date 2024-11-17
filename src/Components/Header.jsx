import moment from "moment";


const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 py-2">
           <div className="logo">
             <img className="w-[300px]" src='https://i.ibb.co.com/v1D0Vg1/logo.png' alt="" />
           </div>

           <h1 className="text-gray-400">Journalism Without Fear or Favour</h1>
           <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;