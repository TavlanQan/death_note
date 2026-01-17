import Header from "@/components/Header/Header";
import MenuNav from "@/components/Main/MenuNav";
import styles from "@/styles/StaticPage.module.css";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export default function HuntersPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <MenuNav />
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1>Охотникам</h1>
            <p className={styles.lead}>
              Для получения награды обратитесь в один из судов.
            </p>
          </header>
          <section className={styles.section}>
            <div className={styles.inlineRow}>
              <span className={styles.helperText}>Ссылка для канал Ассоциации Третейских Судов:</span>
              <a
                className={styles.helperLink}
                href="https://t.me/court_aac_ru"
                target="_blank"
                rel="noreferrer"
              >
                https://t.me/court_aac_ru
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
