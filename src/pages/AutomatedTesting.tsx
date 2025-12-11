import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { ExternalLink, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const boopAnnotatedCode = `(* @pre: n >= 0 *)
(* @post: result = 2 * n *)
let double_counter (n : int): int =
  let i = ref 0 in
  let j = ref 0 in
  while !i < n do
    (* @invariant: !j = 2 * !i *)
    i := !i + 1;
    j := !j + 2;
  done;
  !j
;;`;

const qcheckCode = `let () =
  let double_counter_test =
    Test.make
      ~name:"double_counter loop invariant check"
      (int_bound 1000)
      (fun n ->
        (* Preconditions *)
        assume (n >= 0);
        (* Expanded function body *)
        let i = ref 0 in
        let j = ref 0 in
        while !i < n do
          assert (!j = 2 * !i);
          i := !i + 1;
          j := !j + 2;
        done;
        let result = !j in
        (* Check invariant holds *)
        let invariant_holds = !j = 2 * !i in
        (* Check postcondition holds *)
        let postcondition_holds = result = 2 * n in
        (* Final check *)
        not invariant_holds || postcondition_holds
      )
  in
  QCheck_base_runner.run_tests_main [double_counter_test]
;;`;

const incorrectInvariant = `(* @invariant: !j = 2 * !i *)
becomes
(* @invariant: !j = 3 * !i *)`;

const errorOutput = `=== Error ==========================================================

Test double_counter loop invariant check errored on (8 shrink steps):
2`;

const AutomatedTesting = () => {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  const [isCounterexampleOpen, setIsCounterexampleOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <section className="py-16 border-b border-neutral-200">
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">
            Automated Testing
          </h1>
          <p className="text-base text-neutral-700 leading-relaxed">
            BOOP is designed for scalable adoption through built-in automated testing. Code written in BOOP is automatically verified against its specifications, enabling invariant testing for imperative code.
          </p>
        </section>

        {/* QCheck Introduction */}
        <section className="py-12">
          <p className="text-neutral-700 leading-relaxed">
            To enable this, we use{" "}
            <a
              href="https://github.com/c-cube/qcheck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3674B5] hover:underline"
            >
              QCheck
            </a>
            , a property-based testing tool for OCaml. Code annotated with invariants is translated to a QCheck test. On failure, QCheck outputs a minimal counterexample – a minimal input that satisfies the preconditions but the invariant does not hold on it.
          </p>
        </section>

        {/* Example - Collapsible */}
        <section className="py-12 border-t border-neutral-200">
          <div className="mb-6">
            <button
              onClick={() => setIsExampleOpen(!isExampleOpen)}
              className="flex items-center gap-2 text-neutral-900 hover:text-[#3674B5] transition-colors"
            >
              <h2 className="text-2xl font-bold">Example: Double Counter</h2>
              {isExampleOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {isExampleOpen && (
            <div className="space-y-8 animate-fade-in">
              <p className="text-neutral-700 leading-relaxed">
                Consider the following code which uses a <code className="bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded text-sm font-mono">for</code> loop in OCaml to sum up one counter to <code className="bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded text-sm font-mono">n</code> and another to <code className="bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded text-sm font-mono">2n</code>. It correctly specifies the precondition, postcondition and the invariant.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">BOOP Annotated OCaml</h3>
                <CodeBlock
                  code={boopAnnotatedCode}
                  title="double_counter.ml"
                  className="mb-8"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Internal QCheck Function</h3>
                <CodeBlock
                  code={qcheckCode}
                  title="qcheck_test.ml"
                />
              </div>
            </div>
          )}
        </section>

        {/* Mapping */}
        <section className="py-12 border-t border-neutral-200">
          <p className="text-neutral-700 mb-6">Just as demonstrated in the example above:</p>

          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-[#3674B5] rounded-r-lg">
              <ArrowRight className="w-5 h-5 text-[#3674B5] flex-shrink-0" />
              <p className="text-neutral-900 text-sm">
                <span className="font-semibold">Loop Invariants</span> → Assert Statements in the Loop Body
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-[#7F55B1] rounded-r-lg">
              <ArrowRight className="w-5 h-5 text-[#7F55B1] flex-shrink-0" />
              <p className="text-neutral-900 text-sm">
                <span className="font-semibold">Preconditions</span> → Assumptions over the inputs
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-[#096B68] rounded-r-lg">
              <ArrowRight className="w-5 h-5 text-[#096B68] flex-shrink-0" />
              <p className="text-neutral-900 text-sm">
                <span className="font-semibold">Postconditions</span> → Boolean verifications over the outputs
              </p>
            </div>
          </div>
        </section>

        {/* Counterexample - Collapsible */}
        <section className="py-12 border-t border-neutral-200">
          <div className="mb-6">
            <button
              onClick={() => setIsCounterexampleOpen(!isCounterexampleOpen)}
              className="flex items-center gap-2 text-neutral-900 hover:text-[#ef7f08] transition-colors"
            >
              <h2 className="text-2xl font-bold">Finding Counterexamples</h2>
              {isCounterexampleOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {isCounterexampleOpen && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-neutral-700 leading-relaxed">
                The above QCheck test passes. However, if the specified invariant is incorrect, it will most likely find a counterexample.
              </p>

              <div>
                <p className="text-neutral-700 mb-4">
                  Replace the correct invariant with an incorrect one. For example:
                </p>

                <CodeBlock
                  code={incorrectInvariant}
                  className="mb-6"
                />
              </div>

              <div>
                <p className="text-neutral-700 mb-4">
                  We get this error along with a minimal counterexample:
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 font-mono text-sm mb-6">
                  <pre className="text-red-700 whitespace-pre-wrap">{errorOutput}</pre>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <p className="text-neutral-700 leading-relaxed mb-4 text-sm">
                  Indeed, the invariant does not hold for <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">n = 2</code>. At the beginning of the second iteration of the loop, <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">i = 1</code> and <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">j = 2</code>, therefore <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">j = 3 * i</code> is <span className="text-red-600 font-semibold">False</span>.
                </p>
                <p className="text-neutral-700 leading-relaxed text-sm">
                  One may wonder why QCheck does not output <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">n = 1</code> as the minimal counterexample. That is because, for <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">n = 1</code>, the invariant indeed does hold (note that the <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">assert</code> statement is at the beginning of the loop). At the first call of the <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">assert</code> statement, <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">i = 0</code> and <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">j = 0</code>, therefore <code className="bg-white text-neutral-700 px-2 py-0.5 rounded font-mono border border-neutral-200">j = 3 * i</code> is <span className="text-[#096B68] font-semibold">True</span>.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Mathematical Properties Library - Collapsible */}
        <section className="py-12 border-t border-neutral-200">
          <div className="mb-6">
            <button
              onClick={() => setIsLibraryOpen(!isLibraryOpen)}
              className="flex items-center gap-2 text-neutral-900 hover:text-[#7F55B1] transition-colors"
            >
              <h2 className="text-2xl font-bold">Mathematical Properties Library</h2>
              {isLibraryOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {isLibraryOpen && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-neutral-700 leading-relaxed">
                In order for students to specify invariants in terms of mathematical properties (e.g. permutations), we are building a custom library with implementations of these properties.
              </p>

              <div>
                <p className="text-neutral-700 mb-4">
                  A postcondition of the below type will then be valid without requiring any definition of <code className="bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded text-sm font-mono">isPermutation</code> on the student's part:
                </p>

                <CodeBlock
                  code={`(* @post: isPermutation (sort a) a = True *)`}
                />
              </div>
            </div>
          )}
        </section>

        {/* More on QCheck */}
        <section className="py-16 border-t border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">More on QCheck</h2>

          <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <a
                href="https://cs3110.github.io/textbook/chapters/correctness/randomized.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3674B5] hover:underline font-medium"
              >
                Randomized testing
              </a>{" "}
              (aka fuzz testing) is the process of generating random inputs and feeding them to a program or a function to see whether the program behaves correctly. The immediate issue is how to determine what the correct output is for a given input. This is where the program specifications developed by the student come in.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              While QCheck provides a considerably good report on the performance of a program according to its specifications, it does not prove the absolute absence of a counterexample (due to finite cases and randomisation).
            </p>
            <a
              href="https://cs3110.github.io/textbook/chapters/correctness/randomized.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#3674B5] hover:underline font-medium text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Read more about randomized testing
            </a>
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-16" />
      </div>
    </Layout>
  );
};

export default AutomatedTesting;