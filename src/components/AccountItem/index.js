import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1b970225634dfd34932896b7d6e0a746~c5_300x300.webp?x-expires=1674446400&x-signature=nVuSHMfTwubvnAzskl6EyYlZUr4%3D" alt="Linhka" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Vo Lam</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>lamlbx123</span>
      </div>
    </div>
  );
}

export default AccountItem;
