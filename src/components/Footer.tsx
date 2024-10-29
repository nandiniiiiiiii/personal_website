// Footer.tsx
"use client";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-gray-200 py-10 w-full mt-auto">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Nandini Negi. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://twitter.com/nandini05341089"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Twitter"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://linkedin.com/in/nandini-negi-b9393a234"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/nandiniiiiiiii"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          color: #fff;
          transition: transform 0.3s, color 0.3s;
        }
        .social-icon:hover {
          transform: translateY(-10px); /* Move icon up */
          color: #f0a500; /* Change color on hover */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
