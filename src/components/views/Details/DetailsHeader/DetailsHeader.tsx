import { truncate } from "lodash";
import React, { FC } from "react";
import { TheSubtleButton } from "src/components";
import { ThePopover } from "src/components/common/ThePopover";
import { ITranscriptionResponse } from "src/models";
import styles from "./DetailsHeader.module.css";

interface IDetailsHeaderProps {
  data?: ITranscriptionResponse["transcription"];
}

export const DetailsHeader: FC<IDetailsHeaderProps> = ({ data }) => {
  const copyToClipboard = () => {
    const copytext = document.createElement("input");
    copytext.value = window.location.href;
    document.body.appendChild(copytext);
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    document.body.removeChild(copytext);
  };

  return (
    <div className={styles.header}>
      <div className={styles.id}>VOICE MESSAGE {truncate(data?.id, {length: 50})}</div>
      <div className={styles.infoWrapper}>
        <div className={styles.resourse}>{1} plays</div>
        <TheSubtleButton
          isIcon
          className={styles.shareButton}
          onClick={() => copyToClipboard()}
        >
          Share
        </TheSubtleButton>
        <ThePopover />
      </div>
    </div>
  );
};
