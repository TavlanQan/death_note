import Header from "@/components/Header/Header";
import DonationTracker from "@/components/DonationTracker/DonationTracker";
import ResultCard from "@/components/Main/ResultCard";
import cards from "@/../public/cards.json";
import { notFound } from "next/navigation";
import styles from "@/styles/StaticPage.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return cards
    .filter((item) => item.id !== undefined && item.id !== null)
    .map((item) => ({
      id: String(item.id),
    }));
}

export default async function DonationPage({ params }) {
  const { id } = await params;
  const card = cards.find(item => item.id === Number(id));
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
