import React, { ReactNode } from "react";

import styles from "./Window.module.scss";
import Modal from "@/components/layout/Modal";
import { useModal } from "@/store/hooks/useModal";
import { ContentCell } from "../Content";
import ButtonIcon from "@/components/ui/ButtonIcon";

interface IWindow {
  children?: ReactNode;
  tittle?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const Window = ({ tittle, children, width, height, onClick }: IWindow) => {
  const { setShowModal } = useModal();
  onClick = () => {
    setShowModal(false);
  };

  return (
    <Modal>
      <div style={{ width, height }} className={styles.window}>
        <ContentCell>
          <div className={styles.buttonDiv}>
            <ButtonIcon
              onClick={onClick}
              borderRadius="10px"
              color="#000000"
              backgroundColor="#D9D9D9"
              icon="X"
            />
          </div>
          <p>{tittle}</p>
          {children}
        </ContentCell>
      </div>
    </Modal>
  );
};

export default Window;
