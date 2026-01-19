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
             <b> Алгоритм получения награды:</b>
              <br />
              <br />
              1. Подать иск в один из судов АТС, для подтверждения обработки объекта реестра, в качестве идинтификатора своей личности используйте криптокошелек на который хотите получить награду
              <br />
              2. Один из судов рассмотрит иск и примет соответствующее решение.
              <br />
              3. После принятия решения, мы автоматически обнаружим его в реестре и на ваш кошелек будет переведена сумма собранная за данный объект + суммма общего вознаграждения (10 000$ или меньше, если она еще не собрана).
              <br />
            </p>
          </header>
          <section className={styles.section}>
            <div className={styles.inlineRow}>
              <span className={styles.helperText}>Ссылка на канал Ассоциации Третейских Судов:</span>
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
