"use client";

import { motion } from "framer-motion";

export const Footer = ({ locale }: { locale?: string }) => {
  return (
    <footer className="bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl mb-6 block font-georgia text-brown">
              NEXUS<span className="text-wine">CLINIC</span>
            </span>
            <p className="max-w-md mb-6 text-taupe">
              Advanced aesthetic and medical weight loss clinic in Kuala Lumpur.
              Where science meets artistry for your natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Treatments", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-block text-taupe hover:text-wine transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">Contact</h4>
            <ul className="space-y-3 text-taupe">
              <li>Wisma UOA II, KL</li>
              <li>016-702 5699</li>
              <li>info@nexusclinic.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-taupe/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-taupe">
            © 2026 Nexus Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-taupe hover:text-wine transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
