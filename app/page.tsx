import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  const cardData = [
     {
      img: "/metaverse.jpg",
      title: "Metaverse",
      desc: "I am using this as an example text to show desc of this card, this text means nothing and shouldn't be consider",
      btnTitle: "Learn More About Metaverse",
      btnBg: "bg-zinc-400",
    },
     {
      img: "/nextjs.jpg",
      title: "NextJS",
      desc: "I am using this as an example text to show desc of this card, this text means nothing and shouldn't be consider",
      btnTitle: "Learn More About NextJS",
      btnBg: "bg-gray-800",
    },
    {
      img: "/metaverse.jpg",
      title: "Programming",
      desc: "I am using this as an example text to show desc of this card, this text means nothing and shouldn't be consider",
      btnTitle: "Learn More About Programming",
      btnBg: "bg-blue-600",
    },
  ];
  return (
    <div>
      <div >
      <h1 className="mx-10 text-4xl font-bold text-center text-zinc-500 gap-4 py-6 bg-slate-200">Assignment 10</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full place-items-center">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-200 shadow-md rounded-lg overflow-hidden w-[300px] sm:w-[200px] md:w-[300px] lg:w-[400px] my-6 mx-6"
          >
            <Image alt={item.title} src={item.img} height={200} width={420} className="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
              <div className="mt-4 flex justify-between items-center">
                
                <Button btnBG={item.btnBg} btnTitle={item.btnTitle} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
