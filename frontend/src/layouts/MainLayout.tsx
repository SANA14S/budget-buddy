import Navbar from "../components/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>

      <footer className="text-center p-4 text-sm text-base-content opacity-70">
        © 2025 Jyotsana Singh. Built with 💙 using React & Tailwind.
      </footer>
    </div>
  );
}


export default MainLayout;
