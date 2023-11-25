import Image from "next/image";

export default function ItemProyect({ title = 'Proyecto', img = '/images/proyects/p2.png', onClick }) {
  return (
    <div className="w-full rounded-md overflow-hidden relative cursor-pointer" onClick={onClick} style={{ height: '300px' }}>
      <div className="group flex justify-between items-center absolute bg-black bg-opacity-40 backdrop-blur-[1.5px] w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-in transition duration-150 hover:backdrop-blur-none">
        <h3 className="w-full text-xl font-bold text-center transition-opacity duration-300 ease-in group-hover:duration-300 group-hover:opacity-0">{title}</h3>
      </div>
      <Image src={img} width={0} height={0} alt="Image" layout="responsive" className="rounded-md" />
    </div>
  );
};
