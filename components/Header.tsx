import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://links.papareact.com/1m8"
            width={50}
            className="rounded-full"
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The "DEV" Family</h1>
      </div>

      <div>
        <Link
          href="https://angry-ritchie-23849f.netlify.app/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Have a look a my portfolio
        </Link>
      </div>
    </div>
  );
}

export default Header;
