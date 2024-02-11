import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"


const researchSub = () => {
  return (
    <div className="container mx-auto px-12">
        <div className="text-center mt-16">
            <h1 className="text-4xl font-semibold pb-2">Research Division at NIFS</h1>
            <p className="text-xl pb-8">Advancing the frontiers of fundamental research</p>
        </div>
        <div className="md:grid grid-cols-3 gap-12 ">
            <div className="">
                <Link to={'/Research/Bio'}>
                    <div className="cursor-pointer rounded bg-[linear-gradient(to_right_bottom,rgba(190,190,190,0.8),rgba(0,0,0,0.8)),url('https://wallpapercave.com/wp/wp2237889.jpg')] h-72 bg-cover bg-center bg-no-repeat mb-8 bg-opacity-75" >
                        <div className="px-8 py-28">
                            <span className="font-bold text-2xl text-white">Biological Science</span>  
                            <div className="flex text-white duration-500 hover:pl-8">
                                <span className="">Explore More</span>
                                <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                            </div> 
                        </div>
                    </div>
                </Link>              
            </div>
            <div className="">
                <Link>
                    <div className="cursor-pointer rounded bg-[linear-gradient(to_right_bottom,rgba(190,190,190,0.8),rgba(0,0,0,0.8)),url('https://wallpapercave.com/wp/wp10346292.jpg')] h-72 bg-cover bg-center bg-no-repeat mb-8 bg-opacity-75" >
                        <div className="px-8 py-28">
                            <span className="font-bold text-2xl text-white">Earth and Space Science</span>  
                            <div className="flex text-white duration-500 hover:pl-8">
                                <span className="">Explore More</span>
                                <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                            </div> 
                        </div>
                    </div> 
                </Link>
            </div>
            <div className="">
                <div className="rounded bg-[linear-gradient(to_right_bottom,rgba(190,190,190,0.8),rgba(0,0,0,0.8)),url('https://wallpapercave.com/wp/wp12356395.jpg')] h-72 bg-cover bg-center bg-no-repeat mb-8 bg-opacity-75" >
                    <div className="px-8 py-28">
                        <span className="font-bold text-2xl text-white">Computer Science, Mathematics and Statistics</span>  
                        <div className="flex text-white duration-500 hover:pl-8">
                            <span className="">Explore More</span>
                            <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                        </div> 
                    </div>
                </div>              
            </div>
            <div className="">
                <div className="rounded bg-[linear-gradient(to_right_bottom,rgba(190,190,190,0.8),rgba(0,0,0,0.8)),url('https://wallpapercave.com/wp/wp10346292.jpg')] h-72 bg-cover bg-center bg-no-repeat mb-8 bg-opacity-75" >
                    <div className="px-8 py-28">
                        <span className="font-bold text-2xl text-white">Earth and Space Science</span>  
                        <div className="flex text-white duration-500 hover:pl-8">
                            <span className="">Explore More</span>
                            <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                        </div> 
                    </div>
                </div>              
            </div>
            <div className="">
                <div className="rounded bg-[linear-gradient(to_right_bottom,rgba(190,190,190,0.8),rgba(0,0,0,0.8)),url('https://wallpapercave.com/wp/wp12243160.jpg')] h-72 bg-cover bg-center bg-no-repeat mb-8 bg-opacity-75" >
                    <div className="px-8 py-28">
                        <span className="font-bold text-2xl text-white">Environment Science</span>  
                        <div className="flex text-white duration-500 hover:pl-8">
                            <span className="">Explore More</span>
                            <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                        </div> 
                    </div>
                </div>              
            </div>
            <div className="">
                <div className="rounded bg-[linear-gradient(to_right_bottom,rgba(190,190,190,0.8),rgba(0,0,0,0.8)),url('https://wallpapercave.com/wp/wp13134266.jpg')] h-72 bg-cover bg-center bg-no-repeat mb-8 bg-opacity-75" >
                    <div className="px-8 py-28">
                        <span className="font-bold text-2xl text-white">Philosophy and Social Science</span>  
                        <div className="flex text-white duration-500 hover:pl-8">
                            <span className="">Explore More</span>
                            <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                        </div> 
                    </div>
                </div>              
            </div>            
        </div>
    </div>
  )
}

export default researchSub