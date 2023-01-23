import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="https://www.invert.vn/media/uploads/uploads/2022/12/03191809-2.jpeg" alt="Girl xinh" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Girl Xinh</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>girl123</span>
      </div>
    </div>
  );
}

export default AccountItem;
