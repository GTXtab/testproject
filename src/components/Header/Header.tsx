import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Localization from "../Localization/Localization";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <BurgerMenu />
        <section className={styles.balance}>
          <h1 className={styles["title"]}>Balance</h1>
          <h3 className={styles["amount"]}>200$</h3>
          <button>
            <Image
              width={16}
              height={16}
              src="/img/icons/plus.png"
              alt="plus"
            />
          </button>
        </section>
      </div>
      <Localization />
    </header>
  );
};
