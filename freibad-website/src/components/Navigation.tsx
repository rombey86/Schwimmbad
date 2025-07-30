'use client';

import { useState } from 'react';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { navigation } from '@/data/config';
import { NavigationItem } from '@/types';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    if (openDropdown && dropdownRef.current) {
      const firstLink = dropdownRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [openDropdown]);

  const NavLink = ({ item }: { item: NavigationItem }) => {
    if (item.children) {
      return (
        <div className="relative group">
          <button
            onClick={() => toggleDropdown(item.label)}
            className="flex items-center px-3 py-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            aria-expanded={openDropdown === item.label}
            aria-haspopup="true"
          >
            {item.label}
            <svg
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                openDropdown === item.label ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Desktop Dropdown */}
          <div
            ref={dropdownRef}
            className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ${
              openDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
            } hidden md:block`}
            tabIndex={-1}
          >
            <div className="py-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setOpenDropdown(null)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className={`md:hidden ${openDropdown === item.label ? 'block' : 'hidden'}`}>
            <div className="pl-4 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40" aria-label="Hauptmenü">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
{/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  {/* Bild-Logo */}
  <div className="w-8 h-8 relative">
    <Image
      src="/images/I-Love-Freibad-Niederkruechten-150px.png"
      alt="Logo Rettet das Freibad Niederkrüchten"
      fill
      style={{ objectFit: "contain" }}
      sizes="32px"
      priority
    />
  </div>

  {/* Text */}
  <span className="text-xl font-bold text-gray-900">Rettet das Freibad Niederkrüchten</span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            aria-expanded={isOpen}
            aria-label="Hauptmenü"
            tabIndex={0}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}