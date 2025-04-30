import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export default function Socials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/mateen-afshari",
      icon: Github,
      color: "group-hover:text-[#333]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mateen-afshari-90598022b/",
      icon: Linkedin,
      color: "group-hover:text-[#0077b5]",
    },
    {
      name: "Email",
      href: "mailto:ma8dc@virgina.edu",
      icon: Mail,
      color: "group-hover:text-[#ea4335]",
    },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1dgSB1Fw26O2j5ZLHFE6ri83aii2NCOXu/view?usp=sharing",
      icon: FileText,
      color: "group-hover:text-[#4285f4]",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 ">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Connect With Me
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              Find me on these platforms and get in touch
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                className="relative"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-4 h-full w-full"
                >
                  <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-blue-500 group-hover:bg-white transition-all duration-300 ease-out">
                    <social.icon
                      className={`w-7 h-7 md:w-8 md:h-8 text-zinc-400 transition-all duration-300 ${social.color}`}
                    />

                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="hoverBackground"
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>

                  <span className="mt-3 text-sm md:text-base font-medium text-zinc-300 group-hover:text-blue-400 transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 w-full max-w-md">
            <p className="text-zinc-500 text-sm">
              Let's collaborate on something amazing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
