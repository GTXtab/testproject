import { useState } from "react";
import Link from "next/link";
import styles from "./BurgerMenu.module.scss";
import MyLink from "./MyLink";

const links = [
  { href: "/dashboard", icon: "/img/icons/home.png", text: "Dashboard" },
  {
    href: "/purchase",
    icon: "/img/icons/icon (5).png",
    text: "Purchase proxies",
  },
  { href: "/top", icon: "/img/icons/icon (4).png", text: "Top up balance" },
  {
    href: "/transactions",
    icon: "/img/icons/icon (5).png",
    text: "Transactions",
  },
  { href: "/support", icon: "/img/icons/question.png", text: "Support" },
  { href: "/user", icon: "/img/icons/avatar.png", text: "Lukas Fabianskiy" },
];

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.template}>
      <section
        id="burger-menu"
        className={`${styles.BurgerMenu} ${isOpen ? styles.close : ""}`}
        onClick={toggleMenu}
      >
        <img
          src={isOpen ? "/img/icons/close.png" : "/img/icons/menu.png"}
          alt={isOpen ? "Close menu" : "Open menu"}
        />
      </section>
      <section
        id="menu"
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
      >
        <section className={styles.overlay__header}>
          <img
            src="/img/Logo.png"
            alt="Logo"
            className={styles.overlay__logo}
          />
          <div
            id="close-menu"
            className={styles.overlay__close}
            onClick={toggleMenu}
          >
            <img src="/img/icons/close.png" alt="Close menu" />
          </div>
        </section>
        <div className={styles.navBarItemBlock} onClick={toggleMenu}>
          <h3 className={styles.navBarItemTitle}>My Proxies (0)</h3>
          <Link href="/home" className={styles.navBarItemButton}>
            Purchase proxies
          </Link>
        </div>
        <nav className={styles.navBar}>
          {links.map((link) => (
            <MyLink href={link.href} icon={link.icon} text={link.text} />
          ))}
        </nav>
      </section>
    </div>
  );
};


