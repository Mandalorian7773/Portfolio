import Image from "next/image";
import '/public/pfp.png';


export default function Home() {
  return (
    <div
      className="w-full max-w-7xl grid gap-4 py-4 mx-auto"
      style={{
        gridTemplateColumns: "repeat(12, 1fr)", 
        gridAutoRows: "250px", 
      }}
    >
      <div className="flex items-center justify-center col-span-6 bg-stone-100 p-4 rounded-3xl justify-center gap-10">
        <img src={'pfp.png'} className="rounded-full h-32 w-auto"></img>
        <div>
          <p className="text-black text-5xl font-bold">Aditya Jagrani</p>
          <p className="text-black text-xl font-medium">Web3 & Web Dev from Bengaluru, India.</p>
        </div>
      </div>
      <div className="col-span-3 bg-violet-600 p-4 rounded-3xl">Services</div>
      <div className="col-span-3 bg-violet-700 p-4 rounded-3xl">Education</div>
      <div className="col-span-3 bg-pink-500 p-4 rounded-3xl">Projects</div>
      <div className="col-span-6 bg-pink-600 p-4 rounded-3xl">
        <p>Specialization</p>
      </div>
      <div className="col-span-3 bg-pink-700 p-4 rounded-3xl">Github</div>
      <div className="col-span-4 bg-green-500 p-4 rounded-3xl">
        <p>Feel free to reach out </p>
      </div>
      <div className="col-span-8 bg-green-700 p-4 rounded-3xl">
        <p>Technologies I've been working with recently</p>
      </div>
      
    </div>
  );
}


