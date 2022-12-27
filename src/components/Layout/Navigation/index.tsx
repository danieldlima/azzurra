import React, { useEffect, useState } from 'react';

function Navigation() {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  function handleClick() {
    setOpen((prevState) => !prevState);
  }
  function handleScroll() {
    if (window.scrollY <= 100) setIsScroll(false);
    else setIsScroll(true);
  }

  function handleResize() {
    if (open) setOpen(false);
    console.log('resize');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className={
          'md:hidden mobile-menu w-full fixed inset-y-0 left-0 z-40 transition-all ' +
          `pointer-events-none`
        }
      >
        <div
          className={
            'relative w-full h-full transition-all pointer-events-auto ' +
            `pointer-events-none`
          }
        >
          <div
            className={
              'w-full h-14 transition-all flex items-center backdrop-blur-nav-light ' +
              'absolute top-0 left-0 w-full z-10 ' +
              `${
                isScroll || open
                  ? 'bg-azzurra-navy-blue backdrop-saturate-nav-light ' +
                    'backdrop-blur-nav-light border-b border-b-azzurra-opaque-gold/25'
                  : 'bg-azzurra-navy-blue/0 backdrop-blur-0'
              }`
            }
            onClick={handleClick}
          >
            <div className="relative left-6 w-10 h-11 cursor-pointer">
              <span
                className={
                  'absolute block w-full h-0.5 rounded transition-all ' +
                  'bg-azzurra-gold-100 ' +
                  `${open ? `top-2/4 -translate-y-2/4 -rotate-45` : 'top-2.5'} `
                }
              />

              <span
                className={
                  'absolute block w-8 top-2/4 -translate-y-2/4 h-0.5 rounded mb-2 transition-all ' +
                  'bg-azzurra-gold-100 ' +
                  `${open ? 'w-0 opacity-0' : 'w-8 opacity-100'} `
                }
              />

              <span
                className={
                  'absolute block w-full h-0.5 rounded transition-all ' +
                  `${
                    open
                      ? 'top-2/4 -translate-y-2/4 rotate-45 bg-azzurra-gold-100 '
                      : 'bottom-2.5 rotate-0  '
                  }` +
                  `${isScroll || !open ? 'bg-azzurra-gold-100' : 'bg-white'}`
                }
              />
            </div>
          </div>

          <div
            className={
              ' overflow-hidden transition-all duration-300 flex items-center justify-center ' +
              `${
                open
                  ? 'h-full bg-azzurra-navy-blue/95 backdrop-blur-nav-light'
                  : 'h-0'
              } `
            }
          >
            <ul className="w-5/6 text-center text-white font-bold text-2xl px-4">
              <li className="active">
                <a href="#" className="block px-6 py-4">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-4 transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-4 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-4 transition duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
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
