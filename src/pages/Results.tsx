import { Layout } from "@/components/Layout";
import { CheckCircle, AlertCircle, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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
  const [isPositiveOpen, setIsPositiveOpen] = useState(false);
  const [isRoadblocksOpen, setIsRoadblocksOpen] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <section className="py-16 border-b border-neutral-200">
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">
            Results
          </h1>
          <blockquote className="border-l-4 border-[#3674B5] pl-6 py-4 bg-neutral-50 rounded-r-lg">
            <p className="text-base text-neutral-900">
              Conventional online tutorials "just start writing code like everyone knows what is to be done," whereas BOOP provided explicit problem decomposition strategies absent from other learning resources.
            </p>
          </blockquote>
        </section>

        {/* Context */}
        <section className="py-12">
          <p className="text-base text-neutral-700 leading-relaxed">
            BOOP was used at Ashoka University in the CS-1 course "Introduction to Computer Science".
          </p>
        </section>

        {/* Positive Results - Collapsible */}
        <section className="py-12 border-t border-neutral-200">
          <div className="mb-6">
            <button
              onClick={() => setIsPositiveOpen(!isPositiveOpen)}
              className="flex items-center gap-2 text-neutral-900 hover:text-[#096B68] transition-colors"
            >
              <h2 className="text-2xl font-bold">Positive Results</h2>
              {isPositiveOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {isPositiveOpen && (
            <div className="space-y-3 animate-fade-in">
              {positiveResults.map((result, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white border-l-4 border-[#096B68] rounded-r-lg"
                >
                  <CheckCircle className="w-5 h-5 text-[#096B68] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1 text-sm">{result.title}</h3>
                    <p className="text-neutral-700 text-sm">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Student Quote */}
        <section className="py-12 border-t border-neutral-200">
          <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
            <Quote className="w-6 h-6 text-[#7F55B1] mb-4" />
            <p className="text-base text-neutral-900 mb-3">
              "BOOP takes four times the time, but I understand the problem much better now."
            </p>
            <p className="text-neutral-600 text-sm">— CS-1 Student</p>
          </div>
        </section>

        {/* Impact */}
        <section className="py-12">
          <p className="text-neutral-700 leading-relaxed">
            The framework's emphasis on correctness-first thinking may help address persistent challenges in computing education related to formal methods integration and long-term computational thinking development.
          </p>
        </section>

        {/* Roadblocks - Collapsible */}
        <section className="py-12 border-t border-neutral-200">
          <div className="mb-6">
            <button
              onClick={() => setIsRoadblocksOpen(!isRoadblocksOpen)}
              className="flex items-center gap-2 text-neutral-900 hover:text-[#ef7f08] transition-colors"
            >
              <h2 className="text-2xl font-bold">Roadblocks & Improvements</h2>
              {isRoadblocksOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {isRoadblocksOpen && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-neutral-700">
                We also observed a few roadblocks that will help us improve BOOP and integrate it better with the lecture style:
              </p>
              <div className="space-y-3">
                {roadblocks.map((roadblock, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-white border-l-4 border-[#ef7f08] rounded-r-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-[#ef7f08] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1 text-sm">{roadblock.title}</h3>
                      <p className="text-neutral-700 text-sm">{roadblock.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Future Plans */}
        <section className="py-16 border-t border-neutral-200">
          <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 text-center">
            <p className="text-base text-neutral-900">
              We plan to deploy BOOP for the second time in the <span className="font-semibold">Spring Semester of 2026</span> at Ashoka University.
            </p>
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-16" />
      </div>
    </Layout>
  );
};

export default Results;