import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechnologyList = () => {
  const technologies = [
    {
      id: 1,
      name: "HTML",
      imageUrl:
        "https://cdn.sanity.io/images/rv2syqkj/production/adebf5a6b4a5616263cd8ab0f55c6d5ea714a01b-512x512.svg",
    },
    {
      id: 2,
      name: "JS",
      imageUrl:
        "https://cdn.sanity.io/images/rv2syqkj/production/9c4bd1873a47786980792e08fe8163518d16f3c0-256x256.svg",
    },
    {
      id: 3,
      name: "CSS",
      imageUrl:
        "https://cdn.sanity.io/images/rv2syqkj/production/30cf41fa4a5085b6a0af457e1defc80868e7d1c8-512x512.svg",
    },
    {
      id: 4,
      name: "Python",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    },
    {
      id: 5,
      name: "React Js",
      imageUrl:
        "https://cdn.sanity.io/images/rv2syqkj/production/16b675b137db34bfbb6f5421261d4178e6ea3090-256x228.svg",
    },
    {
      id: 6,
      name: "Flutter",
      imageUrl:
        "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
    },
    {
      id: 7,
      name: "Firebase",
      imageUrl:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png",
    },
    {
      id: 8,
      name: "Google Cloud",
      imageUrl:
        "https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png",
    },
  ];

  // This function will be used to generate the variants for the animation
  const variants = {
    visible: (index: number) => ({
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // Delay each item based on its index
      },
    }),
    hidden: {
      opacity: 0,
      translateY: -50,
    },
  };

  return (
    <ul className=" grid grid-cols-2 gap-x-5 gap-y-7 text-xs max-w-3xl mx-auto px-4 sm:grid-cols-4 ">
      {technologies.map((tech, index) => {
        // Use useInView hook to detect when the element is in the viewport
        const [ref, inView] = useInView({
          triggerOnce: true, // Only trigger this once
          threshold: 0.1, // Element is considered in view when 10% of it is visible
        });

        return (
          <motion.li
            ref={ref} // Set the ref to the motion component
            key={tech.id}
            className="p-2 py-4 w-32 h-32  mx-auto flex flex-col items-center ring-1 ring-zinc-100 rounded-lg "
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Animate based on inView status
            variants={variants} // Use the variants for animation
            custom={index} // Pass the index for delay calculation
          >
            <div className="relative w-10 h-10">
              <img
                alt={tech.name}
                loading="lazy"
                decoding="async"
                style={{ position: "absolute", inset: 0, color: "transparent" }}
                src={tech.imageUrl}
              />
            </div>
            <p className="mt-4 font-medium text-white">{tech.name}</p>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default TechnologyList;
