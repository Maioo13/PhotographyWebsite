import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-[#1A1A1A] py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.h2 
            className="text-3xl font-condensed font-bold mb-2 uppercase tracking-wider text-[#E0E0E0]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-light opacity-80 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            For inquiries about commissions, collaborations, or prints, please reach out using the form below.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
