import IonIcon from "@reacticons/ionicons"
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
                <div className="bg-gray-800 md:visible invisible">
                </div>                     
            </div>
            <div className="flex">
              <span className="text-white text-4xl font-semibold md:mt-[-300px] md:ml-[55%] mt-[-300px] ml-[10%]">Biological Science</span>
            </div>

            <div className="container mx-auto px-10 pb-12">
              <div className="flex pt-12 text-4xl">
                <p className="font-semibold">Background</p>
                <p className="pl-2 pt-[3px]"><IonIcon name="newspaper" ></IonIcon></p>
              </div>
              <hr className="mb-4"/>
              <p className="">The main focus of research in this division is discovering, eveluating and developing the island's bountiful biofic and abiotic natural reseources. Research activties are also focussed on efficient use of existing reseources and maintaining a cleaner enviroment</p>
              <div className="flex pt-12 text-4xl">
                <p className="font-semibold">Contact</p>
                <p className="pl-2 pt-[3px]"><IonIcon name="newspaper" ></IonIcon></p>
              </div>
              <hr className="mb-4"/>
              <div>
                <p>Division of Biological Sciences </p>
                <p>National Institute of Fundamental Studies</p>
                <p>Hanthana Road, Kandy (20000)</p>
                <p>Sri Lanka</p>
              </div>
              <div className="pt-4 flex">
                <p>Email</p>
                <p className="pl-4">info@nifs.ac.lk</p>
              </div>
            </div>
        <Footer />
    </div>
  )
}

export default BIo