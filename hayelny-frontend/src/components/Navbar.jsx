import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
            <div
            className="bg-[#50A9E3] p-4"
        >
            <div className="flex justify-around items-center">
                <div className="flex gap-2 items-center">
                    <Link to="/">
                    <img src={logo} alt="logo" className='  h-10' />
                    </Link>
                    <p className="font-bold text-white text-xl">Hayelny.Ai</p>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/register" className="text-white font-semibold">Sign up</Link>
                    <Link to="/login" className="text-white font-semibold">Login</Link>
                    <Link to="/upload" className="text-[#50A9E3] bg-white rounded-full px-2 p-1">Upload</Link>
                    <Link to="/result" className="text-[#50A9E3] bg-white rounded-full px-2 p-1">Results</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar