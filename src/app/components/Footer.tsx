import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full lg:px-16 px-3 text-center mb-10">
      <h1 className="font-semibold text-xl">Install the mobile app</h1>
      <p className="text-gray-500">Generate your invoices and save them online</p>
      <div className="flex justify-center items-center gap-5 my-5 sm:flex-row flex-col">
        <a className="hover:invert cursor-pointer" href="https://www.apple.com/in/app-store/" target="_blank">
            <Image
            src="/appleStore.png"
            alt="apple download"
            width={170}
            height={50}
            />
        </a>
        <a className="hover:invert cursor-pointer border rounded-md" href="https://play.google.com/store/games?hl=en" target="_blank">
            <Image
            src="/googleStore.png"
            alt="google download"
            width={170}
            height={50}
            />
        </a>
      </div>
    </div>
  )
}

export default Footer;