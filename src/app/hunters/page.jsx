import Header from "@/components/Header/Header";

const pageStyles = {
  color: "#fff",
  padding: "80px 40px",
  maxWidth: "960px",
  margin: "0 auto",
  lineHeight: 1.6,
};

export default function HuntersPage() {
  return (
    <>
      <Header />
      <main style={pageStyles}>
        <h1>Охотникам</h1>
        <p>
          Інструкції та брифінги для тих, хто допомагає у пошуку. Тут з’являться
          оновлення по задачах та інструментах.
        </p>
      </main>
    </>
  );
}
