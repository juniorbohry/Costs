import styles from './Container.module.css'

function Container(props) {
    return( 
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div> //para pegar os componentes filhos que estao dentro do <Container> <Container /> sejam colocados dentro desta div
    )
}

export default Container