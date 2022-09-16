import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { data } from '../data.js';
import { useEffect, useRef } from 'react';

export default function Home() {
  const menuRef = useRef(null);
  const navToggle = useRef(null);
  const navClose = useRef(null);

  useEffect(() => {
    if (navToggle) {
      navToggle.current.addEventListener('click', () => {
        menuRef.current.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.current.addEventListener('click', () => {
        menuRef.current.classList.remove('show-menu');
      });
    }
  }, []);

  return (
    <>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {/*=============== Dropdown Navbar ===============*/}
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css'
      />
      <link rel='icon' href='/favicon.ico' />
      {/*=============== CSS ===============*/}
      <link rel='stylesheet' href='../styles/styles.css' />
      <title>Cosplay World JFX</title>
      {/*==================== HEADER ====================*/}
      <header className='header' id='header'>
        <nav className='nav container'>
          <a href='#' className='nav__logo'>
            <img src='images/konoha.png' alt='' className='nav__logo-img' />
            Cosplay World JFX
          </a>
          <div className='nav__menu' id='nav-menu' ref={menuRef}>
            <ul className='nav__list'>
              <li className='nav__item'>
                <Link href='/'>
                  <a className='nav__link active-link'>Home</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href={'/favorite'}>
                  <a className='nav__link'>Favorite</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href={'/about'}>
                  <a className='nav__link'>About Us</a>
                </Link>
              </li>
              <a href='#' className='button button--ghost'>
                Contact US
              </a>
            </ul>
            <div className='nav__close' id='nav-close' ref={navClose}>
              <i className='bx bx-x' />
            </div>
            <img src='images/14.png' alt='' className='nav__img' />
          </div>
          <div className='nav__toggle' id='nav-toggle' ref={navToggle}>
            <i className='bx bx-grid-alt' />
          </div>
        </nav>
      </header>
      <main className='main'>
        {/*==================== ABOUT ====================*/}
        <section className='section about' id='about'>
          <div className='about__container container grid'>
            <div className='about__data'>
              <h2 className='section__title about__title'>
                Cosplay World JFX dikembangkan <br /> oleh Intern DDB
              </h2>
              <p className='about__description'>
                Merupakan forum pagi para Cosplayer Indo. Dirancang untuk
                memenuhi Event Cosplay Besar baik di Indonesia maupun di dunia
                Internasional
              </p>
              <Link href={'/favorite'}>
                <a className='button'>Pendaftaran</a>
              </Link>
            </div>
            <Image
              src='/images/warior.png'
              className={'about__img'}
              layout='responsive'
              width={140}
              height={170}
            />
          </div>
        </section>
        {/*==================== CATEGORY ====================*/}
        <section className='section category'>
          <h2 className='section__title'>Daftar Layanan JFX</h2>
          <div className='category__container container grid'>
            <div className='category__data'>
              <Link href={'/favorite'}>
                <img src='/images/2.png' alt='' className='category__img' />
              </Link>

              <h3 className='category__title'>Basic</h3>
              <p className='category__description'>Cosplay Newbies</p>
            </div>
            <div className='category__data'>
              <Link href={'/favorite'}>
                <img src='/images/26.png' alt='' className='category__img' />
              </Link>

              <h3 className='category__title'>Advanced</h3>
              <p className='category__description'>Cosplay Lovers</p>
            </div>
            <div className='category__data'>
              <Link href={'/favorite'}>
                <img src='/images/51.png' alt='' className='category__img' />
              </Link>

              <h3 className='category__title'>VVIP</h3>
              <p className='category__description'>Cosplay Enthusiasts</p>
            </div>
          </div>
        </section>
        {/*==================== OUR NEWSLETTER ====================*/}
        <section className='section newsletter'>
          <div className='newsletter__container container'>
            <h2 className='section__title'>Hubungi Kami</h2>
            <p className='newsletter__description'>
              Untuk mendapatkan Informasi dan Promosi
            </p>
            <form action='' className='newsletter__form'>
              <input
                type='text'
                placeholder='Masukkan Email Anda'
                className='newsletter__input'
              />
              <button className='button'>Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      {/*==================== FOOTER ====================*/}
      <footer className='footer section'>
        <div className='footer__container container grid'>
          <div className='footer__content'>
            <a href='#' className='footer__logo'>
              <img
                src='images/konoha.png'
                alt=''
                className='footer__logo-img'
              />
              Cosplay World JFX
            </a>
            <p className='footer__description'>
              Penyedia layanan cosplay terbaik di Indonesia
            </p>
            <div className='footer__social'>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'
                className='footer__social-link'
              >
                <i className='bx bxl-facebook' />
              </a>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'
                className='footer__social-link'
              >
                <i className='bx bxl-instagram-alt' />
              </a>
              <a
                href='https://twitter.com/'
                target='_blank'
                rel='noreferrer'
                className='footer__social-link'
              >
                <i className='bx bxl-twitter' />
              </a>
            </div>
          </div>
          <div className='footer__content'>
            <h3 className='footer__title'>About</h3>
            <ul className='footer__links'>
              <li>
                <a href='#' className='footer__link'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='footer__link'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='footer__link'>
                  News
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__content'>
            <h3 className='footer__title'>Pelayanan</h3>
            <ul className='footer__links'>
              <li>
                <a href='#' className='footer__link'>
                  Kostum
                </a>
              </li>
              <li>
                <a href='#' className='footer__link'>
                  Pelatihan
                </a>
              </li>
              <li>
                <a href='#' className='footer__link'>
                  Daftar Event
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__content'>
            <h3 className='footer__title'>Perusahaan</h3>
            <ul className='footer__links'>
              <li>
                <a href='#' className='footer__link'>
                  Pemegang Saham
                </a>
              </li>
              <li>
                <a href='#' className='footer__link'>
                  Laporan Keuangan
                </a>
              </li>
              <li>
                <a href='#' className='footer__link'>
                  Jajaran Direksi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span className='footer__copy'>
          © Cosplay World JFX. All rigths reserved
        </span>
      </footer>
    </>
  );
}
