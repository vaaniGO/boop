import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  startLine?: number;
  className?: string;
  title?: string;
}

export const CodeBlock = ({ code, startLine = 1, className, title }: CodeBlockProps) => {
  const lines = code.split('\n');

  // Tokenize and colorize a line of OCaml code
  const tokenizeLine = (line: string) => {
    const tokens: { text: string; type: string }[] = [];
    const keywords = ['let', 'type', 'of', 'match', 'with', 'if', 'then', 'else', 'fun', 'rec', 'in'];
    const constructors = ['Zero', 'Succ', 'Some', 'None'];
    
    // Simple tokenizer
    let remaining = line;
    while (remaining.length > 0) {
      // Check for comments
      const commentMatch = remaining.match(/^\(\*.*?\*\)/);
      if (commentMatch) {
        tokens.push({ text: commentMatch[0], type: 'comment' });
        remaining = remaining.slice(commentMatch[0].length);
        continue;
      }
      
      // Check for keywords and identifiers
      const wordMatch = remaining.match(/^[a-zA-Z_][a-zA-Z0-9_']*/);
      if (wordMatch) {
        const word = wordMatch[0];
        if (keywords.includes(word)) {
          tokens.push({ text: word, type: 'keyword' });
        } else if (constructors.includes(word)) {
          tokens.push({ text: word, type: 'constructor' });
        } else {
          tokens.push({ text: word, type: 'identifier' });
        }
        remaining = remaining.slice(word.length);
        continue;
      }
      
      // Check for operators and punctuation
      const opMatch = remaining.match(/^(->|=|<|>|\||\+|-|\*|\/|\(|\)|,|;|')/);
      if (opMatch) {
        tokens.push({ text: opMatch[0], type: 'operator' });
        remaining = remaining.slice(opMatch[0].length);
        continue;
      }
      
      // Default: single character
      tokens.push({ text: remaining[0], type: 'default' });
      remaining = remaining.slice(1);
    }
    
    return tokens;
  };

  const getTokenClass = (type: string) => {
    switch (type) {
      case 'keyword': return 'text-code-keyword';
      case 'constructor': return 'text-boop-pink';
      case 'comment': return 'text-code-comment';
      case 'operator': return 'text-code-foreground/70';
      default: return 'text-code-foreground';
    }
  };

  return (
    <div className={cn("rounded-xl overflow-hidden bg-code-bg shadow-2xl", className)}>
      {title && (
        <div className="px-4 py-2 bg-code-bg border-b border-white/10 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-code-foreground/60 text-sm font-mono ml-2">{title}</span>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm leading-relaxed font-mono">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex">
              <span className="text-code-line-number w-8 text-right pr-4 select-none">
                {startLine + lineIndex}
              </span>
              <code className="flex-1">
                {line.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  tokenizeLine(line).map((token, tokenIndex) => (
                    <span key={tokenIndex} className={getTokenClass(token.type)}>
                      {token.text}
                    </span>
                  ))
                )}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};
