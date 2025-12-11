import { Layout } from "@/components/Layout";
import { CheckCircle, AlertCircle, Quote } from "lucide-react";

const positiveResults = [
  {
    title: "Rigorous reasoning",
    description: "Students developed systematic approaches to problem decomposition and solution verification."
  },
  {
    title: "Improved comprehension",
    description: "BOOP provided explicit problem decomposition strategies absent from other learning resources."
  },
  {
    title: "Better feedback",
    description: "The structured approach enabled more targeted and constructive feedback from instructors."
  },
  {
    title: "Separation of concerns",
    description: "Students learned to distinguish between specification, implementation, and verification phases."
  }
];

const roadblocks = [
  {
    title: "Reverse-engineering of solutions",
    description: "Some students attempted to work backwards from code to specifications rather than forward."
  },
  {
    title: "Misinterpretation of components",
    description: "Initial confusion about the purpose and scope of each BOOP phase."
  },
  {
    title: "Automated Grading",
    description: "Challenges in automatically assessing the quality of blueprints and proofs."
  }
];

const Results = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-4xl py-16">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Results
          </h1>
          <blockquote className="border-l-4 border-boop-blue pl-6 py-4 bg-boop-blue/5 rounded-r-xl">
            <p className="text-lg text-foreground italic">
              Conventional online tutorials "just start writing code like everyone knows what is to be done," whereas BOOP provided explicit problem decomposition strategies absent from other learning resources.
            </p>
          </blockquote>
        </div>

        {/* Context */}
        <section className="mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            BOOP was used at Ashoka University in the CS-1 course "Introduction to Computer Science".
          </p>
        </section>

        {/* Positive Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Positive Results</h2>
          <div className="grid gap-4">
            {positiveResults.map((result, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 bg-boop-green/5 border border-boop-green/20 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-boop-green flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{result.title}</h3>
                  <p className="text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Quote */}
        <section className="mb-12">
          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <Quote className="w-8 h-8 text-boop-purple mb-4" />
            <p className="text-lg text-foreground italic mb-4">
              "BOOP takes four times the time, but I understand the problem much better now."
            </p>
            <p className="text-muted-foreground text-sm">— CS-1 Student</p>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <p className="text-muted-foreground leading-relaxed">
            The framework's emphasis on correctness-first thinking may help address persistent challenges in computing education related to formal methods integration and long-term computational thinking development.
          </p>
        </section>

        {/* Roadblocks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Roadblocks & Improvements</h2>
          <p className="text-muted-foreground mb-6">
            We also observed a few roadblocks that will help us improve BOOP and integrate it better with the lecture style:
          </p>
          <div className="grid gap-4">
            {roadblocks.map((roadblock, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 bg-boop-orange/5 border border-boop-orange/20 rounded-xl"
              >
                <AlertCircle className="w-6 h-6 text-boop-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{roadblock.title}</h3>
                  <p className="text-muted-foreground">{roadblock.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Plans */}
        <section>
          <div className="bg-gradient-to-br from-boop-blue/10 via-boop-purple/10 to-boop-orange/10 rounded-2xl p-8 text-center">
            <p className="text-lg text-foreground">
              We plan to deploy BOOP for the second time in the <span className="font-semibold">Spring Semester of 2026</span> at Ashoka University.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Results;
