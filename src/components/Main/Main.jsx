'use client';
import { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ResultCard from "./ResultCard";
import LegalOptionsModal from "./LegalOptionsModal";
import MenuNav from "./MenuNav";

function Main() {
  const pathname = usePathname();
  const router = useRouter();
  const [cards, setCards] = useState([]);
  const [legalOptions, setLegalOptions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState("");

  useEffect(() => {
    fetch("/cards.json")
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error("Помилка завантаження cards.json", err));

    fetch("/legalOptions.json")
      .then(res => res.json())
      .then(data => setLegalOptions(data))
      .catch(err => console.error("Помилка завантаження legalOptions.json", err));
  }, []);

  const openModal = (label) => {
    setModalLabel(label);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleVote = (id) => {
    router.push(`/donation/${id}`);
  };

  return (
    <>
      <main className={styles.wrapper}>
        <aside className={styles.vertical_logo}>
          <div className={styles.vertical_logo__img}>
            <img src="/left_img.png" alt="Death Note vertical logo" />
          </div>
        </aside>

        <div className={styles.main}>
          
          {/* Використання нового reusable компонента */}
          {/* <DonationTracker initialGoal={10000} /> */}

          <MenuNav currentPath={pathname} />

          <section role="blacklist-information" className={styles.blacklist_root}>
             {/* ... тут без змін, блок пошуку та карток ... */}
              <article className={styles.search_block}>
                {/* код форми пошуку... */}
                <div className={styles.search_block__form}>
                  <form className={styles.form}>
                    <h3>РАСШИРЕННЫЙ ПОИСК</h3>
                    <input type="text" placeholder="Фамилия" />
                    <input type="text" placeholder="Имя" />
                    <input type="text" placeholder="Отчество" />
                    <input type="text" placeholder="Адрес" />

                    <div className={styles.phone_split}>
                      <div className={styles.country_code}>
                        <img src="/icons/russia-flag.png" alt="RU" />
                        <span>+7</span>
                        <div className={styles.dropdown_icon}>▼</div>
                      </div>
                      <input
                        type="text"
                        placeholder="Телефон"
                        className={styles.phone_number_input}
                      />
                    </div>

                    <button type="submit">ИСКАТЬ</button>
                  </form>
                </div>

                <div className={styles.search_block__space}>
                  <img src="/blood.png" alt="Blood splash" className={styles.blood_img} />
                  <h2>L</h2>
                </div>
              </article>


            <article className={styles.result_block}>
                {cards.length === 0 ? (
                  <p>Список пока что пуст</p>
                ) : (
                  cards.map(card => (
                    <ResultCard
                      key={card.id}
                      card={card}
                      onAppeal={() => openModal("Обжаловать")}
                      onClaim={() => openModal("Подать иск")}
                      onVote={() => handleVote(card.id)}
                    />
                  ))
                )}
            </article>

          </section>
        </div>
      </main>

      <LegalOptionsModal
        open={modalOpen}
        onClose={closeModal}
        options={legalOptions}
        actionLabel={modalLabel}
      />
    </>
  );
}
export default Main;
