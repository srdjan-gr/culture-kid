import Image from "next/image";
import Link from "next/link";
import { BsCart2, BsBoxArrowUp } from "react-icons/bs";

const Card = ({ item }) => {
  const imageUrl = `http://127.0.0.1:1337${item.attributes.image.data[0].attributes.url}`;

  return (
    <Link href={`/single-art/${item.attributes.slug}`}>
      <div className="flex flex-col items-start justify-center w-80  p-8 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer my-5">
        <Image
          src={imageUrl}
          width={100}
          height={100}
          className="w-full"
          alt={item.attributes.name}
        />

        <div className="mt-5 font-karla_font">
          <h2 className="text-xl font-semibold">{item.attributes.name}</h2>
          <p className="text-l text-gray-500">
            {item.attributes.artist.data.attributes.name}
          </p>
          <p className="text-l text-gray-400 italic">
            {item.attributes.technique}, {item.year}
          </p>
          <p className="text-l text-gray-400 italic">
            {item.attributes.dimensions} in
          </p>
        </div>

        <div className="w-full mt-12 flex justify-between items-center  hover:visible">
          <h3 className=" text-xl">
            {"$"}
            {item.attributes.price}
          </h3>
          <div className="flex gap-2">
            <BsBoxArrowUp className="bg-kid_gray text-kid_black w-8 h-8 p-[6px] cursor-pointer" />
            <BsCart2 className="bg-kid_black text-kid_white w-8 h-8 p-[6px] cursor-pointer" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
