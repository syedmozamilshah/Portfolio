import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import CodeBlock from '../components/CodeBlock';

const Contact = () => {
  const codeSnippet = {
    code: `const connection = new Channel({
  engineer: "Syed Mozamil Shah",
  role: "Full Stack AI Engineer",
  email: "syedmozamilshah99@gmail.com",
  phone: "+92-3035149415",
  location: "Islamabad, Pakistan",
  status: "Actively Open to Opportunities"
});

connection.ping();`,
    output: "📬 Connection channel ready — Let's build something transformative together!"
  };

  const contactChannels = [
    {
      title: "Email",
      value: "syedmozamilshah99@gmail.com",
      href: "mailto:syedmozamilshah99@gmail.com",
      icon: <FaEnvelope className="text-2xl" />,
      accent: "#00FFAB",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/syed-mozamil-shah",
      href: "https://www.linkedin.com/in/syed-mozamil-shah-873a26230",
      icon: <FaLinkedin className="text-2xl" />,
      accent: "#00B2FF",
    },
    {
      title: "GitHub",
      value: "github.com/syedmozamilshah",
      href: "https://github.com/syedmozamilshah",
      icon: <FaGithub className="text-2xl" />,
      accent: "#9B59B6",
    },
    {
      title: "Phone / WhatsApp",
      value: "+92-3035149415",
      href: "tel:+923035149415",
      icon: <FaPhoneAlt className="text-2xl" />,
      accent: "#FFD700",
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-neon-blue mb-3">
            &lt; Initiate Contact /&gt;
          </p>
          <h1 className="text-5xl md:text-7xl font-black py-2 leading-tight tracking-tight">
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #00FFAB 0%, #00B2FF 50%, #9B59B6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-300 font-mono text-sm md:text-base max-w-2xl mx-auto mt-2">
            Whether you have a compelling project, an engineering role, or an AI concept to brainstorm — my inbox is always open.
          </p>
        </motion.div>

        {/* Code Block */}
        <motion.div 
          className="max-w-3xl mx-auto mb-14 w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold font-mono text-neon-green">connect.js</h3>
          </div>
          <CodeBlock code={codeSnippet.code} output={codeSnippet.output} />
        </motion.div>

        {/* 3D Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {contactChannels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl p-6 md:p-8 border flex items-center gap-5 transition-all duration-300 group"
              style={{
                background: "linear-gradient(145deg, rgba(16, 26, 21, 0.75) 0%, rgba(13, 19, 16, 0.85) 100%)",
                borderColor: `${channel.accent}35`,
                boxShadow: `0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${channel.accent}10`,
                backdropFilter: "blur(14px)",
              }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${channel.accent}15`,
                  border: `1px solid ${channel.accent}40`,
                  color: channel.accent,
                }}
              >
                {channel.icon}
              </div>

              <div className="overflow-hidden">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1">
                  {channel.title}
                </span>
                <p 
                  className="text-white font-mono font-semibold text-sm md:text-base truncate transition-colors group-hover:text-neon-green"
                >
                  {channel.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center rounded-2xl p-6 border border-white/5 bg-white/[0.02]"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 font-mono text-sm">
            <FaMapMarkerAlt className="text-neon-green" />
            <span>Based in Islamabad, Pakistan • Available for Remote & On-Site Global Roles</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;