import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ProblemsSection = ({ problemCategories }) => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center tracking-tight">
        The problem is not you. The problem is this world.
      </h2>

      <Tabs defaultValue="love" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-gray-100">
          {problemCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="text-xs md:text-sm data-[state=active]:bg-white"
            >
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {problemCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  {category.problems.map((problem, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <p className="text-gray-700 text-sm">{problem}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 text-center">
        <p className="text-base mb-4 text-gray-600">
          This is why you fall into <span className="text-lg font-bold">nihilism</span>. This is why you think there is no meaning.
        </p>
        <p className="text-lg font-serif font-medium">But the truth is different.</p>
      </div>
    </section>
  );
};

export default ProblemsSection; 