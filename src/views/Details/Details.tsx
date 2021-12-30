import React, { FC, useEffect, useState } from "react";
import styles from "./Details.module.css";
import { DetailsHeader, DetailsMain } from "src/components/views";
import { useTranscription } from "src/hooks";
import { useParams } from "react-router";
import { ThePlayer } from "src/components";
import { ReactComponent as Loader } from "src/assets/loader.svg";
import { ITranscriptionResponse } from "src/models/transcription";

interface IDetailsProps {
  messageId?: string;
}

export const Details: FC<IDetailsProps> = ({ messageId }) => {
  const { spaceId, transcriptionId } = useParams();
  const { data, isLoading } = useTranscription(
    String(spaceId),
    String(transcriptionId)
  );
  const [transcriptionData, setTranscriptionData] =
    useState<ITranscriptionResponse>();

  useEffect(() => {
    if (data) setTranscriptionData(data);
  }, [data]);

  return (
    <div className={styles.details}>
      {!isLoading ? (
        <>
          <DetailsHeader data={transcriptionData?.transcription} />
          <DetailsMain data={transcriptionData?.transcription} />
        </>
      ) : (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin" />
        </div>
      )}
      <ThePlayer src={transcriptionData?.transcription?.link} />
    </div>
  );
};

export default Details;
