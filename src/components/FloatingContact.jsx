import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Facebook } from 'lucide-react';

export default function FloatingContact() {
  const socialLinks = [
    { icon: <Phone className="w-5 h-5" />, href: "tel:+213559299662", color: "bg-harmony-900" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/213559299662", color: "bg-green-500" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", color: "bg-blue-600" }
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-4">
      {socialLinks.map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
          whileHover={{ x: -10, scale: 1.1 }}
          className={`w-14 h-14 ${link.color} text-white rounded-full flex items-center justify-center shadow-luxury border border-white/10 backdrop-blur-lg`}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
