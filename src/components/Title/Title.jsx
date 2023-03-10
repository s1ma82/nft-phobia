import styles from './Title.module.scss'
export default ({ children, className = '' }) => {
    return (
        <h1 className={`${styles.title} ${className}`}>{children}</h1>
    )
}