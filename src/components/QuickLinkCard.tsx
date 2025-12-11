import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface QuickLinkCardProps {
  title: string;
  href: string;
  icon?: LucideIcon;
  variant?: "blue" | "orange" | "pink" | "default";
  external?: boolean;
}

const variantStyles = {
  blue: "bg-boop-blue/10 hover:bg-boop-blue/20 border-boop-blue/20 hover:border-boop-blue/40",
  orange: "bg-boop-orange/10 hover:bg-boop-orange/20 border-boop-orange/20 hover:border-boop-orange/40",
  pink: "bg-boop-pink/10 hover:bg-boop-pink/20 border-boop-pink/20 hover:border-boop-pink/40",
  default: "bg-secondary hover:bg-secondary/80 border-border hover:border-primary/30",
};

export const QuickLinkCard = ({ 
  title, 
  href, 
  icon: Icon, 
  variant = "default",
  external = false 
}: QuickLinkCardProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300",
        "hover:shadow-md hover:-translate-y-0.5",
        variantStyles[variant]
      )}
    >
      {Icon && <Icon className="w-5 h-5 text-foreground/70" />}
      <span className="font-medium text-foreground">{title}</span>
    </a>
  );
};
