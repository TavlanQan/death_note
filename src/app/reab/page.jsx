import Header from "@/components/Header/Header";
import MenuNav from "@/components/Main/MenuNav";
import styles from "@/styles/StaticPage.module.css";

export default function ClaimPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <MenuNav />
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1>Реабилитация</h1>
            <p className={styles.lead}>
              Если вы оказались в списке, но считаете что можете исправить свою
              вину, вы можете связаться с Коалицией и договориться о сотрудничестве.
            </p>
          </header>

          <section className={styles.section}>
            <p>
              Взамен Коалиция займется компенсацией вашего ущерба и внесет вас
              в «Тетрадь Жизни», что гарантирует скрытие вашей личности с нашего
              сайта.
            </p>
            <div className={styles.inlineRow}>
              <span className={styles.helperText}>Коалиция:</span>
              <a
                className={styles.helperLink}
                href="https://freedomcoalition.net"
                target="_blank"
                rel="noreferrer"
              >
                freedomcoalition.net
              </a>
            </div>
          </section>

          <section className={styles.notice}>
            <p>
              Мы ценим жизнь каждого и надеемся что Вы тоже захотите спасать
              жизни вместе с нами.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
