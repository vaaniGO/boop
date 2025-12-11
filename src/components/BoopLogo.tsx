import { cn } from "@/lib/utils";

interface BoopLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl",
  xl: "text-8xl",
};

export const BoopLogo = ({ size = "lg", animated = true, className }: BoopLogoProps) => {
  const letters = [
    { letter: "B", color: "text-boop-blue", delay: "0ms" },
    { letter: "O", color: "text-boop-purple", delay: "100ms" },
    { letter: "O", color: "text-boop-orange", delay: "200ms" },
    { letter: "P", color: "text-boop-green", delay: "300ms" },
  ];

  return (
    <div className={cn("flex items-center font-bold font-sans-serif", sizeMap[size], className)}>
      {letters.map((item, index) => (
        <span
          key={index}
          className={cn(
            item.color,
            "transition-transform duration-300 hover:scale-110",
            animated && "animate-slide-up"
          )}
          style={{
            animationDelay: item.delay,
            animationFillMode: "backwards"
          }}
        >
          {item.letter}
        </span>
      ))}
    </div>
  );
};
