import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Favorite() {
  const menuRef = useRef(null);
  const navToggle = useRef(null);
  const navClose = useRef(null);
  const ROUTE_POST_ID = 'favorite/[id]';
  const posts = [
    {
      id: 1,
      title: 'Paket Basic',
      desc: 'Merupakan paket yang ditujukan pada pemula. Memiliki harga yang terjangkau namun dengan pelayanan yang cukup memadai.',
      op1: 'Makeup Sederhana',
      op2: 'Kostum Simple',
      op3: 'Dokumentasi Kualitas Sedang',
      op4: 'Konsultasi Kecocokan Kostum',
      harga: 'Rp 250.000',
    },
    {
      id: 2,
      title: 'Paket Advanced',
      desc: 'Merupakan paket yang ditujukan pada cosplayer yang ingin bertanding pada tingkat Nasional maupun sekedar mengisi Acara Besar.',
      op1: 'Makeup Complete',
      op2: 'Kostum Standard sesuai Karakter yang Diinginkan',
      op3: 'Dokumentasi dan Editing Kualitas Sedang',
      op4: 'Konsultasi dengan Cosplayer Professional',
      harga: 'Rp 1.000.000',
    },
    {
      id: 3,
      title: 'Paket VVIP',
      desc: 'Merupakan paket prioritas tertinggi dengan kualitas terbaik dan terlengkap. Ditujukan terutama untuk pertandingan Internasional.',
      op1: 'Makeup dan Hairstylist terbaik',
      op2: 'Kostum Fullset sesuai Karakter yang Diinginkan',
      op3: 'Dokumentasi dan Editing Kualitas Terbaik',
      op4: 'Konsultasi 24/7 dengan Cosplayer Professional',
      harga: 'Rp 2.500.000',
    },
  ];
  const router = useRouter();

  const navigate = (id) => {
    router.push({
      pathname: ROUTE_POST_ID,
      query: { id },
    });
  };

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
      <link
        href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
        rel='stylesheet'
      />

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
                  <a className='nav__link active-link'>Favorite</a>
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
        {/* ----------ABOUT----------- */}

        <section className='about section container' id='about'>
          <div className='about__container grid'>
            {posts.map((post) => (
              <div className='about__datax'>
                <h2 className='section__title about__title'>{post.title}</h2>

                <p className='about__description'>{post.desc}</p>

                <div className='about__details'>
                  <p className='about__details-description'>
                    <i className='ri-checkbox-fill about__details-icon'></i>
                    {post.op1}
                  </p>
                  <p className='about__details-description'>
                    <i className='ri-checkbox-fill about__details-icon'></i>
                    {post.op2}
                  </p>
                  <p className='about__details-description'>
                    <i className='ri-checkbox-fill about__details-icon'></i>
                    {post.op3}
                  </p>
                  <p className='about__details-description'>
                    <i className='ri-checkbox-fill about__details-icon'></i>
                    {post.op4}
                  </p>
                </div>

                <button
                  onClick={() => navigate(post.id)}
                  className='button button--link button--flex'
                >
                  {post.harga}
                  <i className='ri-arrow-right-down-line button__icon'></i>
                </button>
              </div>
            ))}
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
