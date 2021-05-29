import styles from './reactPlayer.module.scss'
import ReactPlayer from "react-player"

export default function ThePlayer(props) {
  return (

      <>
      <div className={styles.ReactPlayerWrapper}>
          
          <ReactPlayer
            className={styles[props.playerStyle]}
            url={props.url}
            light='true'
            width={props.width}
            height={props.height}
            
          />
        </div>
      </>
  )
}