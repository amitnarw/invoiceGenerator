import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full lg:px-16 px-3 text-center mb-10">
      <h1 className="font-semibold text-xl">Install the mobile app</h1>
      <p className="text-gray-500">
        Generate your invoices and save them online
      </p>
      <div className="flex justify-center items-center gap-5 my-5 sm:flex-row flex-col">
        <a
          className="hover:invert cursor-pointer duration-300"
          href="https://www.apple.com/in/app-store/"
          target="_blank"
        >
          <Image
            src="/appleStore.png"
            alt="apple download"
            width={170}
            height={50}
          />
        </a>
        <a
          className="hover:invert cursor-pointer border rounded-md duration-300"
          href="https://play.google.com/store/games?hl=en"
          target="_blank"
        >
          <Image
            src="/googleStore.png"
            alt="google download"
            width={170}
            height={50}
          />
        </a>
      </div>
      <div className="flex flex-row gap-10 justify-center pt-5 text-sm">
        <span className="text-gray-400">@2024 Invoice2.in</span>
        <a
          className="text-gray-500 hover:text-[#a29cff] duration-300"
          href="/terms"
          target="_blank"
        >
          Terms of Service
        </a>
        <a
          className="text-gray-500 hover:text-[#a29cff] duration-300"
          href="/privacy"
          target="_blank"
        >
          Privacy policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
