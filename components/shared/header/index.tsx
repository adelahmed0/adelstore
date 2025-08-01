import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} Logo`}
              width={48}
              height={48}
              className="rounded-full"
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
          </Link>
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default Header;
