export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl py-8 mx-auto">
      <div className="bg-card rounded-3xl p-8 border border-border">
        <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Professional Journey</h2>
            <p className="text-muted-foreground mb-4">
              I&apos;m Aditya Jagrani, a passionate developer based in Bengaluru, India, specializing in Web3,
              web development, and automation solutions. With a strong foundation in computer science,
              I&apos;ve focused on building scalable, efficient applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-4">
              My expertise spans across full-stack development, blockchain technologies, and automated
              systems that streamline business processes. I enjoy tackling complex challenges and
              transforming ideas into functional, user-friendly applications.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Technical Philosophy</h2>
            <p className="text-muted-foreground mb-4">
              I believe in writing clean, maintainable code that follows best practices and industry standards.
              My approach combines technical excellence with user-centered design to create applications
              that are both powerful and intuitive.
            </p>
            <p className="text-muted-foreground">
              Whether it&apos;s developing smart contracts on the blockchain, building responsive web applications,
              or creating automated workflows, I strive to deliver solutions that exceed expectations and
              provide lasting value.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">
            I&apos;m always open to discussing new opportunities, innovative projects, or potential collaborations.
            Feel free to reach out through any of the channels on my contact page.
          </p>
        </div>
      </div>
    </div>
  );
}