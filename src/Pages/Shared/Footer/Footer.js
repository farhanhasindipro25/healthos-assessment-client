import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer container mx-auto p-10 bg-slate-50 text-base-content mt-32">
        <div>
          <p className="text-slate-900 font-semibold">STRING SYMPHONY</p>
        </div>
        <div>
          <span className="footer-title text-slate-900 font-semibold">
            Services
          </span>
          <Link className="link link-hover text-slate-900 font-semibold">
            Branding
          </Link>
          <Link className="link link-hover text-slate-900 font-semibold">
            Design
          </Link>
          <Link className="link link-hover text-slate-900 font-semibold">
            Marketing
          </Link>
          <Link className="link link-hover text-slate-900 font-semibold">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title text-slate-900 font-semibold">
            Company
          </span>
          <Link className="link link-hover text-slate-900 font-semibold">
            About us
          </Link>
          <Link className="link link-hover text-slate-900 font-semibold">
            Contact
          </Link>
          <Link className="link link-hover text-slate-900 font-semibold">
            Jobs
          </Link>
          <Link className="link link-hover text-slate-900 font-semibold">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title text-slate-900 font-semibold">
            Legal
          </span>
          <Link className="link link-hover text-slate-900 font-semibold">
            Terms of use
          </Link>
          <Link className="link link-hover text-slate-900 font-semibold">
            Privacy policy
          </Link>
          <Link className="link link-hover text-slate-900 font-semibold">
            Cookie policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
