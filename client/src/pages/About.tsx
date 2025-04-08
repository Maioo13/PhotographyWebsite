import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="container mx-auto px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-3xl font-condensed font-bold mb-8 uppercase tracking-wider text-[#E0E0E0]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About the Photographer
        </motion.h2>
        
        <div className="md:flex gap-10 items-start">
          <motion.div 
            className="md:w-1/3 mb-8 md:mb-0"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Photographer portrait" 
              className="w-full rounded-md mb-4" 
            />
            <h3 className="text-xl font-condensed font-bold text-light mb-1">ALEX MORGAN</h3>
            <p className="text-sm text-[#E0E0E0] mb-3">Visual Storyteller</p>
            <div className="flex gap-3">
              <a href="#" className="text-light hover:text-[#E0E0E0] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-light hover:text-[#E0E0E0] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-light hover:text-[#E0E0E0] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-light opacity-90 mb-4 leading-relaxed">
              I'm a visual storyteller with over 10 years of experience capturing authentic moments across more than 30 countries. My work focuses on the intersection of portraiture, culture, and human connection.
            </p>
            
            <p className="text-light opacity-90 mb-4 leading-relaxed">
              My approach combines documentary-style observation with carefully crafted lighting to create images that feel both timeless and intimate. I'm drawn to stories that explore identity, tradition, and the human experience in our rapidly changing world.
            </p>
            
            <p className="text-light opacity-90 mb-8 leading-relaxed">
              When I'm not on assignment, I lead photography workshops and speak about visual storytelling at universities and cultural institutions around the world.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-condensed font-bold text-[#E0E0E0] mb-2 uppercase">Clients</h4>
                <ul className="space-y-1 opacity-90">
                  <li>National Geographic</li>
                  <li>The New York Times</li>
                  <li>Adobe</li>
                  <li>Time Magazine</li>
                  <li>Canon</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-condensed font-bold text-[#E0E0E0] mb-2 uppercase">Awards</h4>
                <ul className="space-y-1 opacity-90">
                  <li>International Photography Awards</li>
                  <li>Sony World Photography</li>
                  <li>PDN Photo Annual</li>
                  <li>Communication Arts</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
