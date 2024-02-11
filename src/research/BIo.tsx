import IonIcon from "@reacticons/ionicons"
import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"
import { useState } from "react"


const BIo = () => {
  const [collspanOpen, SetCollspan] = useState(false);

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
                <p><IonIcon name="mail" size="large"></IonIcon></p>
                <p className="pl-4 pt-[3px]">info@nifs.ac.lk</p>
              </div>
              <div className="pt-4 flex">
                <p><IonIcon name="call" size="large"></IonIcon></p>
                <p className="pl-4 pt-[3px]">(+94) 81 22 32 106, (+94) 81 22 32 107</p>                
              </div>

              <div className="bg-white text-xl px-12 py-8 rounded border mt-4">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetCollspan(!collspanOpen)}>
                  <p className="">This is title 1</p>
                  <p className="pt-[3px]">
                    <IonIcon name={collspanOpen ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    collspanOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo soluta eum iste itaque iusto, natus odio incidunt quibusdam ratione deleniti consequuntur, omnis non, delectus enim vitae velit magni maiores.
                      Aspernatur in omnis aut rem accusamus quibusdam repellat excepturi beatae id minima, incidunt, voluptates eaque nesciunt, nulla vel ducimus modi? Iste rem sint dignissimos praesentium provident modi veritatis, pariatur perferendis?
                      Hic ipsam voluptatum ullam molestias. Doloremque cumque, nisi, id unde temporibus odio sed minus, molestiae quasi aperiam dicta. Magni reiciendis vero soluta, blanditiis tenetur ipsam facilis quidem commodi eum deleniti?
                      Modi tempore alias sunt nam, assumenda saepe numquam minus, repellendus culpa provident ab exercitationem fuga, quo at maiores. Reprehenderit beatae repudiandae autem voluptatibus maxime aperiam quae totam corrupti eos praesentium.
                      Sunt necessitatibus omnis, provident dolorum molestiae, non cum laudantium officia adipisci tempora, natus eum? Culpa optio est aspernatur sed, corrupti quo corporis blanditiis odit, voluptas, esse aut voluptate adipisci perspiciatis!
                      Eaque vitae exercitationem tempore a quas totam quaerat enim dicta nostrum soluta beatae repellendus, nulla, commodi rerum? Quibusdam consectetur cupiditate officiis, soluta odit exercitationem accusamus modi facilis asperiores nostrum fugiat?  
                    </div>    
                  </div>
              </div>

            </div>
        <Footer />
    </div>
  )
}

export default BIo