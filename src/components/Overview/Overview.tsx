import TransactionsTable from "../TransactionTable/TransactionTable";
import styles from "./Overview.module.scss";
import Image from "next/image";

export const Overview = () => {
  return (
    <div className={styles.Overview}>
      <section className={styles.container}>
        <h1 className={styles.title_1}>Overview</h1>
        <section className={styles.cards}>
          <div className={styles.card}>
            <Image src="/img/Logo.png" alt="Proxies" width={40} height={40} />
            <h3 className={styles.card__title}>Proxies</h3>
            <p className={styles.card__value}>3</p>
          </div>
          <div className={styles.card}>
            <Image src="/img/Money.png" alt="Money" width={40} height={40} />
            <h3 className={styles.card__title}>Amount spent</h3>
            <p className={styles.card__value}>$267,00</p>
          </div>
        </section>
      </section>
      <section>
        <div className={styles.header}>
          <h3 className={styles.title_2}>Latest Transactions</h3>
          <button className={styles.viewAll}>View all</button>
        </div>
        <TransactionsTable />
      </section>
    </div>
  );
};
