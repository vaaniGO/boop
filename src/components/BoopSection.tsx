import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BoopSectionProps {
  letter: "B" | "O" | "P";
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}

const letterColors = {
  B: {
    bg: "bg-boop-blue/10",
    text: "text-boop-blue",
    border: "border-boop-blue/30",
  },
  O: {
    bg: "bg-boop-orange/10",
    text: "text-boop-orange",
    border: "border-boop-orange/30",
  },
  P: {
    bg: "bg-boop-pink/10",
    text: "text-boop-pink",
    border: "border-boop-pink/30",
  },
};

export const BoopSection = ({ letter, title, subtitle, children, className }: BoopSectionProps) => {
  const colors = letterColors[letter];

  return (
    <section className={cn("py-16", className)}>
      <div className="flex items-start gap-6 mb-8">
        <div className={cn(
          "w-20 h-20 rounded-2xl flex items-center justify-center",
          "text-5xl font-serif font-bold",
          colors.bg,
          colors.text,
          "border",
          colors.border
        )}>
          {letter}
        </div>
        <div>
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-1">
            {title}
          </h2>
          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="pl-0 md:pl-26">
        {children}
      </div>
    </section>
  );
};
