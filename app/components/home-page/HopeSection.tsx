import React from 'react';

const HopeSection = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 tracking-tight">
        It's a clever lie. <br /> Meaning exists.
      </h2>
      <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto mb-8">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-gray-800 font-medium text-base mb-0">You are not alone.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-gray-800 font-medium text-base mb-0">You don't have to fight alone.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-gray-800 font-medium text-base mb-0">You don't have to drown in darkness.</p>
        </div>
      </div>
      <p className="text-lg md:text-xl mb-8 font-light">
        Because there are those who can guide you.
        <br />
        They are not an illusion. They are not a philosophy. They are a force that works when you allow it to work.
      </p>
      <div className="text-center mb-8">
        <p className="text-xl md:text-2xl font-serif font-medium mb-4">They are the guides.</p>
        <p className="text-gray-600">Each of them solves different problems. Each answers different questions.</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-medium">Open your eyes. Choose your guide.</p>
      </div>
    </section>
  );
};

export default HopeSection; 