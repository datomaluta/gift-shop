import { Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBasketFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="max-w-[350px] w-full  overflow-hidden ">
      <div className="group relative">
        <Link href={"/"}>
          <Image
            src={"https://picsum.photos/200/300"}
            alt="product image"
            width={500}
            height={500}
            className="w-full h-[300px] md:h-[250px] object-cover"
          />
        </Link>
        <div className="flex flex-col gap-2 absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Tooltip content="Add to cart" placement="left" color="red">
            <button
              onClick={() => console.log("added cart")}
              className="bg-white rounded-full p-2"
            >
              <BsFillBasketFill className="" />
            </button>
          </Tooltip>
          <Tooltip content="Quick view" placement="left" color="red">
            <button
              onClick={() => console.log("Quick view")}
              className="bg-white rounded-full p-2"
            >
              <FaEye className="" />
            </button>
          </Tooltip>
        </div>
      </div>

      <p className="text-gray-400 mt-2 mb-1 text-sm">Wallets</p>
      <Link href={"/"} className="font-bold mb-1 block">
        Black Real Leather Wallet
      </Link>
      <p className="font-medium text-sm">$120.00</p>
    </div>
  );
};

export default ProductCard;
