import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-[23.5rem] w-[23.5rem]">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-1 font-semibold">{title}</h3>
    </div>
  );
}

export default MediumCard;
