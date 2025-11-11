import Link from "next/link";

export default function Home() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Mandalorian7773", icon: "github.png" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aditya-jagrani-270917317", icon: "github.png" },
    { name: "DevPals", url: "https://devpals.in", icon: "github.png" }
  ];

  const education = {
    degree: "B.Tech in Computer Science",
    focus: "Focused on Full-Stack, Web3, and Automation Development."
  };

  const specializations = [
    {
      title: "Full Stack",
      description: "MERN, GraphQL, REST APIs"
    },
    {
      title: "MVP Development",
      description: "Product Engineering & MVP Development"
    }
  ];

  const technologies = [
    "React", "Node.js", "Express", "MongoDB", 
    "GraphQL", "TypeScript", "Rust", "Solidity", "TailwindCSS"
  ];

  const services = [
    "Full-Stack Web App Development",
    "Web3 & Blockchain Development",
    "Product Engineering & MVP Development"
  ];

  return (
    <div
      className="w-full max-w-7xl grid gap-4 py-4 mx-auto"
      style={{
        gridTemplateColumns: "repeat(12, 1fr)", 
        gridAutoRows: "250px", 
      }}
    >
      {/* Profile Card */}
      <div className="flex items-center justify-center col-span-6 bg-white/10 p-4 rounded-3xl justify-center gap-10 backdrop-blur-sm border border-white/20">
        <img src={'pfp.jpg'} className="rounded-full h-52 w-auto" alt="Profile Picture" />
        <div>
          <p className="text-white text-5xl font-bold">Aditya Jagrani</p>
          <p className="text-white text-xl font-medium">Web, Web3 & Automations Dev <br /></p>
        </div>
      </div>

      {/* Social Links */}
      <div className="col-span-3 bg-white/10 p-4 rounded-3xl flex flex-col gap-4 backdrop-blur-sm border border-white/20">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center h-20 bg-white/20 rounded-2xl hover:opacity-90 transition-opacity backdrop-blur-sm border border-white/20"
          >
            <span className="text-white font-medium">{link.name}</span>
          </a>
        ))}
      </div>

      {/* Education */}
      <div className="col-span-3 bg-white/10 p-4 rounded-3xl text-white backdrop-blur-sm border border-white/20">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <p className="text-lg font-medium">{education.degree}</p>
        <p className="mt-2">{education.focus}</p>
      </div>

      {/* Projects */}
      <div className="col-span-3 bg-white/10 p-4 rounded-3xl backdrop-blur-sm border border-white/20">
        <Link href="/projects" className="w-full h-full flex items-center justify-center text-white text-2xl font-bold hover:underline">
          Projects
        </Link>
      </div>

      {/* Specialization */}
      <div className="col-span-6 bg-white/10 p-4 rounded-3xl flex flex-col backdrop-blur-sm border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Specialization</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-white/20 p-4 rounded-xl flex flex-col h-full backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">{spec.title}</h3>
              <p className="text-white/90 flex-grow">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="col-span-3 bg-white/10 p-4 rounded-3xl backdrop-blur-sm border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="text-white/90 flex items-start">
              <span className="mr-2">•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="col-span-4 bg-white/10 p-4 rounded-3xl backdrop-blur-sm border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Feel free to reach out</h2>
        <div className="flex flex-col gap-3">
          <a 
            href="mailto:adityajagrani8@gmail.com"
            className="px-4 py-2 bg-white/20 text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity backdrop-blur-sm border border-white/20"
          >
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/aditya-jagrani-270917317" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/20 text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity backdrop-blur-sm border border-white/20"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Technologies */}
      <div className="col-span-8 bg-white/10 p-4 rounded-3xl backdrop-blur-sm border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Technologies I&apos;ve been working with recently</h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}