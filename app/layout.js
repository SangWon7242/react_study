import "./globals.css";

export const metadata = {
  title: "리액트 스터디",
  description: "방구석 코딩에 리액트 스터디",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body> {children} </body>{" "}
    </html>
  );
}
