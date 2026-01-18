import Header from "@/components/Header/Header";
import MenuNav from "@/components/Main/MenuNav";
import styles from "@/styles/StaticPage.module.css";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <MenuNav />
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1>О проекте</h1>
            <p className={styles.lead}>
              Тетрадь Смерти - реестр судебно признанных убийц, насильников,
              похитителей - которые скрываются от правосудия и отказываются
              компенсировать починенный ущерб. Одной из организаций, сотрудничество с которой покрывает ущерб - <a href="https://freedomcoalition.net/">Коалиция</a>.
            </p>
          </header>

          <section className={styles.section}>
            <ul className={styles.list}>
              <li>
                Любое лицо может оказаться здесь только по решению суда  <a
                                className={styles.helperLink}
                                href="hhttps://t.me/court_aac_ru"
                                target="_blank"
                                rel="noreferrer" >АТС</a>.
                Любое решение может быть обжаловано в <a
                                className={styles.helperLink}
                                href="hhttps://t.me/court_aac_ru"
                                target="_blank"
                                rel="noreferrer" >АТС</a>.
              </li>
              <li>
                Лица что оказались в нашем реестре, могут покинуть его в случае
                начала выплаты компенсации ущерба либо сотрудничестве с
                организацией которая покроет ущерб за них.
              </li>
              <li>
                Преступники что находятся в реестре, являются опасными для
                общества и с целью защиты общества и осуществления правосудия,
                на сайте проводится сбор вознаграждений для лиц что смогут
                остановить преступников.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <p>
              Проект управляется               <a
                className={styles.helperLink}
                href="https://freedomcoalition.net/snb"
                target="_blank"
                rel="noreferrer"
              >
               Советом Национальной Безопасности Коалиции 
              </a>
              .
            </p>
            <p>Разработчики проекта не несут ответственность за его работу.</p>
          </section>
        </div>
      </main>
    </>
  );
}
