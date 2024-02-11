import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"

const BIo = () => {
  return (
    <div className="">
        <NavBar />
            <div className="md:grid grid-cols-2 gap-0">
                <div className="">
                    <div className="bg-[linear-gradient(to_right_bottom,rgba(190,190,190,0.8),rgba(0,0,0,0.8)),url('https://wallpapercave.com/wp/wp2237889.jpg')] h-[60vh] bg-cover" ></div>
                </div>
                <div className="bg-gray-800 md:">
                
                </div>            
                <p className="text-2xl font-semibold">Biological Science</p>
            </div>
        <Footer />
    </div>
  )
}

export default BIo