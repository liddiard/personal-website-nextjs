'use client'

import styles from './print-button.module.css'

const PrintButton = () => (
  <div
    className={styles.print}
    role="button"
    tabIndex={-1}
    onClick={() => window.print()}
    onKeyDown={() => window.print()}
  >
    Print / PDF <img src="/img/download.svg" alt="" />
  </div>
)

export default PrintButton
