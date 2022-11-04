import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mx-20`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Get in touch <br className="sm:block md:hidden lg:hidden xl:hidden"/> with us!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} >Get a quote for our services </p>
    </div>

    <div>
      <Button />
    </div>
  </section>
)

export default CTA