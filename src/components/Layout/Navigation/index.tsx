import React, { useEffect, useState } from 'react';

import { useScrollDirection } from '@root/modules/hooks';

function Navigation() {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const scrollDirection = useScrollDirection();

  console.log('scrollDirection ->', scrollDirection);

  function handleClick() {
    setOpen((prevState) => !prevState);
  }
  function handleScroll() {
    if (window.scrollY <= 100) setIsScroll(false);
    else setIsScroll(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold"
                >
                  Home
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
                >
                  Services
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
                >
                  About
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={
          'fixed left-0 w-full h-20 z-30 transition-al ' +
          `${isScroll ? 'bg-white shadow-1' : 'bg-transparent shadow-0'} ` +
          `${scrollDirection === 'down' ? '-top-full' : 'top-0'}`
        }
      />

      <div
        className={
          'mobile-menu w-full fixed inset-y-0 left-0 z-40 transition-all ' +
          `pointer-events-none ${
            open
              ? 'ml-0 backdrop-blur-nav-light bg-nav-light backdrop-saturate-nav-light'
              : '-ml-75% bg-transparent'
          }`
        }
      >
        <div
          className={
            'relative w-full h-full transition-all pointer-events-auto ' +
            `pointer-events-none`
          }
        >
          <div className="w-full h-full flex">
            <div className={`relative w-3/4 h-full bg-white transition-all `}>
              <ul className="">
                <li className="active">
                  <a
                    href="#"
                    className="block px-6 py-4 text-base text-white bg-azzurra-gold font-bold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-base px-6 py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-base px-6 py-4 hover:bg-purple-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-base px-6 py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div
              className={
                'relative w-1/4 p-6 h-fit transition-all ' +
                `${scrollDirection === 'down' ? '-top-full' : 'top-0'}`
              }
              onClick={handleClick}
            >
              <div className="cursor-pointer">
                <span
                  className={
                    'block w-10 h-1 relative rounded transition-all ' +
                    `${open ? `mb-0 top-2 -rotate-45` : 'mb-2 top-0'} ` +
                    `${isScroll || !open ? 'bg-azzurra-gold-100' : 'bg-white'}`
                  }
                />
                <span
                  className={
                    'block w-8 h-1 rounded mb-2 transition-all ' +
                    `${open ? 'w-0 opacity-0' : 'w-8 opacity-100'} ` +
                    `${isScroll || !open ? 'bg-azzurra-gold-100' : 'bg-white'}`
                  }
                />
                <span
                  className={
                    'block w-10 h-1 relative rounded transition-all ' +
                    `${
                      open
                        ? 'mb-0 -top-2 rotate-45 bg-azzurra-gold-100 '
                        : 'mb-2 rotate-0  '
                    }` +
                    `${isScroll || !open ? 'bg-azzurra-gold-100' : 'bg-white'}`
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*md:hidden*/}
      <div className="hidden items-center">
        <button className="outline-none menu-button">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 00 24 24"
            stroke="currentColor"
          >
            <path d="m4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Navigation;
