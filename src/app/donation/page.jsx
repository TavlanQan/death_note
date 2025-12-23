import Header from "@/components/Header/Header";

const pageStyles = {
  color: "#fff",
  padding: "80px 40px",
  maxWidth: "960px",
  margin: "0 auto",
  lineHeight: 1.6,
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main style={pageStyles}>
        <h1>Поддержать</h1>
        <p>
          Тут з’являться способи фінансової та інформаційної підтримки проєкту.
          Додамо інтеграції донатів і контактні дані найближчим часом.
        </p>
      </main>
    </>
  );
}
