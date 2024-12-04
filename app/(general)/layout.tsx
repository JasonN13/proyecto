import NavBar from "@/Components/NavBar";

export default function NavbarLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>

      <NavBar/>
      {children}
    </main>
  );
}