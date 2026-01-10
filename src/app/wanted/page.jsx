import Header from "@/components/Header/Header";
import MenuNav from "@/components/Main/MenuNav";
import styles from "@/styles/StaticPage.module.css";

export default function WantedPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <MenuNav />
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1>Розыск</h1>
            <p className={styles.lead}>
              Тут буде розділ із детальним пошуком та критеріями, щоб швидко
              знаходити фігурантів списку. Контент оновиться після підключення
              бекенду.
            </p>
          </header>
        </div>
      </main>
    </>
  );
}
