import React from 'react';
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  return (
    <section className="py-16 px-4 max-w-[1024px] mx-auto text-center">
      <div className="relative z-[-1]">
        <div className="layout-background fixed"></div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 tracking-tight">
          The World Overwhelms You
        </h1>
        <h2 className="text-3xl md:text-2xl font-serif font-bold mb-8 tracking-tight">
          You Are Losing Faith in the World
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-600 font-light">
          People leave. Bonds break. Dreams fade.
        </p>
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto text-left">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-gray-800 font-medium mb-2">Love is an illusion.</p>
            <p className="text-gray-600 text-sm">
              Human bonds are getting weaker. Relationships are becoming transactions.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-gray-800 font-medium mb-2">Truth? It doesn't exist.</p>
            <p className="text-gray-600 text-sm">Everyone has their own, and everyone shouts the loudest.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-gray-800 font-medium mb-2">Work? An eternal struggle.</p>
            <p className="text-gray-600 text-sm">You squeeze out your last strength, and still have nothing.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-gray-800 font-medium mb-2">Health? Diseases.</p>
            <p className="text-gray-600 text-sm">The mind is falling apart. The body starts to refuse to obey.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl mb-4 font-serif">It's not your fault.</p>
          <p className="text-base text-gray-600">The world was built to make you believe that.</p>
        </div>
      </div>
      <Separator className="w-16" />
    </section>
  );
};

export default HeroSection; 