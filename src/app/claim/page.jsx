import Header from "@/components/Header/Header";

const pageStyles = {
  color: "#fff",
  padding: "80px 40px",
  maxWidth: "960px",
  margin: "0 auto",
  lineHeight: 1.6,
};

export default function ClaimPage() {
  return (
    <>
      <Header />
      <main style={pageStyles}>
        <h1>Подать иск</h1>
        <p>
          Тут буде форма та інструкції, як подати юридичний запит або апеляцію.
          Після підключення API з’являться інтерактивні поля та валідації.
        </p>
      </main>
    </>
  );
}
