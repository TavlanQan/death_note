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
            <h1>Подача Иска</h1> 
          </header>

          <section className={styles.section}>
            <p>
               Иск подается через <a
                className={styles.helperLink}
                href="hhttps://t.me/court_aac_ru"
                target="_blank"
                rel="noreferrer" >Ассоциацию Третейских Судов</a>, мы полностью признаем их решения.
            </p>
             
          </section>
 
        </div>
      </main>
    </>
  );
}
