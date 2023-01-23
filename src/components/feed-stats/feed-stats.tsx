import React, { FC } from "react";
import { splitArrayIntoChunks } from "../../utils/splitArrayIntoChunks";
import styles from "./feed-stats.module.scss";
import { TFeedStatsProps } from "./feed-stats.types";

const FeedStats: FC<TFeedStatsProps> = ({
  ready,
  inProgress,
  total,
  totalToday,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.status_boxes}>
        <div className={styles.status_box}>
          <p className="text text_type_main-medium">Готовы:</p>
          <div className={styles.numbers_container}>
            {splitArrayIntoChunks(ready, 10).map((item, index) => (
              <div className={styles.numbers_column} key={index}>
                {item.map((item) => (
                  <p
                    className="text text_type_digits-default text_color_success"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.status_box}>
          <p className="text text_type_main-medium">В работе:</p>
          <div className={styles.numbers_container}>
            {splitArrayIntoChunks(inProgress, 10).map((item, index) => (
              <div className={styles.numbers_column} key={index}>
                {item.map((item) => (
                  <p className="text text_type_digits-default" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {total && (
        <div className={styles.total}>
          <p className="text text_type_main-medium">Выполнено за все время:</p>
          <p className={`text text_type_digits-large ${styles.digits_shadow}`}>
            {total}
          </p>
        </div>
      )}
      {totalToday && (
        <div className={styles.total_today}>
          <p className="text text_type_main-medium">Выполнено за сегодня:</p>
          <p className={`text text_type_digits-large ${styles.digits_shadow}`}>
            {totalToday}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedStats;
