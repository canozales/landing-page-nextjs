import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DetailID = () => {
  const menuRef = useRef(null);
  const navToggle = useRef(null);
  const navClose = useRef(null);
  const router = useRouter();
  const title = ['Error API', 'Paket Basic', 'Paket Advanced', 'Paket VVIP'];
  const harga = ['Error API', 'Rp 250.000', 'Rp 1.000.000', 'Rp 2.500.000'];

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
            <img src='../images/konoha.png' alt='' className='nav__logo-img' />
            Cosplay World JFX
          </a>
          <div className='nav__menu' id='nav-menu' ref={menuRef}>
            <ul className='nav__list'>
              <li className='nav__item'>
                <Link href='/'>
                  <a className='nav__link'>Home</a>
                </Link>
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
            <img src='../images/14.png' alt='' className='nav__img' />
          </div>
          <div className='nav__toggle' id='nav-toggle' ref={navToggle}>
            <i className='bx bx-grid-alt' />
          </div>
        </nav>
      </header>
      <main className='main'>
        {/* ============== KONTEN ============== */}
        <div className='kontainer'>
          <form action=''>
            <div className='row'>
              <div className='col'>
                <h3 className='title'>{title[router.query.id]}</h3>
                <div className='inputBox'>
                  <span>Nama Lengkap</span>
                  <input type='text' placeholder='Peter Parker' />
                </div>
                <div className='inputBox'>
                  <span>email</span>
                  <input type='email' placeholder='peter123@gmail.com' />
                </div>
                <div className='inputBox'>
                  <span>Alamat</span>
                  <input
                    type='text'
                    placeholder='Perum Batununggal Blok A 52'
                  />
                </div>
                <div className='inputBox'>
                  <span>Kota</span>
                  <input type='text' placeholder='Bandung' />
                </div>
                <div className='flex'>
                  <div className='inputBox'>
                    <span>Negara</span>
                    <input type='text' placeholder='Indonesia' />
                  </div>
                  <div className='inputBox'>
                    <span>Kode Pos</span>
                    <input type='text' placeholder={40257} />
                  </div>
                </div>
              </div>
              <div className='col'>
                <h3 className='title'>Pembayaran</h3>
                <div className='inputBox'>
                  <span>Dapat Menggunakan</span>
                  <img src='../images/card_img.png' alt='' />
                </div>
                <div className='inputBox'>
                  <span>Nama pada Kartu</span>
                  <input type='text' placeholder='Peter Parker' />
                </div>
                <div className='inputBox'>
                  <span>Nomor Kartu Debit</span>
                  <input type='number' placeholder='8225-2099-4540-8830' />
                </div>
                <div className='inputBox'>
                  <span>Bulan Expired</span>
                  <input type='text' placeholder='November' />
                </div>
                <div className='flex'>
                  <div className='inputBox'>
                    <span>Tahun Expired</span>
                    <input type='number' placeholder={2025} />
                  </div>
                  <div className='inputBox'>
                    <span>CVV</span>
                    <input type='text' placeholder={1234} />
                  </div>
                </div>
              </div>
            </div>
            <button className='submit-btn'>
              Pembayaran {harga[router.query.id]}
            </button>
          </form>
        </div>
      </main>
      {/*==================== FOOTER ====================*/}
      <footer className='footer section'>
        <div className='footer__container container grid'>
          <div className='footer__content'>
            <a href='#' className='footer__logo'>
              <img
                src='../images/konoha.png'
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
};

export default DetailID;
