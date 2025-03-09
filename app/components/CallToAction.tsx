import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 tracking-tight">
        There are those who can guide you.
      </h2>

      <div className="max-w-2xl mx-auto mb-8">
        <p className="text-lg mb-4 font-light">"Every problem has a solution. Every pain has its healer."</p>
        <p className="text-lg mb-8 font-light">"You are not alone. You have a guide."</p>
      </div>

      <Button
        size="lg"
        className="bg-gray-900 hover:bg-gray-800 text-white px-6"
        onClick={() =>
          window.scrollTo({ top: document.querySelector("section:nth-child(5)").offsetTop, behavior: "smooth" })
        }
      >
        Choose your Angel
      </Button>
    </section>
  );
};

export default CallToAction; 