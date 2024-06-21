import styles from './Parent.module.css';

function Parent({children}) {
  return(
    <div className={styles.border}>
      <h1>Componente Parent!</h1>
      {children}
    </div>
  )
}

export default Parent;