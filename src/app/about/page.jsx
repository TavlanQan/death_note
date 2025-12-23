import Header from "@/components/Header/Header";

const pageStyles = {
  color: "#fff",
  padding: "80px 40px",
  maxWidth: "960px",
  margin: "0 auto",
  lineHeight: 1.6,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={pageStyles}>
        <h1>О проекте</h1>
        <p>
          Розділ про місію, команду та джерела даних. Додамо блоки зі статистикою
          й roadmap, щойно буде контент.
        </p>
      </main>
    </>
  );
}
