import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/foto.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="relógio" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>email.email@gmail.com</li>
          <li>(99)99999-9999</li>
          <li>Rua anônima, 456</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
