import Image from "next/image";
import { BsBoxArrowUp, BsEye } from "react-icons/bs";

const SingleArtImage = ({ item }) => {
  const imageUrl = `http://127.0.0.1:1337${item.data.attributes.image.data[0].attributes.url}`;
  return (
    <div className="bg-kid_light_gray w-1/2 h-screen flex flex-col items-end justify-start p-40">
      <div>
        <Image
          src={imageUrl}
          alt={item.data.attributes.name}
          width={100}
          height={100}
          className="h-[360px] w-full"
        />
      </div>
      <div className="flex items-center justify-center gap-8 mt-10 bg-slate-500 w-full">
        <div className="flex items-center justify-center gap-2 cursor-pointer text-kid hover:text-gray-400">
          <BsEye className=" text-kid_black text-sm " />
          <p className="text-sm">View in a room</p>
        </div>
        <div className="flex items-center justify-center gap-2 cursor-pointer hover:text-gray-400">
          <BsBoxArrowUp className=" text-kid_black text-sm " />
          <p className="text-sm">Share</p>
        </div>
      </div>
    </div>
  );
};

export default SingleArtImage;
