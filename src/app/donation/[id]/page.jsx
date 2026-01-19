import Header from "@/components/Header/Header";
import DonationTracker from "@/components/DonationTracker/DonationTracker";
import ResultCard from "@/components/Main/ResultCard";
import { notFound } from "next/navigation";
import styles from "@/styles/StaticPage.module.css";
 
export const dynamicParams = false;

async function getAllCards() {
  const res = await fetch(
    "https://raw.githubusercontent.com/court-kebe/docs/refs/heads/main/export.json",
    { next: { revalidate: 3600 } } // кэш на 1 час, можно поставить 0 для всегда свежих
  );

  if (!res.ok) throw new Error("Не удалось загрузить карточки");

  const cards = await res.json();
  return cards;
}


export async function generateStaticParams() {
  const cards = await getAllCards();
  return cards
    .filter((item) => item.id !== undefined && item.id !== null)
    .map((item) => ({
      id: String(item.id),
    }));
}

export default async function DonationPage({ params }) {
  const { id } = await params;
  const cards = await getAllCards();
  const card = cards.find(item => String(item.id) === String(id));

  if (!card) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          {/* <DonationTracker initialGoal={10000} /> */}
          <ResultCard card={card} showVote={false} />
        </div>
      </main>
    </>
  );
}
