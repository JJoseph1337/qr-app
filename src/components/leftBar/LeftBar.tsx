import { LogoutIcon } from "../../icons/LogoutIcon";
import { ReceiptIcon } from "../../icons/ReceiptIcon";
import MenuItem from "../menuItem/MenuItem";
import styles from "./LeftBar.module.css";

export const LeftBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profile__image}>
          <img
            src="src\images\ProfileImage.png"
            alt="profile image"
          />
        </div>
        <div className={styles.profile__info}>
          <p className={styles.name}>Анастасия Байкова</p>
          <p className={styles.email}>
            Lazynightmare1111@gmail.com
          </p>
        </div>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <span>Личный кабинет</span>
          <ul className={styles.submenu}>
            <li className={styles.submenu__item}>
              <MenuItem icon={<LogoutIcon />} />
            </li>
            <li className={styles.submenu__item}>
              <MenuItem icon={<ReceiptIcon />} />
            </li>
            <li className={styles.submenu__item}>
              <MenuItem icon={<ReceiptIcon />} />
            </li>
          </ul>
        </li>
        <li className={styles.menu__item}>
          <span>Помощь</span>
          <ul className={styles.submenu}>
            <li className={styles.submenu__item}>
              <MenuItem icon={<ReceiptIcon />} />
            </li>
            <li className={styles.submenu__item}>
              <MenuItem icon={<ReceiptIcon />} />
            </li>
            <li className={styles.submenu__item}>
              <MenuItem icon={<ReceiptIcon />} />
            </li>
          </ul>
        </li>
      </ul>
      <div className={styles.exit}>
        <MenuItem icon={<LogoutIcon />} />
      </div>
    </div>
  );
};
