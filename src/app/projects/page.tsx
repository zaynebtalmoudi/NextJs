import Image from "next/image"
import pro1 from "../../assets/pro1.jpg"
import pro2 from "../../assets/pro2.jpg"
import pro3 from "../../assets/pro3.jpg"


export default function Projects() {
  return (
    <section className="container flex-center">
      <div className="text-center text-balance">
        <h3>My Projects</h3>
        <p className="px-2 mt-3 text-gray-500">
         Here are a few projects I've worked on recently.


        </p>

        
        <br />
        <div
          className="*:w-full grid mx-auto md:grid-rows-2 md:grid-cols-2 max-w-4xl md:px-0 px-10 *:h-full *:object-cover *:border-4 *:dark:border-white *:rounded-md gap-4 *:cursor-pointer group hover:*:!grayscale-0 *:hover:grayscale *:duration-1000"
        >
          <Image className="" src= {pro1} alt="pro1" />
          <Image src={pro3}   className="row-span-2" alt="" />
          <Image src={pro2} className="" alt="" />
        </div>
      </div>
    </section>

  )
}
