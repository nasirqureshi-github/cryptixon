import Link from "next/link"



const Footer = () => {
  return (
    <p className="w-full text-center text-base text-gray-500 py-2 ">Copyright © Designed & Developed by <Link
        href="https://github.com/nasirqureshi-github"
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        Nasir Hussain
      </Link>{" "}  {new Date().getFullYear()}</p>
  )
}

export default Footer