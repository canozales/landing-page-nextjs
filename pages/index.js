import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Hunger Apps</title>
        <meta name='Hello' content='Hello Peter' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        {/* Left */}
        <div className={styles.left}>
          {/* Logo */}
          <Link href='/'>
            <a className={styles.logo}>Hunger Apps</a>
          </Link>
        </div>

        {/* Right */}
        <nav className={styles.right}>
          <HeaderLink href='#'>Home</HeaderLink>
          <HeaderLink href='#'>Favorite</HeaderLink>
          <HeaderLink href='#'>About Us</HeaderLink>
        </nav>
      </header>

      {/* Main */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Left - Content */}
          <article className={styles.left}>
            {/* Heading */}
            <h1 className={styles.heading}>
              Hunger Apps dikembangkan oleh Telkom DDB
            </h1>

            {/* Subheading */}
            <p className={styles.subheading}>
              Sudah ribuan orang tertolong oleh Program Hunger Apps. Mulailah
              merancang masa depan Anda bersama Hunger
            </p>

            {/* CTAs */}
            <div className={styles.CTAs}>
              <button className={[styles.CTA, styles.fill].join(' ')}>
                Konsultasi Gratis
              </button>
              <button className={[styles.CTA, styles.outline].join(' ')}>
                Pendaftaran
              </button>
            </div>

            {/* Rating */}
            <div className={styles.ratings}>
              {/* Star Rating */}
              <div className={styles.starRating}>
                <span className={styles.star}>
                  <Image
                    height={23}
                    width={23}
                    alt='Star'
                    src='/icons/star.svg'
                  />
                </span>
                Penilaian Sempurna
              </div>
              {/* People */}
              <div className={styles.people}>
                <Image
                  width={134}
                  height={37}
                  alt='People'
                  src='/images/people.svg'
                />
                16.497 Anggota
              </div>
            </div>
          </article>

          <article className={styles.right}>
            {/* Hero Image */}
            <div className={styles.image}>
              <Image
                height={500}
                width={750}
                alt='Peter Parker'
                src='/images/23.png'
              />
            </div>
          </article>
        </section>

        {/* Top Workout Section */}
        <section className={styles.topWorkout}>
          {/* Heading */}
          <h2 className={styles.heading}>Explore Programs</h2>

          {/* List */}
          <WorkoutList
            items={[
              {
                title: 'Ultimate Course',
                subheading: 'For Beginners',
                stats: ['$2500', '✔ Best Seller'],
                image: {
                  width: 203,
                  height: 243,
                },
              },
              {
                title: 'Fibonacci Platinum',
                subheading: 'For Intermediates',
                stats: ['$5000', '✔ Best Seller'],
                image: {
                  width: 203,
                  height: 243,
                },
              },
              {
                title: 'Financial Astrology',
                subheading: 'For Experts',
                stats: ['$7500', '✔ Best Seller'],
                image: {
                  width: 203,
                  height: 243,
                },
              },
            ]}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>Copyright © 2020 - Hunger Apps</footer>
    </div>
  );
}

const HeaderLink = ({ href, children }) => (
  <Link href={href} passHref>
    <a className={styles.headerLink}>{children}</a>
  </Link>
);

const WorkoutList = ({ items }) => (
  <ul className={styles.workoutList}>
    {items.map(
      ({ title, subheading, stats, image: { height, width } }, idx) => (
        <li className={styles.item} key={idx}>
          {/* Title */}
          <h3 className={styles.title}>{title}</h3>
          {/* Subheading */}
          <p className={styles.subheading}>{subheading}</p>
          {/* Stats list */}
          <ul className={styles.stats}>
            {stats.map((value, i) => (
              <li className={styles.stat} key={i}>
                {value}
              </li>
            ))}
          </ul>

          {/* Image - Absolute */}
          <div className={styles.image}>
            <Image
              height={height}
              width={width}
              alt={`${title} Demo Image`}
              src={`/images/workout-items/${
                { 1: 'first', 2: 'second', 3: 'third' }[idx + 1]
              }.png`}
            />
          </div>
        </li>
      )
    )}
  </ul>
);
