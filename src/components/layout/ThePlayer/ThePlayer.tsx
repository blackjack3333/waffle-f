import { useAuth0 } from "@auth0/auth0-react";
import classNames from "classnames";
import React, { FC } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  forward,
  next,
  pause,
  play,
  previous,
  rewind,
} from "src/components/common/TheIcons";
import styles from "./ThePlayer.module.css";

interface IThePlayerProps {
  className?: string;
  src?: string;
}

export const ThePlayer: FC<IThePlayerProps> = ({ className, src }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <footer className={classNames(styles.player, className)}>
      {isAuthenticated && <div className={styles.dummy} />}
      <AudioPlayer
        customAdditionalControls={[]}
        showSkipControls={true}
        src={src}
        customIcons={{
          play: play,
          rewind: rewind,
          forward: forward,
          previous: previous,
          next: next,
          pause: pause,
        }}
      />
    </footer>
  );
};

export default ThePlayer;
