import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GuideCarousel = ({ guides, activeGuide, setActiveGuide, setSelectedGuide, nextGuide, prevGuide }) => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center tracking-tight">
        Choose your guide
      </h2>
      <div className="relative">
        <div className="flex justify-center items-center mb-8">
          <Button variant="outline" size="icon" className="absolute left-0 z-10 rounded-full" onClick={prevGuide}>
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
          <div className="relative flex justify-center items-center w-full overflow-hidden h-[320px]">
            {guides.map((guide, index) => {
              const position = (index - activeGuide + guides.length) % guides.length;
              let translateX = 0;
              let scale = 0.7;
              let zIndex = 0;
              let opacity = 0.5;

              if (position === 0) {
                scale = 1;
                zIndex = 10;
                opacity = 1;
              } else if (position === 1 || position === guides.length - 1) {
                translateX = position === 1 ? 160 : -160;
                zIndex = 5;
                opacity = 0.7;
              } else {
                translateX = position < guides.length / 2 ? 240 : -240;
                opacity = 0.3;
              }

              return (
                <motion.div
                  key={guide.id}
                  className="absolute cursor-pointer"
                  style={{
                    zIndex,
                    opacity,
                    transform: `translateX(${translateX}px) scale(${scale})`,
                  }}
                  initial={false}
                  animate={{
                    x: translateX,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => position === 0 && setSelectedGuide(guide)}
                >
                  <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden bg-gray-100 p-1 shadow-md">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image
                        src={guide.image || "/placeholder.svg"}
                        alt={guide.name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {position === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-2 text-center">
                        <p className="font-medium text-gray-900 text-sm">{guide.name}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <Button variant="outline" size="icon" className="absolute right-0 z-10 rounded-full" onClick={nextGuide}>
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
        {guides[activeGuide] && (
          <div className="text-center max-w-md mx-auto">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white" onClick={() => setSelectedGuide(guides[activeGuide])}>
              Let yourself be guided
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GuideCarousel; 