import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
    
    const className = `${styles.card} ${props.className}`;
  return (
    <div className={className}>
        {props.children}
    </div>
  )
}

export default Card;
