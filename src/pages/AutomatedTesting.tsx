import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { ExternalLink, ArrowRight } from "lucide-react";

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
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-4xl py-16">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Automated Testing
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BOOP is designed for scalable adoption through built-in automated testing. Code written in BOOP is automatically verified against its specifications, enabling invariant testing for imperative code.
          </p>
        </div>

        {/* QCheck Introduction */}
        <section className="mb-12">
          <p className="text-muted-foreground leading-relaxed">
            To enable this, we use{" "}
            <a 
              href="https://github.com/c-cube/qcheck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-boop-blue hover:underline"
            >
              QCheck
            </a>
            , a property-based testing tool for OCaml. Code annotated with invariants is translated to a QCheck test. On failure, QCheck outputs a minimal counterexample – a minimal input that satisfies the preconditions but the invariant does not hold on it.
          </p>
        </section>

        {/* Example */}
        <section className="mb-12">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Consider the following code which uses a <code className="bg-secondary px-2 py-0.5 rounded text-sm">for</code> loop in OCaml to sum up one counter to <code className="bg-secondary px-2 py-0.5 rounded text-sm">n</code> and another to <code className="bg-secondary px-2 py-0.5 rounded text-sm">2n</code>. It correctly specifies the precondition, postcondition and the invariant.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-4">BOOP Annotated OCaml</h3>
          <CodeBlock 
            code={boopAnnotatedCode}
            title="double_counter.ml"
            className="mb-8"
          />

          <h3 className="text-xl font-bold text-foreground mb-4">Internal QCheck Function</h3>
          <CodeBlock 
            code={qcheckCode}
            title="qcheck_test.ml"
            className="mb-8"
          />
        </section>

        {/* Mapping */}
        <section className="mb-12">
          <p className="text-muted-foreground mb-6">Just as demonstrated in the example above:</p>
          
          <div className="grid gap-4">
            <div className="flex items-center gap-4 p-4 bg-boop-blue/5 border border-boop-blue/20 rounded-xl">
              <ArrowRight className="w-5 h-5 text-boop-blue flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-semibold">Loop Invariants</span> → Assert Statements in the Loop Body
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-boop-purple/5 border border-boop-purple/20 rounded-xl">
              <ArrowRight className="w-5 h-5 text-boop-purple flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-semibold">Preconditions</span> → Assumptions over the inputs
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-boop-green/5 border border-boop-green/20 rounded-xl">
              <ArrowRight className="w-5 h-5 text-boop-green flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-semibold">Postconditions</span> → Boolean verifications over the outputs
              </p>
            </div>
          </div>
        </section>

        {/* Counterexample */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Finding Counterexamples</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            The above QCheck test passes. However, if the specified invariant is incorrect, it will most likely find a counterexample.
          </p>

          <p className="text-muted-foreground mb-4">
            Replace the correct invariant with an incorrect one. For example:
          </p>

          <CodeBlock 
            code={incorrectInvariant}
            className="mb-6"
          />

          <p className="text-muted-foreground mb-4">
            We get this error along with a minimal counterexample:
          </p>

          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 font-mono text-sm mb-6">
            <pre className="text-destructive whitespace-pre-wrap">{errorOutput}</pre>
          </div>

          <div className="bg-secondary/50 rounded-xl p-6 border border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Indeed, the invariant does not hold for <code className="bg-background px-2 py-0.5 rounded text-sm">n = 2</code>. At the beginning of the second iteration of the loop, <code className="bg-background px-2 py-0.5 rounded text-sm">i = 1</code> and <code className="bg-background px-2 py-0.5 rounded text-sm">j = 2</code>, therefore <code className="bg-background px-2 py-0.5 rounded text-sm">j = 3 * i</code> is <span className="text-destructive font-medium">False</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              One may wonder why QCheck does not output <code className="bg-background px-2 py-0.5 rounded text-sm">n = 1</code> as the minimal counterexample. That is because, for <code className="bg-background px-2 py-0.5 rounded text-sm">n = 1</code>, the invariant indeed does hold (note that the <code className="bg-background px-2 py-0.5 rounded text-sm">assert</code> statement is at the beginning of the loop). At the first call of the <code className="bg-background px-2 py-0.5 rounded text-sm">assert</code> statement, <code className="bg-background px-2 py-0.5 rounded text-sm">i = 0</code> and <code className="bg-background px-2 py-0.5 rounded text-sm">j = 0</code>, therefore <code className="bg-background px-2 py-0.5 rounded text-sm">j = 3 * i</code> is <span className="text-boop-green font-medium">True</span>.
            </p>
          </div>
        </section>

        {/* Future Work */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Mathematical Properties Library</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            In order for students to specify invariants in terms of mathematical properties (e.g. permutations), we are building a custom library with implementations of these properties.
          </p>

          <p className="text-muted-foreground mb-4">
            A postcondition of the below type will then be valid without requiring any definition of <code className="bg-secondary px-2 py-0.5 rounded text-sm">isPermutation</code> on the student's part:
          </p>

          <CodeBlock 
            code={`(* @post: isPermutation (sort a) a = True *)`}
            className="mb-6"
          />
        </section>

        {/* More on QCheck */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">More on QCheck</h2>
          
          <div className="bg-gradient-to-br from-boop-blue/10 via-boop-purple/10 to-boop-orange/10 rounded-2xl p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <a 
                href="https://cs3110.github.io/textbook/chapters/correctness/randomized.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-boop-blue hover:underline font-medium"
              >
                Randomized testing
              </a>{" "}
              (aka fuzz testing) is the process of generating random inputs and feeding them to a program or a function to see whether the program behaves correctly. The immediate issue is how to determine what the correct output is for a given input. This is where the program specifications developed by the student come in.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While QCheck provides a considerably good report on the performance of a program according to its specifications, it does not prove the absolute absence of a counterexample (due to finite cases and randomisation).
            </p>
            <a 
              href="https://cs3110.github.io/textbook/chapters/correctness/randomized.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-boop-blue hover:underline font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Read more about randomized testing
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutomatedTesting;
