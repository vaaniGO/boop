import { Header } from "@/components/Header";
import { BoopLogo } from "@/components/BoopLogo";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <BoopLogo size="sm" className="justify-center mb-3" animated={false} />
          <p className="text-muted-foreground text-sm">
            © 2024 BOOP: Write Right Code! — Ashoka University
          </p>
        </div>
      </footer>
    </div>
  );
};
