import { Layout } from "@/components/Layout";
import { BoopLogo } from "@/components/BoopLogo";
import { CodeBlock } from "@/components/CodeBlock";
import { BoopSection } from "@/components/BoopSection";
import { DefinitionCard } from "@/components/DefinitionCard";
import {
  ArrowRight,
  Users,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

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
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [isOperationalOpen, setIsOperationalOpen] = useState(false);
  const [isOcamlOpen, setIsOcamlOpen] = useState(false);
  const [isProofOpen, setIsProofOpen] = useState(false);

  return (
    <Layout>
      {/* Minimal Clean Header */}
      <header className="border-b border-neutral-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <BoopLogo size="lg" />
            </div>

            <h1 className="text-4xl font-bold text-neutral-900 mb-6">
              Write Right Code!
            </h1>

            <div className="flex items-center justify-center gap-3 text-sm text-neutral-600">
              <Users className="w-4 h-4" />
              <span>Aalok Thakkar, Vaani Goenka</span>
              <span className="text-neutral-300">•</span>
              <span>Ashoka University</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Correctness Definition */}
        <section id="correctness" className="py-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Correctness <span className="text-base font-normal text-neutral-500 italic">(informal)</span>
          </h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-12">
            is the provable property of a function which affirms that it does exactly what it is intended to do.
          </p>

          <p className="text-base text-neutral-900 mb-8 font-medium">But,</p>

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

          <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
            <p className="text-neutral-700 leading-relaxed">
              These three disciplines are not the same, yet they are often conflated. To reinvent computer science is to reassert its scientific core. By making coding an easy task, Artificial Intelligence itself has given us an opportunity to reclaim what is often overlooked in CS pedagogy: <span className="text-neutral-900 font-semibold">reasoning rigorously, abstracting elegantly, inventing deliberately, and valuing ideas over outputs</span>. Machines may code, we must think.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section id="overview" className="py-16 border-t border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Overview</h2>

          <p className="text-neutral-700 mb-6">Consider the following problem:</p>

          <blockquote className="border-l-4 border-[#ef7f08] pl-6 py-4 bg-neutral-50 rounded-r-lg mb-8">
            <p className="text-neutral-900">
              The natural numbers can be defined as: <code className="bg-white text-neutral-700 px-2 py-1 rounded text-sm border border-neutral-200 font-mono">type nat = Zero | Succ of nat</code>. Define a function <code className="bg-white text-neutral-700 px-2 py-1 rounded text-sm border border-neutral-200 font-mono">div</code> such that it takes two natural numbers a and b, and returns the quotient and the remainder when a is divided by b.
            </p>
          </blockquote>

          <p className="text-neutral-700 leading-relaxed mb-8">
            This problem operates within a constructive type system based on Peano arithmetic, where natural numbers are represented inductively. The type <code className="bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded text-sm font-mono">nat</code> compels students to explicitly engage with recursive decomposition and constructive reasoning.
          </p>

          <div className="mb-12">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Operations on nat in OCaml</h3>
            <CodeBlock
              code={heroCode}
              title="nat_operations.ml"
              className="mb-4"
            />
            <p className="text-neutral-700 leading-relaxed">
              The intuitive notion of addition as repeated successors or multiplication as repeated addition translates seamlessly into programming. Division, however, requires simultaneously tracking how many times subtraction occurred (the quotient)—a dual-tracking requirement that fundamentally challenges sequential thinking patterns.
            </p>
          </div>
        </section>

        {/* BOOP Methodology */}
        <section className="py-16 border-t border-neutral-200">
          <div className="mb-12">
            <p className="text-base text-neutral-700 leading-relaxed">
              There is a need to approach programs in a way that does not undermine any of the problems' requirements and encourages a robust construction of the solution. <span className="font-bold text-neutral-900">BOOP</span> is a tool to systematically derive a correct implementation from mathematical reasoning. It is a language-agnostic paradigm that places emphasis on the logical structure of the code.
            </p>
          </div>

          <div className="space-y-10">
            {/* Blueprint Section */}
            <BoopSection
              letter="B"
              title="Blueprint"
              subtitle="The specifications that describe correctness"
              color="blue"
            >
              <p className="text-neutral-700 leading-relaxed mb-6">
                The blueprint outlines the specifications of the problem that describe its correctness. This formalism compels students to reason explicitly about program correctness before engaging with implementation details.
              </p>

              <button
                onClick={() => setIsBlueprintOpen(!isBlueprintOpen)}
                className="flex items-center gap-2 text-[#3674B5] hover:text-[#2a5a8f] transition-colors mb-4 text-sm font-medium"
              >
                {isBlueprintOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {isBlueprintOpen ? "Hide" : "Show"} Blueprint for div
              </button>

              {isBlueprintOpen && (
                <div className="bg-white border-l-4 border-[#3674B5] rounded-r-lg p-6 animate-fade-in">
                  <h4 className="font-semibold text-neutral-900 mb-3">Blueprint for div:</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• Input: Two natural numbers <code className="text-[#3674B5] font-mono">a</code> and <code className="text-[#3674B5] font-mono">b</code></li>
                    <li>• Output: A pair <code className="text-[#3674B5] font-mono">(q, r)</code> where <code className="text-[#3674B5] font-mono">a = b × q + r</code> and <code className="text-[#3674B5] font-mono">r &lt; b</code></li>
                    <li>• Edge case: Division by zero returns <code className="text-[#3674B5] font-mono">None</code></li>
                  </ul>
                </div>
              )}
            </BoopSection>

            {/* Operational Steps Section */}
            <BoopSection
              letter="O"
              title="Operational Steps"
              subtitle="Human-comprehensible steps to solve the problem"
              color="purple"
            >
              <p className="text-neutral-700 leading-relaxed mb-6">
                These are human-comprehensible steps to solve the problem at hand. Later, they can be seen as an accurate and complete translation of the program.
              </p>

              <button
                onClick={() => setIsOperationalOpen(!isOperationalOpen)}
                className="flex items-center gap-2 text-[#7F55B1] hover:text-[#66458f] transition-colors mb-4 text-sm font-medium"
              >
                {isOperationalOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {isOperationalOpen ? "Hide" : "Show"} Operational Steps for div
              </button>

              {isOperationalOpen && (
                <div className="bg-white border-l-4 border-[#7F55B1] rounded-r-lg p-6 animate-fade-in">
                  <h4 className="font-semibold text-neutral-900 mb-3">Operational Steps for div:</h4>
                  <ol className="space-y-2 text-neutral-700 text-sm list-decimal list-inside">
                    <li>Check if <code className="text-[#7F55B1] font-mono">b = Zero</code>. If so, return <code className="text-[#7F55B1] font-mono">None</code></li>
                    <li>Initialize quotient <code className="text-[#7F55B1] font-mono">q = Zero</code></li>
                    <li>While <code className="text-[#7F55B1] font-mono">a ≥ b</code>: subtract b from a, increment q</li>
                    <li>Return <code className="text-[#7F55B1] font-mono">Some (q, a)</code> where a is now the remainder</li>
                  </ol>
                </div>
              )}
            </BoopSection>

            {/* OCaml Code Section */}
            <BoopSection
              letter="O"
              title="OCaml Code"
              subtitle="Implementation in OCaml syntax"
              color="orange"
            >
              <p className="text-neutral-700 leading-relaxed mb-6">
                This is the implementation of the Operational Steps in OCaml syntax (or any other programming language). We keep OCaml in the name because it results in a fun acronym!
              </p>

              <button
                onClick={() => setIsOcamlOpen(!isOcamlOpen)}
                className="flex items-center gap-2 text-[#ef7f08] hover:text-[#d46f07] transition-colors mb-4 text-sm font-medium"
              >
                {isOcamlOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {isOcamlOpen ? "Hide" : "Show"} OCaml Code for div
              </button>

              {isOcamlOpen && (
                <div className="animate-fade-in">
                  <CodeBlock
                    code={divCode}
                    title="div.ml"
                    startLine={1}
                  />
                </div>
              )}
            </BoopSection>

            {/* Proof Section */}
            <BoopSection
              letter="P"
              title="Proof"
              subtitle="Proof of correctness of the program"
              color="green"
            >
              <p className="text-neutral-700 leading-relaxed mb-6">
                Finally, this is a proof of correctness of the program. It shows that the implementation (OCaml code), obeys the specifications (Blueprint).
              </p>

              <button
                onClick={() => setIsProofOpen(!isProofOpen)}
                className="flex items-center gap-2 text-[#096B68] hover:text-[#075550] transition-colors mb-4 text-sm font-medium"
              >
                {isProofOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {isProofOpen ? "Hide" : "Show"} Proof for div
              </button>

              {isProofOpen && (
                <div className="bg-white border-l-4 border-[#096B68] rounded-r-lg p-6 animate-fade-in">
                  <h4 className="font-semibold text-neutral-900 mb-3">Proof sketch for div:</h4>
                  <p className="text-neutral-700 mb-3 text-sm">
                    <strong className="text-[#096B68]">Invariant:</strong> At each recursive call, <code className="text-[#096B68] font-mono">a = original_a - b × q</code>
                  </p>
                  <p className="text-neutral-700 text-sm">
                    <strong className="text-[#096B68]">Termination:</strong> The value of <code className="text-[#096B68] font-mono">a</code> strictly decreases with each recursive call (by <code className="text-[#096B68] font-mono">b</code>), and the recursion stops when <code className="text-[#096B68] font-mono">a &lt; b</code>.
                  </p>
                </div>
              )}
            </BoopSection>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 border-t border-neutral-200">
          <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 text-center">
            <p className="text-base text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              This sequence embodies the principle of <span className="font-semibold text-neutral-900">correct-by-construction programming</span>, where careful specification and methodical decomposition lead naturally to verifiable implementations. By internalizing this systematic approach, students develop the discipline necessary for tackling complex computational problems with confidence and rigour.
            </p>
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-16" />
      </div>
    </Layout>
  );
};

export default Index;
