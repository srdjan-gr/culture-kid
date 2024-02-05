import Image from "next/image";
import Arrow from "../../../public/arrow.svg";

const SliderButtonGroup = () => {
  return (
    <div className="absolute -bottom-20 mt-10">
      <button>
        <Image
          src={Arrow}
          height={50}
          width={50}
          alt="arrow2"
          className="rotate-180"
        />
      </button>
      <button>
        <Image src={Arrow} height={50} width={50} alt="arrow1" />
      </button>
    </div>
  );
};

export default SliderButtonGroup;
