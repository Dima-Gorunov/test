import { DocumentsProps } from "@/interfaces/ui-interfaces";
import { FC, memo, useLayoutEffect } from "react";
import { Document } from "@common/Document";
import Preloader from "@/common/Preloader/Preloader";
import styles from "./style.module.css";
import { FixedSizeList as List } from "react-window";

const Documents: FC<DocumentsProps> = (props) => {
  const { Items, handleClick, screenHeight } = props;
  const renderRow = ({ index, style }) => (
    <div style={{ ...style }}>
      <Document Item={Items[index]} handleClick={handleClick} />
    </div>
  );

  if (!Items) {
    return <Preloader />;
  }

  return (
    <List
      className={styles.container}
      height={screenHeight - (screenHeight / 100) * 10} // пусть так, чтобы динамически высота считалась
      itemCount={Items.length} // Количество элементов в списке
      itemSize={75} // Высота каждого элемента
      width={700} // max Ширина видимой области списка
      overscanCount={100}
    >
      {renderRow}
    </List>
  );
};

export default memo(Documents);
