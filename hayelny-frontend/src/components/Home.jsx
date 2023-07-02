import { Link } from "react-router-dom"

const Home = () => {
  return (
        <div className="flex justify-center items-center my-32">
    <div className="bg-[#50A9E3] rounded-xl py-10 pl-16 w-[981px] ">
        <div className="flex flex-col justify-end items-end text-center gap-16 w-[824px]">
            <Link to="/login" className="text-[#50A9E3] bg-white rounded-full  py-4 text-2xl w-full text-center">Login</Link>
            <Link to="/" className="text-[#50A9E3] bg-white rounded-full  py-4 text-2xl w-full text-center ">Continue with Gmail </Link>
            <Link to="/" className="text-[#50A9E3] bg-white rounded-full  py-4 text-2xl w-full text-center">Continue with Facebook</Link>
        </div>
        </div>
    </div>
  )
}

export default Home