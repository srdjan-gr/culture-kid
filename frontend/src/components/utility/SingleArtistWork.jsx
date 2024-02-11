import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const SingleArtistWork = ({ artist }) => {
  // const imageUrl = process.env.STRAPI_URL + artist.data.attributes.image.data.attributes.url;
  return (
    <div className="w-1/2 h-screen flex flex-col items-start justify-start">
      <Link
        href={"/artists"}
        className="flex items-center uppercase mb-5 hover:text-gray-500 text-sm p-10"
      >
        <BsArrowLeft className="mr-2" />
        <p>Back</p>
      </Link>
      <div className="ps-20 pt-4 flex flex-col gap-5 w-2/3">
        {artist.data.attributes.products?.data?.map((product) => {
          return (
            <Link
              href={`/single-art/${product.id}`}
              className="border-[1px] border-gray-200 cursor-pointer p-6 hover:shadow-3xl"
            >
              {/* // <Image src={} /> */}
              <div className="font-karla_font">
                <p className="text-xl">{product.attributes.name}</p>
                <p className="text-gray-400">
                  {product.attributes.technique}, {product.attributes.year}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SingleArtistWork;
