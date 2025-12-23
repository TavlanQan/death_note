import Header from "@/components/Header/Header";

const pageStyles = {
  color: "#fff",
  padding: "80px 40px",
  maxWidth: "960px",
  margin: "0 auto",
  lineHeight: 1.6,
};

export default function WantedPage() {
  return (
    <>
      <Header />
      <main style={pageStyles}>
        <h1>Розыск</h1>
        <p>
          Тут буде розділ із детальним пошуком та критеріями, щоб швидко
          знаходити фігурантів списку. Контент оновиться після підключення
          бекенду.
        </p>
      </main>
    </>
  );
}
