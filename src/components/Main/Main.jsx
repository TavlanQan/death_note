'use client';
import { useState, useEffect, useMemo } from "react";
import styles from "./Main.module.css";
import { useRouter } from "next/navigation";
import ResultCard from "./ResultCard";
import LegalOptionsModal from "./LegalOptionsModal";
import MenuNav from "./MenuNav";

function Main() {
  const router = useRouter();
  const [cards, setCards] = useState([]);
  const [legalOptions, setLegalOptions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState("");
  const [search, setSearch] = useState({
    lastName: "",
    firstName: "",
    patronymic: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/court-kebe/docs/refs/heads/main/export.json")
      .then(res => res.json())
      .then(data => setCards(data.map((item, index) => ({
        id: item.id ?? index + 1,
        ...item,
      }))))
      .catch(err => console.error("Ошибка загрузки cards.json", err));

    fetch("/legalOptions.json")
      .then(res => res.json())
      .then(data => setLegalOptions(data))
      .catch(err => console.error("Ошибка загрузки legalOptions.json", err));
  }, []);

  const openModal = (label) => {
    setModalLabel(label);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleVote = (id) => {
    router.push(`/support`);
  };

  const handleSearchChange = (key) => (event) => {
    setSearch(prev => ({ ...prev, [key]: event.target.value }));
  };

  const normalize = (value) => (value || "").toString().toLowerCase().trim();

  const normalizedSearch = useMemo(() => ({
    lastName: normalize(search.lastName),
    firstName: normalize(search.firstName),
    patronymic: normalize(search.patronymic),
    address: normalize(search.address),
    phone: normalize(search.phone),
  }), [search]);

  const hasFilters = Object.values(normalizedSearch).some(Boolean);

  const filteredCards = useMemo(() => {
    if (!cards.length) return [];
    return cards.filter(card => {
      const fullName = normalize(card.full_name);
      const location = normalize([card.country, card.city, card.country_code].filter(Boolean).join(" "));
      const phone = normalize((card.phones || []).join(" "));

      if (normalizedSearch.lastName && !fullName.includes(normalizedSearch.lastName)) return false;
      if (normalizedSearch.firstName && !fullName.includes(normalizedSearch.firstName)) return false;
      if (normalizedSearch.patronymic && !fullName.includes(normalizedSearch.patronymic)) return false;
      if (normalizedSearch.address && !location.includes(normalizedSearch.address)) return false;
      if (normalizedSearch.phone && !phone.includes(normalizedSearch.phone)) return false;

      return true;
    });
  }, [cards, normalizedSearch]);

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

          <MenuNav />

          <section role="blacklist-information" className={styles.blacklist_root}>
             {/* ... тут без змін, блок пошуку та карток ... */}
              <article className={styles.search_block}>
                {/* код форми пошуку... */}
                <div className={styles.search_block__form}>
                  <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
                    <h3>РАСШИРЕННЫЙ ПОИСК</h3>
                    <input
                      type="text"
                      placeholder="Фамилия"
                      value={search.lastName}
                      onChange={handleSearchChange("lastName")}
                    />
                    <input
                      type="text"
                      placeholder="Имя"
                      value={search.firstName}
                      onChange={handleSearchChange("firstName")}
                    />
                    <input
                      type="text"
                      placeholder="Отчество"
                      value={search.patronymic}
                      onChange={handleSearchChange("patronymic")}
                    />
                    <input
                      type="text"
                      placeholder="Город / Адрес"
                      value={search.address}
                      onChange={handleSearchChange("address")}
                    />

                    <div className={styles.phone_split}>
                      <div className={styles.country_code}>
                         
                        <span>+7</span> 
                      </div>
                      <input
                        type="text"
                        placeholder="Телефон"
                        className={styles.phone_number_input}
                        value={search.phone}
                        onChange={handleSearchChange("phone")}
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
                {filteredCards.length === 0 ? (
                  <p>{hasFilters ? "Ничего не найдено" : "Список пока что пуст"}</p>
                ) : (
                  filteredCards.map(card => (
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
