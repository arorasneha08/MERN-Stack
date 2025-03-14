import styles from "../styles.module.css"

const ModuleCss = () =>{
    return (
        <>
        <h1 className={styles.bg1}>Fruits </h1>
        {/* if the class name is not the a single word and seperated with hyphen then the class is accessed using the square bracket .. */}
        <h2 className={styles["bg2-ok"]}>Vegetables </h2>

        {/* to apply multiple styles in the project ...  */}
        <h3 className={`${styles.bg1} ${styles.bg2}`}>Both Components together ...</h3>
        </>
    )
}

export default ModuleCss ; 