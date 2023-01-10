import React, { useEffect, useState } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

import { useLockedBody } from 'usehooks-ts';

import { useScrollDirection } from '@root/modules/hooks';
import { addClassName } from '@root/modules/utils';

import AzzurraBrand from '@components/Icons/AzzurraBrand';
import Container from '@components/Layout/Container';
import NavItem from '@components/Layout/Navigation/components/NavItem';

function Navigation() {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const scrollDirection = useScrollDirection();

  function handleClick() {
    setOpen((prevState) => !prevState);
  }

  function handleScroll() {
    if (window.scrollY <= 50) setIsScroll(false);
    else setIsScroll(true);
  }

  function handleResize() {
    if (open) setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

    // eslint-disable-next-line
  }, []);

  useLockedBody(open, 'body');

  function handleBtnToTop(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();

    if (open) setOpen(false);

    scroll.scrollToTop();
  }

  return (
    <>
      <nav
        className={
          'fixed z-50 w-full bg-top bg-cover px-6 ' +
          `${isScroll ? 'bg-hero-banner shadow-1' : 'bg-transparent shadow-0'}`
        }
      >
        <div className={isScroll ? 'backdrop-blur-xl' : 'backdrop-blur-0'}>
          <Container>
            <div className="hidden md:flex h-14">
              <Link
                spy
                smooth
                to="hero-banner"
                activeClass="group active"
                className={
                  'relative h-full w-7 mr-5 opacity-0 cursor-pointer ' +
                  `${
                    isScroll
                      ? 'animate-[entrance-opacity_1.5ms_ease_0s_1_normal_forwards] text-white ' +
                        'left-0'
                      : '-left-12 text-white'
                  }`
                }
              >
                <span className={`group-[.active]:text-azzurra-opaque-gold`}>
                  <AzzurraBrand className={'w-full h-full ml-0'} iconOnly />
                </span>
              </Link>

              <div
                className={
                  'relative md:flex items-center space-x-1 uppercase sm:px-4 xl:px-0 transition-all ' +
                  `${!isScroll ? '-left-12' : 'left-0'}`
                }
              >
                <NavItem to="about" label="A AZZURRA capital" />

                <NavItem to="team" label="Nosso time" />

                <NavItem to="investment" label="Política de investimento" />

                <NavItem
                  to="investment-policy"
                  label="Blog azzurra"
                  className={'hidden'}
                />

                <NavItem to="contact" label="Contato" />
              </div>
            </div>
          </Container>
        </div>
      </nav>

      <nav
        className={
          'md:hidden mobile-menu w-full fixed inset-y-0 left-0 z-40 transition-all ' +
          `pointer-events-none`
        }
      >
        <div
          className={
            'relative w-full transition-all pointer-events-auto pointer-events-none ' +
            `${open ? 'h-full' : 'h-auto'}`
          }
        >
          <div
            className={
              'w-full h-14 transition-all flex items-center absolute left-0 w-full z-10 ' +
              addClassName(
                isScroll && !open
                  ? 'bg-azzurra-navy-blue backdrop-saturate-nav-light backdrop-blur-nav-light'
                  : 'bg-azzurra-navy-blue/0 backdrop-blur-0'
              ) +
              addClassName(scrollDirection === 'down' ? '-top-16' : 'top-0')
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

            <div
              onClick={handleBtnToTop}
              className={
                'absolute w-9 h-full py-2.5 text-azzurra-gold-100 transition-all' +
                `${addClassName(!isScroll ? '-right-full' : 'right-6')}`
              }
            >
              <AzzurraBrand className={'w-full h-full'} iconOnly />
            </div>
          </div>

          <div
            className={
              'overflow-hidden transition-all duration-300 flex items-center justify-center ' +
              `${
                open
                  ? 'h-full bg-azzurra-navy-blue/95 backdrop-blur-nav-light'
                  : 'h-0'
              } `
            }
          >
            <ul
              className={
                'w-5/6 text-center text-white font-bold text-2xl px-4 uppercase text-center ' +
                `${open ? 'opacity-100' : 'opacity-0'} `
              }
            >
              <li className="flex justify-center items-center">
                <NavItem
                  to="about"
                  label="A AZZURRA capital"
                  onClick={handleClick}
                />
              </li>

              <li className="flex justify-center items-center">
                <NavItem to="team" label="Nosso time" onClick={handleClick} />
              </li>

              <li className="flex justify-center items-center">
                <NavItem
                  to="investment"
                  label="Política de investimento"
                  onClick={handleClick}
                />
              </li>

              <li className="flex justify-center items-center">
                <NavItem
                  to="investment-policy"
                  label="Blog azzurra"
                  className={'hidden'}
                  onClick={handleClick}
                />
              </li>

              <li className="flex justify-center items-center">
                <NavItem to="contact" label="Contato" onClick={handleClick} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
