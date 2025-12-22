import React from 'react';

const Impact: React.FC = () => {
  return (
    <section className="py-32 bg-brand-dark px-6 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-900 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="md:col-span-8 p-12 md:p-20 bg-brand-dark flex flex-col justify-center h-full">
            <span className="text-brand-primary font-mono text-[10px] tracking-widest uppercase mb-8 block">Proven Retention</span>
            <h2 className="text-h2 font-bold text-white mb-8 uppercase leading-tight">
              Massive Scaling. <br/>
              <span className="text-zinc-700">Measured Outcome.</span>
            </h2>
            <p className="text-body text-zinc-400 max-w-md font-light leading-relaxed">
              We leverage world-class editing pipelines to convert raw attention into tangible impact, localization for millions, and capital generation for high-stakes projects.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-1 gap-px bg-zinc-900">
            <div className="bg-brand-dark p-12 flex flex-col justify-center items-center text-center">
              <p className="text-4xl font-bold text-white mb-2">500M+</p>
              <p className="text-small text-zinc-500 uppercase tracking-widest">Aggregate Reach</p>
            </div>
            <div className="bg-brand-dark p-12 flex flex-col justify-center items-center text-center">
              <p className="text-4xl font-bold text-brand-accent mb-2">₹24Cr</p>
              <p className="text-small text-zinc-500 uppercase tracking-widest">Capital Raised</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;