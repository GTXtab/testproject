import Image from "next/image";
import Link from "next/link";
import styles from "./BurgerMenu.module.scss";

const MyLink = ({ href, icon, text }) => {
  return (
    <Link href={href} className={styles.navBarItem}>
        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          style={{ marginRight: "8px" }}
        />
        {text}
    </Link>
  );
};

export default MyLink;
