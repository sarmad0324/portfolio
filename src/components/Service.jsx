import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faAndroid, faApple, faJs, faHtml5, faCss3Alt, faWordpress } from '@fortawesome/free-brands-svg-icons';
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const services = [
  {
    title: 'Web Development',
    skills: [
      { icon: faJs, name: 'JavaScript', color: 'text-[#F7DF1E]' }, 
      { icon: faHtml5, name: 'HTML', color: 'text-[#E44D26]' }, 
      { icon: faCss3Alt, name: 'CSS', color: 'text-[#1572B6]' }, 
      { icon: faReact, name: 'React', color: 'text-[#61DBFB]' }, 
      { icon: faGithub, name: 'GitHub', color: 'text-[#181717]' }, 
      { icon: faWordpress, name: 'WordPress', color: 'text-[#21759B]' }, 
    ],
  },
  {
    title: 'App Development',
    skills: [
      { icon: faAndroid, name: 'Android', color: 'text-[#A4C639]' }, 
      { icon: faApple, name: 'iOS', color: 'text-[#999999]' }, 
      { icon: faReact, name: 'React Native', color: 'text-[#61DBFB]' }, 
    ],
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set AOS animation duration
  }, []);

  const iconStyle = {
    width: '30px',
    height: '30px',
  };

  return (
    <section id="services" className="overflow-hidden">
      <div className="container mx-auto text-center py-16">
        <h2 className="text-3xl text-center py-16">My Services</h2>
        <div className="flex flex-wrap justify-center gap-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-btnHover rounded-lg p-6 pr-20 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              data-aos="fade-up" // Apply AOS fade-up animation
              style={{ animationDelay: `${index * 0.2}s` }} // Optional: Delay for staggered effect
            >
              <h3 className="text-2xl font-semibold text-textSecondary mb-4">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-lg hover:text-btnColor transition duration-200"
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className={`mr-2 text-lg ${skill.color}`}
                      style={iconStyle}
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-4/5 m-auto border-textSecondary" />
    </section>
  );
};

export default Service;