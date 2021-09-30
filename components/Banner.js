import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[580px] sm:h-[620px] lg:h-[720px] xl:h-[820px] 2xl:h-[880px]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="font-semibold text-2xl">Not sure where to go? Perfect.</p>
        <button className="text-2xl text-purple-500 bg-white px-16 py-6 rounded-full shadow-md font-semibold my-4 hover:shadow-xl active:scale-95 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
