import Header from "@/components/Header/Header";
import DonationTracker from "@/components/DonationTracker/DonationTracker";
import ResultCard from "@/components/Main/ResultCard";
import cards from "@/../public/cards.json";
import { notFound } from "next/navigation";

const layoutStyles = {
  color: "#fff",
  padding: "60px 24px",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};

export default async function DonationPage({ params }) {
  const { id } = await params;
  const card = cards.find(item => item.id === Number(id));
  if (!card) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main style={layoutStyles}>

        <div>
          
          <ResultCard
            card={card}
            showVote={false}
          />
        </div>
      </main>
    </>
  );
}
