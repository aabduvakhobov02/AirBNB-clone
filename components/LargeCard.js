import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute top-40 left-12">
        <h3 className="text-4xl mb-3 w-64 font-semibold text-white">{title}</h3>
        <p className="text-white text-lg md:text-xl font-normal max-w-[12rem] lg:max-w-sm">
          {description}
        </p>
        <button className="text-lg font-semibold bg-white text-[#222222] px-5 py-2 rounded-lg mt-5 hover:drop-shadow-lg active:scale-95 transition duration-150">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
