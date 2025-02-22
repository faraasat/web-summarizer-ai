import Image from "next/image";

import FavIcon from "../assets/loading.png";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[color:rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <Image
        src={FavIcon}
        alt="Loading Image"
        width={200}
        height={200}
        className="animate-bounce"
      />
    </div>
  );
};

export default Loader;
