import Header from "@/components/Header/Header";
import MenuNav from "@/components/Main/MenuNav";
import styles from "@/styles/StaticPage.module.css";

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <MenuNav />
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1>Поддержать</h1>
            <p className={styles.lead}>
              Кошельки для сбора средств на работу проекта. При сборе 12.000$
              они бронируются на оплату работ Bounty Hunter (10.000$) и 2.000$
              на развитие проекта и его инфраструктуры.
            </p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Анонимный кошелек Monero (XMR)</h2>
            <div className={styles.walletList}>
              <div className={styles.walletItem}>
                <div className={styles.walletLabel}>Monero-XMR</div>
                <div className={styles.walletValue}>
                  4537QZPHbHt9ctCy5SozcQ11GFGJRUswmcdRZqru8chuJcVoo9dkTyvLfYkuEMNabiRf1cXv92DWA8fUCo8i8TfX4HgWr8w
                </div>
              </div>
            </div>
          </section>

          <section className={styles.notice}>
            <p>
              Не анонимные кошельки, используйте только если вы в безопасной
              правовой стране.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Публичные кошельки</h2>
            <div className={styles.walletList}>
              <div className={styles.walletItem}>
                <div className={styles.walletLabel}>BitCoin-BTC</div>
                <div className={styles.walletValue}>1KXHK9BvHTJYQ6noo7m8aZvoBB1cFvxNDt</div>
              </div>
              <div className={styles.walletItem}>
                <div className={styles.walletLabel}>USDT TRC-20</div>
                <div className={styles.walletValue}>TLaw5LJ4BGFuAcgx84DQoyjDj2trtY2bam</div>
              </div>
              <div className={styles.walletItem}>
                <div className={styles.walletLabel}>TON</div>
                <div className={styles.walletValue}>UQC3BlH5YVOWJzP5q4EC7cv8kWWEEvIZoPll5h95ft69WSBA</div>
              </div>
              <div className={styles.walletItem}>
                <div className={styles.walletLabel}>BulCoin-BLC</div>
                <div className={styles.walletValue}>UQC3BlH5YVOWJzP5q4EC7cv8kWWEEvIZoPll5h95ft69WSBA</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
