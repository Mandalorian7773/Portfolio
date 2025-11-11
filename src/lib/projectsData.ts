export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  repoUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "crypt7",
    name: "Crypt7",
    shortDescription: "A non-custodial crypto wallet built using Rust and React TypeScript supporting Ethereum wallet creation and token transfers.",
    fullDescription: "Crypt7 is a secure, non-custodial cryptocurrency wallet that gives users complete control over their digital assets. Built with security as the top priority, it allows users to create Ethereum wallets and transfer tokens without relying on third-party custody.",
    features: [
      "Non-custodial wallet creation",
      "Ethereum wallet support",
      "Token transfer functionality",
      "Secure key management",
      "User-friendly interface"
    ],
    techStack: ["Rust", "React", "TypeScript", "Ethereum", "Web3.js"],
    challenges: [
      "Ensuring cryptographic security",
      "Managing private key storage securely",
      "Implementing smooth UX for complex blockchain operations"
    ],
    repoUrl: "https://github.com/Mandalorian7773/Crypt7"
  },
  {
    id: "collabie",
    name: "Collabie",
    shortDescription: "A real-time collaboration platform with servers, channels, and chat built using Node.js, Express, MongoDB, GraphQL, React, and Socket.IO.",
    fullDescription: "Collabie is a feature-rich real-time collaboration platform that enables teams to communicate and work together seamlessly. It provides a Discord-like experience with servers, channels, and instant messaging capabilities.",
    features: [
      "Real-time chat with Socket.IO",
      "Server and channel management",
      "User authentication and permissions",
      "GraphQL API for data fetching",
      "Responsive UI for all devices"
    ],
    techStack: ["Node.js", "Express", "MongoDB", "GraphQL", "React", "Socket.IO"],
    challenges: [
      "Implementing real-time communication",
      "Managing concurrent connections",
      "Building scalable server architecture"
    ],
    repoUrl: "https://github.com/Mandalorian7773/Collabie"
  },
  {
    id: "cyclebay",
    name: "CycleBay",
    shortDescription: "A full-stack marketplace app for buying and selling bicycles with secure user auth and listings.",
    fullDescription: "CycleBay is a comprehensive marketplace platform for bicycle enthusiasts to buy and sell bicycles. It features secure user authentication, detailed product listings, and a clean, intuitive interface.",
    features: [
      "User authentication and profiles",
      "Bicycle listing and search",
      "Secure payment processing",
      "Image upload and management",
      "Admin dashboard for moderation"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    challenges: [
      "Implementing secure payment processing",
      "Building efficient search functionality",
      "Managing image uploads and storage"
    ],
    repoUrl: "https://github.com/Mandalorian7773/CycleBay"
  },
  {
    id: "task-board-pro",
    name: "Task-Board-Pro",
    shortDescription: "A team productivity tool for managing projects and tracking tasks efficiently.",
    fullDescription: "Task-Board-Pro is a powerful project management tool designed to help teams organize, prioritize, and track their work. With intuitive drag-and-drop functionality and real-time updates, it streamlines the entire project lifecycle.",
    features: [
      "Drag-and-drop task management",
      "Team collaboration features",
      "Real-time updates",
      "Project analytics and reporting",
      "Customizable workflows"
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Socket.IO", "Chart.js"],
    challenges: [
      "Implementing real-time collaborative features",
      "Creating intuitive drag-and-drop interface",
      "Building comprehensive reporting dashboard"
    ],
    repoUrl: "https://github.com/Mandalorian7773/Task-Board-pro"
  },
  {
    id: "ibento-co",
    name: "Ibento.co",
    shortDescription: "A platform for discovering and hosting local events, built using Next.js and Firebase.",
    fullDescription: "Ibento.co connects event organizers with attendees in their local communities. It provides tools for creating, promoting, and managing events while offering users an easy way to discover interesting activities nearby.",
    features: [
      "Event creation and management",
      "Location-based event discovery",
      "User reviews and ratings",
      "Ticketing and RSVP system",
      "Mobile-responsive design"
    ],
    techStack: ["Next.js", "Firebase", "TailwindCSS", "Google Maps API", "Stripe"],
    challenges: [
      "Integrating Google Maps for location services",
      "Implementing secure ticketing system",
      "Optimizing for mobile experiences"
    ],
    repoUrl: "https://github.com/Mandalorian7773/Ibento.co"
  }
];