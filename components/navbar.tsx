"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  {
    href: "/about",
    name: "ABOUT",
  },
  {
    href: "/",
    name: "REEL",
  },
  {
    href: "/contact",
    name: "CONTACT",
  },
];

export default function Navbar() {
  const [style, setStyle] = useState({ left: 0, width: 0 });
  const ref = useRef<Record<string, HTMLElement | null>>({});
  const pathname = usePathname();

  useEffect(() => {
    const element = ref.current[pathname];
    if (element) {
      setStyle({
        left: element.offsetLeft,
        width: element.clientWidth,
      });
    }
  }, [pathname]);

  return (
    <nav className="absolute bottom-10 left-1/2 -translate-x-1/2 flew-row mx-auto flex h-12 rounded-3xl border border-neutral-800/50 bg-neutral-800/40 px-2 backdrop-blur-xl">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
        style={style}
      >
        <span className="h-full w-full rounded-3xl bg-neutral-200/30" />
      </span>

      {tabs.map(({ href, name }) => (
        <Link
          className="my-auto select-none rounded-full px-4 text-center text-white transition-colors duration-200 text-xs font-medium"
          href={href}
          key={href}
          prefetch={false}
          ref={(element) => {
            ref.current[href] = element;
          }}
          title={name}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
