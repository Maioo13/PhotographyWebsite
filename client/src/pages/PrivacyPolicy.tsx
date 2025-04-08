import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto bg-[#1A1A1A] p-8 rounded-lg">
        <motion.h1 
          className="text-3xl font-condensed font-bold mb-8 uppercase tracking-wider text-[#E0E0E0]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        
        <div className="prose prose-invert text-light max-w-none">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-sm opacity-70 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">1. Introduction</h2>
            <p className="mb-6">
              Welcome to LENSCRAFT ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our photography portfolio website and use our services. We respect your privacy and are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679.
            </p>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">2. Data Controller</h2>
            <p className="mb-6">
              For the purposes of applicable data protection laws, LENSCRAFT is the data controller of your personal information. If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@lenscraft.com.
            </p>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">3. Information We Collect</h2>
            <p className="mb-4">We may collect several types of information from and about users of our website:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2"><strong>Personal Data:</strong> When you submit information through our contact form, we collect personal data such as your name and email address.</li>
              <li className="mb-2"><strong>Usage Data:</strong> We automatically collect information about your browser type, operating system, access time, and pages viewed.</li>
              <li className="mb-2"><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</li>
            </ul>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">4. Legal Basis for Processing</h2>
            <p className="mb-4">We process your personal data on the following legal bases:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2"><strong>Consent:</strong> When you explicitly provide consent for us to process your personal data for specific purposes.</li>
              <li className="mb-2"><strong>Legitimate Interest:</strong> To operate our business and provide our services to you.</li>
              <li className="mb-2"><strong>Contract Performance:</strong> To fulfill our contractual obligations to you.</li>
              <li className="mb-2"><strong>Legal Obligation:</strong> To comply with legal requirements.</li>
            </ul>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">5. How We Use Your Information</h2>
            <p className="mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">To respond to your inquiries and provide customer service.</li>
              <li className="mb-2">To send you information about our services and promotional materials.</li>
              <li className="mb-2">To improve our website and services.</li>
              <li className="mb-2">To protect against fraudulent, unauthorized, or illegal activity.</li>
            </ul>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">6. Data Retention</h2>
            <p className="mb-6">
              We retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, and the purposes for which we process it.
            </p>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">7. Your Data Protection Rights</h2>
            <p className="mb-4">Under the GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2"><strong>Right to Access:</strong> You have the right to request information about your personal data that we process.</li>
              <li className="mb-2"><strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate personal data.</li>
              <li className="mb-2"><strong>Right to Erasure:</strong> You have the right to request that we delete your personal data in certain circumstances.</li>
              <li className="mb-2"><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances.</li>
              <li className="mb-2"><strong>Right to Data Portability:</strong> You have the right to request a copy of your personal data in a structured, machine-readable format.</li>
              <li className="mb-2"><strong>Right to Object:</strong> You have the right to object to the processing of your personal data in certain circumstances.</li>
            </ul>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">8. International Data Transfers</h2>
            <p className="mb-6">
              We may transfer your personal data to countries outside the European Economic Area (EEA). Whenever we transfer your personal data outside the EEA, we ensure a similar degree of protection is afforded to it by implementing appropriate safeguards and ensuring at least one of the following transfer mechanisms applies:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">EU-US Privacy Shield (where applicable).</li>
              <li className="mb-2">Standard Contractual Clauses approved by the European Commission.</li>
              <li className="mb-2">Binding Corporate Rules for transfers among our corporate group.</li>
            </ul>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">9. Data Security</h2>
            <p className="mb-6">
              We have implemented appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">10. Third-Party Links</h2>
            <p className="mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read the privacy policy of every website you visit.
            </p>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">11. Children's Privacy</h2>
            <p className="mb-6">
              Our website is not intended for individuals under the age of 16. We do not knowingly collect personal data from children under 16. If you are a parent or guardian and believe that your child has provided us with personal data, please contact us immediately.
            </p>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">12. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">13. Contact Us</h2>
            <p className="mb-6">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <address className="not-italic mb-6">
              <strong>LENSCRAFT Photography</strong><br />
              Email: privacy@lenscraft.com<br />
              Address: 123 Photography Street, Creative District, 10001
            </address>

            <h2 className="text-xl font-condensed font-semibold mb-4 text-[#E0E0E0]">14. Complaints</h2>
            <p className="mb-6">
              If you are not satisfied with our response to your privacy concerns, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacyPolicy;