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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque quaerat expedita doloremque natus iusto quis amet. Dolor, asperiores? Earum, nulla doloremque ab dolore reprehenderit id necessitatibus libero eos quidem.
                </div>                     
            </div>
            <div className="flex">
              <span className="text-white text-4xl font-semibold md:mt-[-300px] md:ml-[55%] mt-[-300px] ml-[10%]">Biological Science</span>
            </div>
        <Footer />
    </div>
  )
}

export default BIo