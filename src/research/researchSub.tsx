import IonIcon from "@reacticons/ionicons"

const researchSub = () => {
  return (
    <div className="container mx-auto px-12">
        <div className="text-center mt-16">
            <h1 className="text-4xl font-semibold pb-2">Research Division at NIFS</h1>
            <p className="text-xl pb-8">Advancing the frontiers of fundamental research</p>
        </div>
        <div className="md:grid grid-cols-3 gap-12 ">
            <div className="">
                <div className="bg-[url(https://wallpapercave.com/wp/wp2237889.jpg) bg-gradient-to-tr from-[#000000] to-[#808080]] bg-no-repeat bg-cover rounded mix-blend-overlay">
                    <span className="font-bold text-2xl text-white">Biological Science</span>
                </div>    
                <div className="flex">
                        <span className="">Explore More</span>
                        <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                </div>                
            </div>
            <div className="">
                Earth and Space Science
                <div className="flex">
                    <span className="">Explore More</span>
                    <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                </div>
            </div>
            <div className="">
                Computer Science, Mathematics and Statistics
                <div className="flex">
                    <span className="">Explore More</span>
                    <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                </div>
            </div>
            <div className="">
                Earth and Space Science
                <div className="flex">
                    <span className="">Explore More</span>
                    <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                </div>
            </div>
            <div className="">
                Environment Science
                <div className="flex">
                    <span className="">Explore More</span>
                    <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                </div>
            </div>
            <div className="">
                Philosophy and Social Science
                <div className="flex">
                    <span className="">Explore More</span>
                    <span className="py-[3px] px-2"><IonIcon name="chevron-forward-outline"></IonIcon></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default researchSub