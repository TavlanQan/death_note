'use client';
import { useState, useEffect } from "react";
import styles from "./Main.module.css"
import { usePathname } from "next/navigation";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { useRef } from 'react'


function Main() {

  const [donationAmount, setDonationAmount] = useState(0);
  const goalAmount = 10000;
  const pathname = usePathname();

  const [cards, setCards] = useState([]);


  useEffect(() => {
  
    const interval = setInterval(() => {
      setDonationAmount((prev) => Math.min(prev + 100, goalAmount));
    }, 100);
  
    return () => clearInterval(interval);
    }, []);

  useEffect(() => {
    fetch("/cards.json")
      .then(res => res. json())
      .then(data => setCards(data))
      .catch(err => console.error("Помилка завантаження cards.json", err));
  });
  


  return (
    <>
      <main className={styles.wrapper}>

        <aside className={styles.vertical_logo}>
          <div className={styles.vertical_logo__img}>
            <img src="/left_img.png" alt="Death Note vertical logo" />
          </div>
        </aside>


        <div className={styles.main}>
          
          <section role="donation-information" className={styles.donation_section}>
              
              <div className={styles.donation_field} >
                <div className={styles.donation_fill_block}/>
                <div 
                className={styles.donation_fill}
                style={{width: `${ ( donationAmount / goalAmount) * 100}%` }}
                >
                <img 
                  src="/prg.svg"
                  style={{width: `${(donationAmount / goalAmount) * 100}%`}}
                />
              
              </div> 
                
              </div>

              <div className={styles.donation_count}>
                ${donationAmount} of {goalAmount}
              </div>
              
              <div className={styles.donation_button}>
                <a href="/donate">
                  <img role="donate" src="/DONATE.png"></img>
                </a>
              </div>

          </section>
          
          <section role="menu-categories" className={styles.menu}>
            <ul className={styles.menu_items}>
              <a href="/" className={pathname === "/" ? "active" : ""}><li>Категория меню</li></a>
              <a href="/2" className={pathname === "#2" ? "active" : ""}><li>Категория меню</li></a>
              <a href="/3" className={pathname === "#3" ? "active" : ""}><li>Категория меню</li></a>
              <a href="/4" className={pathname === "#4" ? "active" : ""}><li>Категория меню</li></a>
              <a href="/5" className={pathname === "#5" ? "active" : ""}><li>Категория меню</li></a>
              <a href="/6" className={pathname === "#6" ? "active" : ""}><li>Категория меню</li></a>
            </ul>
        
          </section>

          <section role="blacklist-information" className={styles.blacklist_root}>


              <article className={styles.search_block}>
                <div className={styles.search_block__form}>
                  <form className={styles.form}>
                    <h3>РАСШИРЕННЫЙ ПОИСК</h3>
                    <input type="text" placeholder="Фамилия" />
                    <input type="text" placeholder="Имя" />
                    <input type="text" placeholder="Отчество" />
                    <input type="text" placeholder="Адрес" />

                    <div className={styles.phone_split}>
                      <div className={styles.country_code}>
                        {/* Іконка прапора, заміни шлях на свій */}
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
                {cards.length === 0 ? (<p>Список пока что пуст</p>) : ( cards.map(card => (
                  <div key={card.id} className={styles.result_block__card}>
                    
                    <div className={styles.result_block__card_image_status}>
                      <img src={card.photo} alt={"card-"+card.id} />
                      <p>Статус:<br/><span>{card.status}</span></p>
                    </div>

                    <div className={styles.result_block__card_info}>

                      <div className={styles.result_block__card_info_text}>
                        <h2>{card.name}</h2>
                        <ul className={styles.info_list}>
                          <li>
                            <span className={styles.icon}><img src="/icons/home.svg" alt="" /></span>
                            {card.location}
                          </li>
                          <li>
                            <span className={styles.icon}><img src="/icons/cake.svg" alt="" /></span>
                            {card.birth_date}
                          </li>
                          <li>
                            <span className={styles.icon}><img src="/icons/call.svg" alt="" /></span>
                            {card.phone}
                          </li>
                          <li>
                            <span className={styles.icon}><img src="/icons/info.svg" alt="" /></span>
                            {card.deathlist_reason}
                          </li>
                        </ul>

                      </div>

                      <div className={styles.actions}>
                          <button className={styles.chalk_button}>ОБЖАЛОВАТЬ</button>
                          <button className={styles.chalk_button}>ПОДАТЬ ИСК</button>
                          <button className={styles.chalk_button}>ПРОГОЛОСОВАТЬ</button>
                      </div>

                    </div>

                  </div>
                )))}
            </article>

          </section>
        </div>
      </main>
    </>
  );
}
export default Main;