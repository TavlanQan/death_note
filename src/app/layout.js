import '../styles/main.css';

export const metadata = {
  title: 'DeXth Note',
  description: 'Публичный реестр преступников поддерживаемых государством-террористом.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

