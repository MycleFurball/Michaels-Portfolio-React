import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-button.module.css'

const OutlineButton = (props) => {
  return (
    <div className={styles['container']}>
      <a
        href="https://youtu.be/G41KMw_ht60"
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['link']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.button1}
      </a>
    </div>
  )
}

OutlineButton.defaultProps = {
  button1: 'Button',
}

OutlineButton.propTypes = {
  button1: PropTypes.string,
}

export default OutlineButton
