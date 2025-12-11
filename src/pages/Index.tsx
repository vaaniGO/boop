import { BoopLogo } from "@/components/BoopLogo";
import { CodeBlock } from "@/components/CodeBlock";
import { QuickLinkCard } from "@/components/QuickLinkCard";
import { BoopSection } from "@/components/BoopSection";
import { DefinitionCard } from "@/components/DefinitionCard";
import { 
  Trophy, 
  BookOpen, 
  CheckCircle, 
  TestTube, 
  FileText, 
  Github,
  ArrowRight,
  Users
} from "lucide-react";

const heroCode = `type nat = Zero | Succ of nat

let rec add a b =
  match a with
  | Zero -> b
  | Succ a' -> Succ (add a' b)

let rec mult a b =
  match a with
  | Zero -> Zero
  | Succ a' -> add b (mult a' b)`;

const divCode = `let div a b =
  if b = Zero then None
  else
    let rec aux a q =
      if lt a b then Some (q, a)
      else aux (sub a b) (Succ q)
    in aux a Zero`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{ background: "var(--gradient-hero)" }}
        />
        
        {/* Code Background */}
        <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden">
          <CodeBlock 
            code={heroCode}
            startLine={34}
            className="transform -rotate-1 scale-110 opacity-60"
          />
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <BoopLogo size="xl" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 animate-fade-in">
              Write Right Code!
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Users className="w-4 h-4" />
              <span>Aalok Thakkar, Vaani Goenka</span>
              <span className="text-border">|</span>
              <span>Ashoka University</span>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              <QuickLinkCard 
                title="Results" 
                href="#results" 
                icon={Trophy}
                variant="blue"
              />
              <QuickLinkCard 
                title="Usage" 
                href="#usage" 
                icon={BookOpen}
                variant="orange"
              />
              <QuickLinkCard 
                title="Correctness" 
                href="#correctness" 
                icon={CheckCircle}
                variant="pink"
              />
              <QuickLinkCard 
                title="Testing" 
                href="#testing" 
                icon={TestTube}
                variant="blue"
              />
              <QuickLinkCard 
                title="Publication" 
                href="https://arxiv.org/abs/2507.22085" 
                icon={FileText}
                variant="orange"
                external
              />
              <QuickLinkCard 
                title="GitHub" 
                href="https://github.com/vaaniGO/ICSLang/tree/main" 
                icon={Github}
                variant="pink"
                external
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-5xl">
        {/* Correctness Definition */}
        <section id="correctness" className="py-16">
          <div className="flex items-center gap-3 mb-6">
            <ArrowRight className="w-5 h-5 text-boop-blue" />
            <h2 className="text-3xl font-serif font-semibold">
              Correctness <span className="text-sm font-sans text-muted-foreground italic">(informal)</span>
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            is the provable property of a function by which affirms that it does exactly what it is intended to do.
          </p>

          <p className="text-lg text-foreground mb-8">But,</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <DefinitionCard 
              term="Computer Science is..."
              definition="The science of the provable method of computation."
            />
            <DefinitionCard 
              term="Coding is..."
              definition="Writing in a language that can be understood meaningfully by machines."
            />
            <DefinitionCard 
              term="Programming is..."
              definition="Reasoning about code (e.g. design choices, structure)"
            />
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <p className="text-muted-foreground leading-relaxed">
              These three disciplines are not the same, yet they are often conflated. To reinvent computer science is to reassert its scientific core. By making coding an easy task, Artificial Intelligence itself has given us an opportunity to reclaim what is often overlooked in CS pedagogy: <span className="text-foreground font-medium">reasoning rigorously, abstracting elegantly, inventing deliberately, and valuing ideas over outputs</span>. Machines may code, we must think.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section id="overview" className="py-16 border-t border-border">
          <h2 className="text-3xl font-serif font-semibold mb-8">Overview</h2>
          
          <p className="text-muted-foreground mb-6">Consider the following problem:</p>
          
          <blockquote className="border-l-4 border-boop-orange pl-6 py-4 bg-boop-orange/5 rounded-r-xl mb-8">
            <p className="text-foreground italic">
              The natural numbers can be defined as: <code className="bg-code-bg text-code-foreground px-2 py-1 rounded text-sm">type nat = Zero | Succ of nat</code>. Define a function <code className="bg-code-bg text-code-foreground px-2 py-1 rounded text-sm">div</code> such that it takes two natural numbers a and b, and returns the quotient and the remainder when a is divided by b.
            </p>
          </blockquote>

          <p className="text-muted-foreground leading-relaxed mb-8">
            This problem operates within a constructive type system based on Peano arithmetic, where natural numbers are represented inductively. The type <code className="bg-secondary px-2 py-0.5 rounded text-sm">nat</code> compels students to explicitly engage with recursive decomposition and constructive reasoning.
          </p>

          <div className="mb-12">
            <h3 className="text-xl font-serif font-semibold mb-4">Operations on nat in OCaml</h3>
            <CodeBlock 
              code={heroCode}
              title="nat_operations.ml"
              className="mb-6"
            />
            <p className="text-muted-foreground leading-relaxed">
              The intuitive notion of addition as repeated successors or multiplication as repeated addition translates seamlessly into programming. Division, however, requires simultaneously tracking how many times subtraction occurred (the quotient)—a dual-tracking requirement that fundamentally challenges sequential thinking patterns.
            </p>
          </div>
        </section>

        {/* BOOP Methodology */}
        <section className="py-16 border-t border-border">
          <div className="mb-12">
            <p className="text-lg text-foreground leading-relaxed">
              There is a need to approach programs in a way that does not undermine any of the problems' requirements and encourages a robust construction of the solution. <span className="font-semibold">BOOP</span> is a tool to systematically derive a correct implementation from mathematical reasoning. It is a language-agnostic paradigm that places emphasis on the logical structure of the code.
            </p>
          </div>

          <BoopSection
            letter="B"
            title="Blueprint"
            subtitle="The specifications that describe correctness"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              The blueprint outlines the specifications of the problem that describe its correctness. This formalism compels students to reason explicitly about program correctness before engaging with implementation details.
            </p>
            <div className="bg-boop-blue/5 border border-boop-blue/20 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Blueprint for div:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Input: Two natural numbers <code className="text-boop-blue">a</code> and <code className="text-boop-blue">b</code></li>
                <li>• Output: A pair <code className="text-boop-blue">(q, r)</code> where <code className="text-boop-blue">a = b × q + r</code> and <code className="text-boop-blue">r &lt; b</code></li>
                <li>• Edge case: Division by zero returns <code className="text-boop-blue">None</code></li>
              </ul>
            </div>
          </BoopSection>

          <BoopSection
            letter="O"
            title="Operational Steps"
            subtitle="Human-comprehensible steps to solve the problem"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              These are human-comprehensible steps to solve the problem at hand. Later, they can be seen as an accurate and complete translation of the program.
            </p>
            <div className="bg-boop-orange/5 border border-boop-orange/20 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Operational Steps for div:</h4>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Check if <code className="text-boop-orange">b = Zero</code>. If so, return <code className="text-boop-orange">None</code></li>
                <li>Initialize quotient <code className="text-boop-orange">q = Zero</code></li>
                <li>While <code className="text-boop-orange">a ≥ b</code>: subtract b from a, increment q</li>
                <li>Return <code className="text-boop-orange">Some (q, a)</code> where a is now the remainder</li>
              </ol>
            </div>
          </BoopSection>

          <BoopSection
            letter="O"
            title="OCaml Code"
            subtitle="Implementation in OCaml syntax"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is the implementation of the Operational Steps in OCaml syntax (or any other programming language). We keep OCaml in the name because it results in a fun acronym!
            </p>
            <CodeBlock 
              code={divCode}
              title="div.ml"
              startLine={1}
            />
          </BoopSection>

          <BoopSection
            letter="P"
            title="Proof"
            subtitle="Proof of correctness of the program"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Finally, this is a proof of correctness of the program. It shows that the implementation (OCaml code), obeys the specifications (Blueprint).
            </p>
            <div className="bg-boop-pink/5 border border-boop-pink/20 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Proof sketch for div:</h4>
              <p className="text-muted-foreground mb-4">
                <strong>Invariant:</strong> At each recursive call, <code className="text-boop-pink">a = original_a - b × q</code>
              </p>
              <p className="text-muted-foreground">
                <strong>Termination:</strong> The value of <code className="text-boop-pink">a</code> strictly decreases with each recursive call (by <code className="text-boop-pink">b</code>), and the recursion stops when <code className="text-boop-pink">a &lt; b</code>.
              </p>
            </div>
          </BoopSection>
        </section>

        {/* Conclusion */}
        <section className="py-16 border-t border-border">
          <div className="bg-gradient-to-br from-boop-blue/10 via-boop-orange/10 to-boop-pink/10 rounded-2xl p-8 text-center">
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              This sequence embodies the principle of <span className="font-semibold">correct-by-construction programming</span>, where careful specification and methodical decomposition lead naturally to verifiable implementations. By internalizing this systematic approach, students develop the discipline necessary for tackling complex computational problems with confidence and rigour.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <BoopLogo size="md" className="justify-center mb-4" />
          <p className="text-muted-foreground text-sm">
            © 2024 BOOP: Write Right Code! — Ashoka University
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
