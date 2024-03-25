import { FC } from "react";
import { cn } from "../../helpers/cn";
import { TipsIcon } from "../../icons/TipsIcon";
import styles from "./PaymentString.module.css";
import { ClockIcon } from "../../icons/ClockIcon";
import { DislikeIcon } from "../../icons/DislikeIcon";
import { LikeIcon } from "../../icons/LikeIcon";
import { WithdrawalIcon } from "../../icons/WithdrawalIcon";
import { CardIcon } from "../../icons/CardIcon";

interface PaymentStringProps {
  style: "tips" | "review" | "withdrawal";
  isPending: boolean;
  review?: "negative" | "positive";
  reviewText?: string;
  value: number;
}

const PaymentString: FC<PaymentStringProps> = ({
  style = "review",
  isPending = true,
  review,
  reviewText,
  value = 1000,
}: PaymentStringProps) => {
  const icon = {
    positive: <LikeIcon />,
    negative: <DislikeIcon />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div
          className={cn([
            styles.info__icon,
            {
              [styles["info__icon--negative"]]:
                review === "negative",
              [styles["info__icon--positive"]]:
                review === "positive",
              [styles["info__icon--withdrawal"]]:
                style === "withdrawal",
            },
          ])}
        >
          {style === "withdrawal" ? (
            <WithdrawalIcon />
          ) : null}
          {style === "tips" ? <TipsIcon /> : icon[review]}
        </div>
        <div className={styles.info__description}>
          <span className={styles.title}>
            {style === "tips" ? "Чаевые" : "Отзыв"}
          </span>
          <span className={styles.date}>
            11.11.11
            <span className={styles.time}>00:00</span>
          </span>
          <p
            className={cn([
              styles.review,
              {
                [styles["review--negative"]]:
                  review === "negative",
                [styles["review--positive"]]:
                  review === "positive",
              },
            ])}
          >
            {reviewText || "user ne ostavil"}
          </p>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.payment__info}>
          <span className={styles.paymentValue}>
            {value} ₽
          </span>
          <div className={styles.paymentName}>
            {<CardIcon/> || "Номер карты"}
          </div>
        </div>
        <div className={styles.payment_status}>
          {isPending && (
            <div className={styles.iconContainer}>
              <ClockIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentString;
