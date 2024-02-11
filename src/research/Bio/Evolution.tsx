import NavBar from "../../nav/Navbar"
import Footer from "../../footer/Footer"
import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"


const Evolution = () => {
  return (
    <div className="">
      <NavBar />
      <div className="container mx-auto px-10 my-16">
        <p className="text-3xl font-semibold">Evolution, Ecology and Biodiversity Research Program</p>  
        <div className="text-2xl mt-10 flex">
          <p className="">Background</p>
          <p className="pt-[3px] pl-4"><IonIcon name="newspaper"></IonIcon></p>
        </div>
        <hr />
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fugit sequi, aperiam nam id fugiat nostrum unde totam ratione esse rem blanditiis minima repellat quam praesentium error facere iusto magni!
          Explicabo fugiat tenetur quia reprehenderit iure magni illo placeat ratione recusandae rerum quae aliquam hic, quod architecto in praesentium omnis cumque amet temporibus pariatur beatae dolorum. Aperiam excepturi neque recusandae!
          Doloribus dicta veniam, accusamus nobis laboriosam, sed repudiandae, consequuntur unde itaque maxime modi beatae natus nostrum illum eligendi? Reprehenderit iste enim libero veniam consectetur minima impedit id debitis itaque asperiores!
          Atque deleniti quas a itaque? Quisquam reprehenderit sapiente possimus distinctio! Tempore blanditiis, esse sit, minima ipsam aliquam voluptates a sunt, illo possimus mollitia corrupti eos quo culpa doloribus atque soluta?
          Omnis, vero odio ipsam, dolores hic laudantium, neque obcaecati quisquam vitae illo possimus natus illum distinctio incidunt corrupti deleniti fugit minus laboriosam blanditiis! Vitae maiores aperiam dolorem, placeat velit numquam.
          Vitae error, quidem tempora asperiores laudantium, incidunt vero exercitationem voluptatum praesentium est ab nostrum doloremque impedit porro facere, neque fugiat aliquid possimus odio quae! Voluptates esse harum dicta amet doloribus.
          Voluptates pariatur est recusandae nisi, temporibus earum qui repellat officiis et vitae animi quam omnis eum quidem illo commodi aliquid doloribus error alias ipsa dolore aspernatur nostrum magnam? Assumenda, error.
          Obcaecati, eligendi adipisci omnis, nemo corporis quod quasi doloribus animi aut iure doloremque nulla sit totam incidunt modi. Maiores numquam, id pariatur minima placeat quidem natus optio laborum voluptatem et.
        </p>

        <div className="text-2xl mt-8">What does this matter ?</div>
        <hr className="pb-4"/>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti laborum obcaecati, amet ipsa velit repudiandae. Asperiores dolorem officiis accusantium ullam nemo cum inventore ut, eveniet sed? Expedita, voluptatem molestiae.
          Pariatur laborum omnis perferendis tenetur totam numquam consequuntur sint minima esse inventore. Ipsam itaque illo facere dicta distinctio, ullam ut maxime nostrum cum sequi accusamus rem debitis mollitia corporis! Architecto!
          Adipisci consequatur possimus iste sapiente! Voluptas odit molestias reiciendis, qui sunt maiores in cupiditate tenetur est consectetur! Officia cum necessitatibus eaque nesciunt, possimus veniam sunt quae neque, suscipit voluptatum saepe.
          Eos ut necessitatibus quaerat iste laboriosam sunt? Temporibus excepturi labore, numquam minima eligendi ex repellendus aperiam laboriosam natus quod ullam maiores totam doloremque nostrum voluptatum in ad optio. Velit, temporibus.
        </p>

        <div className="mt-8 text-2xl flex">
          <p className="">Ongoing Prokects</p>
          <p className="ml-2"><IonIcon name="stats-chart" ></IonIcon></p>
        </div>
        <hr className="pb-4"/>

        <div className="">
          <div className="flex md:mx-24 justify-between my-2 text-xl">
            <Link to={'/Research/Bio/Evolution/EvolutionMore'}>
              <p className="">Biodiversity Patterns of herbivore scrab chafers of Sri Lanka <br /> (Sericini: Coleoptera: Scarabaeidae).</p>
              <p className="pt-2"><IonIcon size="large" name="chevron-forward-circle-outline" ></IonIcon></p>
            </Link>
          </div>
          <hr />

          <div className="flex md:mx-24 justify-between my-2 text-xl">
            <Link to={'/Research/Bio/Evolution/EvolutionMore'}>
              <p className="">Evolution of the jumping spiders (Salticidae) intro to Project </p>
              <p className="pt-2"><IonIcon size="large" name="chevron-forward-circle-outline" ></IonIcon></p>
            </Link>
          </div>
          <hr />

          <div className="flex md:mx-24 justify-between my-2 text-xl">
            <Link to={'/Research/Bio/Evolution/EvolutionMore'}>
              <p className="">The phylogenetics of the hybirds between the Sri Lanka primate species of langur <br /> (Semnopithecus priam thersites and S. Vetulus) </p>
              <p className="pt-2"><IonIcon size="large" name="chevron-forward-circle-outline" ></IonIcon></p>
            </Link>
          </div>
          <hr />
          <Link to={'/Research/Bio/Evolution/EvolutionMore'}>
            <div className="flex md:mx-24 justify-between my-2 text-xl">
                <p className="">The phylogenetics of the hybirds between the Sri Lanka primate species of langur <br /> (Semnopithecus priam thersites and S. Vetulus) </p>
                <p className="pt-2"><IonIcon size="large" name="chevron-forward-circle-outline" ></IonIcon></p>            
            </div>
          </Link>
          <hr />
          <Link to={'/Research/Bio/Evolution/EvolutionMore'}>
            <div className="flex md:mx-24 justify-between my-2 text-xl">
                <p className="">Higher level phylogeny and Evolution of the crab spiders <br /> (Thomisidae) </p>
                <p className="pt-2"><IonIcon size="large" name="chevron-forward-circle-outline" ></IonIcon></p>            
            </div>
          </Link>
          <hr />
          <Link to={'/Research/Bio/Evolution/EvolutionMore'}>
            <div className="flex md:mx-24 justify-between my-2 text-xl">
                <p className="">Endemics of the central highlands of Sri Lanka </p>
                <p className="pt-2"><IonIcon size="large" name="chevron-forward-circle-outline" ></IonIcon></p>            
            </div>
          </Link>
          <hr />

        </div>

        <div className="">
          <div className="text-2xl mt-12 flex">
            <p className="">Lab Members</p>
            <p className="pt-[3px] pl-2"><IonIcon name="people" ></IonIcon></p>
          </div>

          <div className="md:grid grid-cols-3 gap-6">
            <div className="h-96 md:w-3/4 bg-gray-700 text-white mt-6 rounded">
              <div className="pt-[70%] ml-[10%]">
                <p className="font-semibold text-2xl">Anura Pathirana</p>
                <p className="">Chief Technical Officer</p>
                <p className="pt-10">Microbial Biotechnology</p>
              </div>
            </div>
            <div className="h-96 md:w-3/4 bg-gray-700 text-white mt-6 rounded">
              <div className="pt-[70%] ml-[10%]">
                <p className="font-semibold text-2xl">Anura Pathirana</p>
                <p className="">Chief Technical Officer</p>
                <p className="pt-10">Microbial Biotechnology</p>
              </div>
            </div>
            <div className="h-96 md:w-3/4 bg-gray-700 text-white mt-6 rounded">
              <div className="pt-[70%] ml-[10%]">
                <p className="font-semibold text-2xl">Anushika Liyanage</p>
                <p className="">Chief Technical Officer</p>
                <p className="pt-10">Office of the Director</p>
              </div>
            </div>
            <div className="h-96 md:w-3/4 bg-gray-700 text-white mt-6 rounded">
              <div className="pt-[70%] ml-[10%]">
                <p className="font-semibold text-2xl">Anura Pathirana</p>
                <p className="">Chief Technical Officer</p>
                <p className="pt-10">Microbial Biotechnology</p>
              </div>
            </div>
            <div className="h-96 md:w-3/4 bg-gray-700 text-white mt-6 rounded">
              <div className="pt-[70%] ml-[10%]">
                <p className="font-semibold text-2xl">Anura Pathirana</p>
                <p className="">Chief Technical Officer</p>
                <p className="pt-10">Microbial Biotechnology</p>
              </div>
            </div>
            <div className="h-96 md:w-3/4 bg-gray-700 text-white mt-6 rounded">
              <div className="pt-[70%] ml-[10%]">
                <p className="font-semibold text-2xl">Anushika Liyanage</p>
                <p className="">Chief Technical Officer</p>
                <p className="pt-10">Office of the Director</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Evolution