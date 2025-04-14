import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const contacts = [
  {
    icon: <FaLinkedin className="text-3xl text-white" />,
    label: 'LinkedIn',
    action: () => window.open('https://www.linkedin.com/in/ashish-mittal-184b61313/', '_blank'),
    color: 'bg-gradient-to-r from-[#0066b1] to-[#005a8d]'  
  },
  {
    icon: <FaGithub className="text-3xl text-white" />,
    label: 'GitHub',
    action: () => window.open('https://github.com/aashish-mitt96', '_blank'),
    color: 'bg-gradient-to-r from-gray-700 to-gray-900'
  },
  {
    icon: <FaInstagram className="text-3xl text-white" />,
    label: 'Instagram',
    action: () => window.open('https://www.instagram.com/ashish_mitt1196/', '_blank'),
    color: 'bg-gradient-to-r from-[#a87bb7] to-[#e45f5d]' 
  }
];

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-10">
          Let's Connect
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((item, index) => (
            <div
              key={index}
              onClick={item.action}
              className={`cursor-pointer ${item.color} rounded-xl px-6 py-4 flex items-center justify-center gap-3 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300 hover:opacity-90 hover:translate-y-[-5px]`}
            >
              {item.icon}
              <span className="text-lg font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
