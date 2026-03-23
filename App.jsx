import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Anderson Educational Consulting LLC
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Student Discipline &amp; Title IX Advisory for Families and Schools
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Clear, experienced guidance in high-stakes educational matters, grounded in fairness, due process, and sound practice.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5">Request a Consultation</a>
                <a href="#services" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">Explore Services</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Family Advocacy</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Title IX Advisory</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Discipline Hearings</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">School Advisory</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl">
                <div className="mb-6 flex items-center gap-4">
                  <img src="/logo-anderson-educational-consulting.png" alt="Anderson Educational Consulting logo" className="h-20 w-20 rounded-2xl object-contain bg-white shadow-sm ring-1 ring-slate-200 p-2" />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Anderson Educational Consulting</h2>
                    <p className="text-sm text-amber-700">Balanced guidance for families and school systems</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-semibold text-slate-900">For Families</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Support navigating student discipline, Title IX concerns, hearing preparation, and due process questions.</p>
                  </div>
                  <div className="rounded-2xl bg-amber-50 p-5">
                    <h3 className="font-semibold text-slate-900">For Schools</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Guidance on investigations, compliance, administrative decision-making, and equitable discipline practices.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                    <h3 className="font-semibold text-slate-900">Core Strengths</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Student discipline • Title IX processes • Hearings • Investigations • Policy guidance • Administrative consulting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="services">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Services</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Practical support for the moments that matter most</h2>
          <p className="mt-4 text-lg text-slate-600">Anderson Educational Consulting serves both families and school systems with a balanced, experienced perspective.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Student Discipline Advocacy", text: "Guidance for suspensions, expulsions, manifestation issues, and hearing preparation." },
            { title: "Title IX Support", text: "Consultation on Title IX processes, rights, responsibilities, and procedural fairness." },
            { title: "School Division Consulting", text: "Support for discipline systems, investigations, compliance, and administrative practice." },
            { title: "Policy & Process Review", text: "Recommendations to strengthen clarity, consistency, and equitable decision-making." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Why Anderson Educational Consulting</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Experience, fairness, and calm guidance in complex situations</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Families need support they can trust. School systems need guidance they can stand behind. This practice is built around fairness, due process, clear communication, and respect for every student involved.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Balanced perspective across families and schools",
              "High-stakes educational matters handled with care",
              "Focus on clarity, consistency, and sound process",
              "Professional presentation that inspires trust",
            ].map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 backdrop-blur-sm">{point}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="about">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">About</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Trusted support rooted in educational experience</h2>
            <p className="mt-6 leading-8 text-slate-600">Most families do not realize how high the stakes are in student discipline and Title IX cases until they are in the middle of one. Anderson Educational Consulting was created to provide informed, steady guidance for families while also helping school divisions strengthen fair and defensible practices.</p>
            <p className="mt-4 leading-8 text-slate-600">The goal is simple: help families feel supported and informed, and help schools operate with integrity, consistency, and care.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Areas of Focus</h3>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>Student Discipline: suspension, expulsion, and hearing support</li>
              <li>Title IX investigations and processes</li>
              <li>Family advocacy and case support</li>
              <li>School division consulting and administrative guidance</li>
              <li>Policy, compliance, and equitable decision-making</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-50 to-slate-50 py-20" id="contact">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to talk through your situation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Whether you are a family facing a difficult educational matter or a school leader seeking experienced guidance, Anderson Educational Consulting is available to help.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:jd@andersoneducationalconsulting.com" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg">Email J. D. Anderson</a>
            <a href="tel:7034707239" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm">Call 703-470-7239</a>
          </div>
        </div>
      </section>
    </div>
  );
}
