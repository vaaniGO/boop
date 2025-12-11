import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ExternalLink, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const functionalParadigms = [
  {
    title: "Usage of built-in functions",
    description: "Native implementations are encouraged over the use of built-in functions like List.rev. This is to encourage a comprehensive understanding of computation at all layers of the code."
  },
  {
    title: "Implicit typing",
    description: "All functions must be explicitly typed. This is to develop an appreciation for type correctness and robustness of programs."
  },
  {
    title: "Imperative constructs",
    description: "Imperative constructs like mutation and variable reassignment contradict functional programming paradigms."
  },
  {
    title: "Obscuring behaviour",
    description: "Nested functions defined in local scope, and functions with anonymous inputs obscure algorithmic structure."
  }
];

const OnCorrectness = () => {
  const [isLiterateOpen, setIsLiterateOpen] = useState(false);
  const [isFunctionalOpen, setIsFunctionalOpen] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <section className="py-16 border-b border-neutral-200">
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">
            On Correctness
          </h1>
          <p className="text-base text-neutral-700 leading-relaxed">
            When we say code is "correct," we mean its behavior invariably matches our a priori expectations. Correctness represents a faithful translation from sound mathematical intent to machine execution. Novice programmers often conflate code that passes test cases with code that is correct in an absolute sense.
          </p>
        </section>

        {/* Wing Quote */}
        <section className="py-12">
          <blockquote className="border-l-4 border-[#7F55B1] pl-6 py-4 bg-neutral-50 rounded-r-lg">
            <a
              href="https://dl.acm.org/doi/10.1145/1118178.1118215"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7F55B1] hover:text-[#66458f] transition-colors mb-2 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Wing (2006)
            </a>
            <p className="text-neutral-900">
              Wing explicitly mentions that computational thinking involves using "invariants to describe a system's behaviour succinctly and declaratively".
            </p>
          </blockquote>
        </section>

        {/* Need for Integration */}
        <section className="py-12 border-t border-neutral-200">
          <p className="text-neutral-700 leading-relaxed mb-8">
            There remains a need to integrate into novice learning environments the need for correct-by-construction thinking styles and programming styles.
          </p>

          <blockquote className="border-l-4 border-[#3674B5] pl-6 py-4 bg-neutral-50 rounded-r-lg">
            <a
              href="https://dl.acm.org/doi/10.1145/2858036.2858252"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#3674B5] hover:text-[#2a5a8f] transition-colors mb-2 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Loksa et al.
            </a>
            <p className="text-neutral-900">
              Loksa et al. investigated meta-cognitive awareness in novice programmers by identifying six problem-solving stages and explicitly coaching students to recognize which stage they occupied when encountering difficulties. A{" "}
              <a
                href="https://dl.acm.org/doi/10.1145/3230977.3230981"
                className="text-[#3674B5] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                study
              </a>{" "}
              which leveraged their framework to investigate common errors found that successful students differed primarily in forming correct initial problem conceptualization, corresponding to the first stage: reinterpret the problem prompt.
            </p>
          </blockquote>
        </section>

        {/* Literate Programming - Collapsible */}
        <section className="py-12 border-t border-neutral-200">
          <div className="mb-6">
            <button
              onClick={() => setIsLiterateOpen(!isLiterateOpen)}
              className="flex items-center gap-2 text-neutral-900 hover:text-[#096B68] transition-colors"
            >
              <h2 className="text-2xl font-bold">Literate Programming</h2>
              {isLiterateOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {isLiterateOpen && (
            <div className="space-y-8 animate-fade-in">
              <p className="text-neutral-700 leading-relaxed">
                Our work draws from Donald Knuth's paradigm of Literate Programming, where the term "Literate" refers to "Literature". This is because he envisioned programs being read as literature – implying that good programs should be easily read and appreciated by any human.
              </p>

              <blockquote className="border-l-4 border-[#096B68] pl-6 py-4 bg-neutral-50 rounded-r-lg">
                <a
                  href="http://literateprogramming.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#096B68] hover:text-[#075550] transition-colors mb-2 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Literate Programming
                </a>
                <p className="text-neutral-900">
                  In literate programming the emphasis is reversed. Instead of writing code containing documentation, the literate programmer writes documentation containing code.
                </p>
              </blockquote>

              <p className="text-neutral-700 leading-relaxed">
                Literate programming emphasizes structured design with clear separation of concerns, human-first ordering that prioritizes cognitive comprehension over execution sequence, and meta-language abstraction that builds logical constructs before implementation details.
              </p>

              <blockquote className="border-l-4 border-[#ef7f08] pl-6 py-4 bg-neutral-50 rounded-r-lg">
                <a
                  href="https://ia601307.us.archive.org/22/items/the-elements-of-programming-style-second-edition/The%20Elements%20of%20Programming%20Style%20Second%20Edition%20%28Brian%20W.%20Kernighan%20and%20P.J.%20Plauger%29_text.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ef7f08] hover:text-[#d46f07] transition-colors mb-2 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Elements of Programming Style
                </a>
                <p className="text-neutral-900">
                  Top-down design and successive refinement attack a programming task by specifying it in the most general terms, then expanding these into more and more specific and detailed actions, until the whole program is complete. Structured design is the process of controlling the overall design of a system or program so the pieces fit together neatly, yet remain sufficiently decoupled that they may be independently modified. ... Each of these disciplines can materially improve programmer productivity and the quality of code produced.
                </p>
              </blockquote>
            </div>
          )}
        </section>

        {/* Functional Paradigms - Collapsible */}
        <section className="py-12 border-t border-neutral-200">
          <div className="mb-6">
            <button
              onClick={() => setIsFunctionalOpen(!isFunctionalOpen)}
              className="flex items-center gap-2 text-neutral-900 hover:text-[#ef7f08] transition-colors"
            >
              <h2 className="text-2xl font-bold">Functional Paradigms</h2>
              {isFunctionalOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {isFunctionalOpen && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-neutral-700 leading-relaxed">
                OCaml, being a functional language, requires explicit thought and framing of problems in a functional manner. To enforce that, we ban certain poor programming practices in OCaml using a custom PPX Extension.
              </p>

              <div className="space-y-3">
                {functionalParadigms.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-white border-l-4 border-red-500 rounded-r-lg"
                  >
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-neutral-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Conclusion */}
        <section className="py-16 border-t border-neutral-200">
          <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
            <p className="text-neutral-700 leading-relaxed mb-4">
              Our work aims to leverage these principles to deploy correct-by-construction programming in Introductory Computer Science. Literate Programming provides necessary but not superfluous scaffolding in learning how to solve problems, giving the learner enough independence and discretion while strongly encouraging structure.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              The{" "}
              <Link to="/" className="text-[#3674B5] hover:underline font-medium">
                four-phase BOOP framework
              </Link>{" "}
              prevents the premature leap from problem statement to implementation that characterizes novice programming behaviour. By mandating explicit articulation at each phase, students develop reflective computational thinking practices. The framework's language-agnostic emphasis prepares students for professional software development's polyglot reality, where algorithmic insights must transcend programming language syntax.
            </p>
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-16" />
      </div>
    </Layout>
  );
};

export default OnCorrectness;
