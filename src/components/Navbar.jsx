import ssImage from './images/s-s.png';

const Navbar = () => {
    return(
        <>
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50">
        <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
        <img src={ssImage} alt="s-s" className="w-full h-auto block" />
        </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">SIMPLY<span className="text-blue-600">SOLAR</span></span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition">Residential</a>
          <a href="#" className="hover:text-blue-600 transition">Commercial</a>
          <a href="#" className="hover:text-blue-600 transition">Products</a>
          <a href="#" className="hover:text-blue-600 transition">About Us</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-blue-100">
          Free Quote
        </button>
      </nav>
        </>
    )
}

export default Navbar;