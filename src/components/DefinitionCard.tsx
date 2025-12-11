import { cn } from "@/lib/utils";

interface DefinitionCardProps {
  term: string;
  definition: string;
  className?: string;
}

export const DefinitionCard = ({ term, definition, className }: DefinitionCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-card border border-border",
      "hover:shadow-lg hover:border-primary/20 transition-all duration-300",
      className
    )}>
      <h3 className="text-lg font-semibold text-foreground mb-2">{term}</h3>
      <p className="text-muted-foreground leading-relaxed">{definition}</p>
    </div>
  );
};
