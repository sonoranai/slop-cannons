"use client";

import { useState } from "react";

const links = [
  {
    href: "https://www.linkedin.com/in/jasonneill/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1em] h-[1em]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "mailto:jason@sonoran.capital",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[1.1em] h-[1.1em]">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    href: "https://sonoran.capital",
    label: "Sonoran Capital",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[1em] h-[1em]">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function IconLinks() {
  return (
    <>
      {links.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="hover:opacity-70 transition-opacity duration-200"
          style={{ color: "rgba(140, 120, 180, 0.5)" }}
        >
          {icon}
        </a>
      ))}
    </>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-[1em] right-[1em] z-10">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="hover:opacity-70 transition-opacity duration-200"
          style={{ color: "rgba(140, 120, 180, 0.5)" }}
        >
          {/* Empty triangle pointing down — V shape without top edge */}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[1.2em] h-[1.2em]">
            <path d="M3 5l5 6 5-6" />
          </svg>
        </button>
      ) : (
        <div
          className="flex items-center gap-[0.8em] p-[0.5em] rounded-md"
          style={{ backgroundColor: "#FAF9F6", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
        >
          <IconLinks />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="hover:opacity-70 transition-opacity duration-200 ml-[0.3em]"
            style={{ color: "rgba(140, 120, 180, 0.5)" }}
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[1em] h-[1em]">
              <path d="M4 12L12 4M4 4l8 8" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export function SocialLinks({ position }: { position: "top" | "bottom" }) {
  if (position === "top") {
    return (
      <>
        {/* Desktop: fixed icons */}
        <nav aria-label="Contact" className="hidden md:flex fixed top-[2em] right-[2em] z-10 gap-[1em]">
          <IconLinks />
        </nav>
        {/* Mobile: caret toggle */}
        <MobileMenu />
      </>
    );
  }

  return (
    <nav aria-label="Contact" className="flex justify-center gap-[1.5em] pt-[4em] pb-[2em]">
      <IconLinks />
    </nav>
  );
}
