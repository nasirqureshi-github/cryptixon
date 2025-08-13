import { Icon } from "@iconify/react"

const About = ({ bitCoinType, discription , Iconbg, icon}) => {
  return (
    <div className="bg-white px-6 rounded-4xl w-full gap-3 mt-8 shadow py-8 flex-wrap flex-1/3 dark:bg-neutral-900">
    <h3 className="text-xl font-semibold">About</h3>
    <div className=" flex items-center gap-5 mt-4 mb-4">
    <Icon icon={icon} className={`${Iconbg} w-20 h-20`}/>
<h1 className="text-2xl font-semibold">Digital Cash <span className="text-sm ">{bitCoinType}</span></h1>
   </div>
<p className="texs-sm text-gray-500 ">{discription}.</p>
    </div>
  )
}

export default About