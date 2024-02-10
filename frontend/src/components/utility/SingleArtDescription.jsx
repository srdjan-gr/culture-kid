import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";

const SingleArtDescription = ({ item }) => {
  return (
    <div className="w-1/2 h-screen flex flex-col items-start justify-start p-24">
      <div className="w-3/4">
        <Link
          href={"/"}
          className="flex items-center uppercase mb-5 hover:text-gray-500 text-sm"
        >
          <BsArrowLeft className="mr-2" />
          <p>Back</p>
        </Link>

        <h1 className="font-karla_font text-5xl mb-2 font-400">
          {item.data.attributes.name}
        </h1>
        <h2 className="font-karla_font text-2xl mb-8 font-thin text-gray-700 capitalize">
          {item.data.attributes.artist.data.attributes.name}
        </h2>
        <p className="text-gray-500 font-karla_font ">
          {item.data.attributes.technique}, {item.data.attributes.year}
        </p>
        <p className="text-gray-500 font-karla_font ">Galery wrap canvas</p>
        <p className="text-gray-500 font-karla_font mb-6">
          {item.data.attributes.dimensions} in
        </p>
        <p className="text-gray-500 font-karla_font mb-6">
          {item.data.attributes.description} in
        </p>

        <div className="border-[.5px] border-gray-300 mb-6"></div>

        <h3 className=" text-2xl text-gray-700 font-semibold mb-2">
          ${item.data.attributes.price}
        </h3>

        <div className="flex items-center justfy-center">
          <CiLocationOn className="text-sm mr-2" />
          <p className="text-gray-500 text-sm">Ships from New York, NY, USA</p>
        </div>

        <div className="flex items-center justfy-center mb-6">
          <HiOutlineArchiveBox className="text-sm mr-2" />
          <p className="text-gray-500 text-sm">
            Estimated to ship in 3 - 7 days within USA
          </p>
        </div>

        <button className="w-full bg-kid_black p-3 text-kid_white uppercase mb-3 hover:bg-kid_black/90">
          Add to card
        </button>
        <p className="text-gray-500 mb-6 text-sm">
          Taxes and shiping fees will apply upon checkout
        </p>
      </div>
    </div>
  );
};

export default SingleArtDescription;
