import styles from './reactPlayer.module.scss'
import ReactPlayer from "react-player"

export default function ThePlayer() {
  return (
      <>
      <div className={styles.ReactPlayerWrapper}>
          
          <ReactPlayer
            className={styles.thePlayer}
            url='https://soundcloud.com/walter-and-donny/sets/road-2-cascadia'
            light='true'
            width='100%'
            height='100%'
          />
        </div>
      </>
  )
}