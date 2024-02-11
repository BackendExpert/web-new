import IonIcon from "@reacticons/ionicons"
import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"
import { useState } from "react"
import { Link } from "react-router-dom"


const BIo = () => {
  const [collspanOpen, SetCollspan] = useState(false);
  const [foodOpen, SetFood] = useState(false);
  const [Microbio, SetMicroBio] = useState(false);
  const [SoilOpen, SetSoil] = useState(false);
  const [MolecularOpen, SetMolecular] = useState(false);
  const [Biochemistry, SetBioCh] = useState(false);
  const [PlantOpen, SetPlant] = useState(false);
  const [Taxonomy, SetTax] = useState(false);
  const [PriBio, SetPriBio] = useState(false);
  const [Rhizobium, SetRhi] = useState(false);

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

              <p className="pt-8 text-4xl font-semibold">Current Focus Area</p>
              <hr className="pb-2"/>

              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetCollspan(!collspanOpen)}>
                  <p className="">Evolution, Econlogy and Biodiversity</p>
                  <p className="pt-[3px]">
                    <IonIcon name={collspanOpen ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    collspanOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Understanding the Process that form and maintain Biodiversity </div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>

              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetFood(!foodOpen)}>
                  <p className="">Food Chemistry</p>
                  <p className="pt-[3px]">
                    <IonIcon name={foodOpen ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    foodOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Protect the public from heatlth risk brought upon by food</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>

              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetMicroBio(!Microbio)}>
                  <p className="">Microbial Biotechnology</p>
                  <p className="pt-[3px]">
                    <IonIcon name={Microbio ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    Microbio ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Nature-friendly approach to ameliorate Agriculture, Ecosystems, Environment and Medicine</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>

              
              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetSoil(!SoilOpen)}>
                  <p className="">Microbiology and Soil Ecosystem</p>
                  <p className="pt-[3px]">
                    <IonIcon name={SoilOpen ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    SoilOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Explore the microbial flora and the soil Ecosystem of Sri Lanka</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>

              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetMolecular(!MolecularOpen)}>
                  <p className="">Molecular Microbiology and Human Diseases</p>
                  <p className="pt-[3px]">
                    <IonIcon name={MolecularOpen ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    MolecularOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>For a Diseases free nation</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>

              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetBioCh(!Biochemistry)}>
                  <p className="">Nutritional Biochemistry</p>
                  <p className="pt-[3px]">
                    <IonIcon name={Biochemistry ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    Biochemistry ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Understanding the Nutritional requirements of Sri Lanka at a cellular abd nolecular level to make our country more Nutritionally sufficient</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>

              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetPlant(!PlantOpen)}>
                  <p className="">Plant Stress Biology and Molecular Genetics</p>
                  <p className="pt-[3px]">
                    <IonIcon name={PlantOpen ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    PlantOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Design and helping plants to better adapt to climate change</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>

              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetTax(!Taxonomy)}>
                  <p className="">Plant Taxonomy and Conservation</p>
                  <p className="pt-[3px]">
                    <IonIcon name={Taxonomy ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    Taxonomy ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Protecting the flora and fauna of Sri Lanka</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>


              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetPriBio(!PriBio)}>
                  <p className="">Primary Biology</p>
                  <p className="pt-[3px]">
                    <IonIcon name={PriBio ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    PriBio ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Conserving primates and other organisms through new discoveries and disseminating knowladge</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>


              <div className="bg-white text-xl px-12 py-8 rounded border mt-4 border-black cursor-pointer">
                <div className="flex justify-between w-full font-semibold" onClick={() => SetRhi(!Rhizobium)}>
                  <p className="">Rhizobium</p>
                  <p className="pt-[3px]">
                    <IonIcon name={Rhizobium ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
                  </p>

                </div>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    Rhizobium ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}>          
                    <div className="overflow-hidden md:text-2xl text-xl">
                      <div className="">
                        <div className="md:grid grid-cols-2 gap-2 justify-between">
                          <div>Role of microbial biofilms in Agriculture, plantation and the enviroment</div>  
                          <div className="md:w-[35%] md:ml-[55%]">
                            <Link to={'/Research/Bio/Evolution'}>
                              <div className="flex border py-2 px-4 border-black rounded-3xl cursor-pointer md:mt-0 mt-6">
                                <p className="">Explore More</p>
                                <p className="pt-[3px] pl-2"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div> 
                    </div>    
                  </div>                  
              </div>

            </div>
        <Footer />
    </div>
  )
}

export default BIo