import { DocumentProps } from "@interfaces/ui-interfaces";
import { FC, ReactEventHandler, forwardRef, useCallback } from "react";
import styles from "./style.module.css";
import { DocumentPayload } from "@/interfaces/documents";
import { Arrow } from "../Arrow";

const Document: FC<DocumentProps> = forwardRef((props, fref) => {
  const { Item, handleClick } = props;
  const { _id, body, createdAt, isViewing, title, fileName } = Item;


  return (
    <div ref={fref} className={styles.container}>
      <div
        className={styles.head}
        data-item-id={_id}
        onClick={handleClick}
      >
        <span>{fileName}</span>
        <Arrow active={isViewing} />
      </div>
      <div className={isViewing ? styles.body_active : styles.body_disabled}>
        Заголовок: {title} <br />
        Создан: {createdAt} <br />
        {body}
      </div>
    </div>
  );
});
export default Document;
