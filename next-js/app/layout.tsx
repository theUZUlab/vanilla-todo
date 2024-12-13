import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `UZU's Todo`,
  description: '간단하고 강력한 투두리스트 애플리케이션',
  keywords: ['todo', '투두', 'todolist', '투두리스트', '할 일 관리'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  );
}
