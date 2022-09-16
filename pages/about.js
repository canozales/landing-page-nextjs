import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
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
                <a href='/' className='nav__link'>
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <Link href={'/favorite'}>
                  <a className='nav__link'>Favorite</a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href={'/about'}>
                  <a className='nav__link active-link'>About Us</a>
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
                Cosplay World JFX didirikan pada Tahun 1995 oleh Valensia
              </h2>
              <p className='about__description'>
                Pada awalnya, JFX hanya menyediakan Sarana Fotografi dan
                Dokumentasi untuk Berbagai Acara seperti Pernikahan dan Ulang
                Tahun.
              </p>
            </div>
            <Image
              src='/images/53.png'
              className={'about__img'}
              layout='responsive'
              width={0}
              height={0}
            />
          </div>
        </section>

        {/*==================== ABOUT ====================*/}
        <section className='about' id='about'>
          <div className='about__container container grid'>
            <Image
              src='/images/58a.png'
              className={'about__img'}
              layout='responsive'
              width={0}
              height={0}
            />
            <div className='about__data'>
              <h2 className='section__title about__title'>
                Ekspansi besar pada Tahun 2005 kemudian Memutuskan Go Public
              </h2>
              <p className='about__description'>
                JFX Memutuskan untuk melakukan Ekspansi ke sektor Fashion dan
                Cosplay. Perusahaan listing di Bursa Efek dengan Kode Saham COSP
              </p>
            </div>
          </div>
        </section>

        {/*==================== ABOUT ====================*/}
        <section className='about' id='about'>
          <div className='about__container container grid'>
            <div className='about__data'>
              <h2 className='section__title about__title'>
                Menjadi Penyedia Layanan Cosplay terbesar di ASEAN
              </h2>
              <p className='about__description'>
                Customer setia JFX berasal dari berbagai belahan Dunia mulai
                dari Indonesia, Singapore, Malaysia, Thailand, Jepang, hingga
                Zimbabwe.
              </p>
            </div>
            <Image
              src='/images/57.png'
              className={'about__img'}
              layout='responsive'
              width={0}
              height={0}
            />
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
                className='footer__social-link'
              >
                <i className='bx bxl-facebook' />
              </a>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                className='footer__social-link'
              >
                <i className='bx bxl-instagram-alt' />
              </a>
              <a
                href='https://twitter.com/'
                target='_blank'
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
