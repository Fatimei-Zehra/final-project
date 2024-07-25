//!REVAN
import React from 'react'
import styles from '../Error/Error.module.css'
import ErrorMediaCss from '../Error/Error.media.css'

function Error() {
  return (
    <div className={styles.Error} id='error'>
      <h1 className={styles.ErrorH1} id='error-h1'>404 Not Found</h1>
      <p className={styles.ErrorP} id='error-p'>Your visited page not found. You may go home page.</p>
      <button className={styles.Errorbtn} id='error-btn'>Back to home page</button>
    </div>
  )
}


export default Error;