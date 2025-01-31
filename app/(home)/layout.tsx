/*************  ✨ Codeium Command ⭐  *************/

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/header/Header";



export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
/******  666c37ea-7276-41a0-b098-fb2a2fc78112  *******/