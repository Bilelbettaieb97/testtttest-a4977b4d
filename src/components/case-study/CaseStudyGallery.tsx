import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface CaseStudyGalleryProps {
  images: GalleryImage[];
}

const CaseStudyGallery = ({ images }: CaseStudyGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2 });

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galerie du Projet</h2>
          <p className="text-xl text-muted-foreground">
            Découvrez les différentes pages et fonctionnalités
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700 delay-200 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer group border-2 hover:border-primary/50 transition-all hover:shadow-xl"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={225}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-muted-foreground">{image.caption}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-[95vw] w-full p-0 bg-black/95 border-0 max-h-[95vh] overflow-hidden flex flex-col [&>button]:hidden">
            {selectedIndex !== null && (
              <>
                {/* Close button */}
                <div className="absolute top-2 right-2 z-50">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={closeLightbox}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Image Counter */}
                <div className="absolute top-2 left-2 z-50 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedIndex + 1} / {images.length}
                </div>

                {/* Scrollable image area */}
                <div className="overflow-y-auto flex-1">
                  <img
                    src={images[selectedIndex].src}
                    alt={images[selectedIndex].alt}
                    className="w-full h-auto"
                  />
                </div>

                {/* Caption */}
                <div className="bg-black/80 p-4 shrink-0">
                  <p className="text-white text-lg font-medium text-center">
                    {images[selectedIndex].caption}
                  </p>
                </div>

                {/* Navigation Buttons */}
                {selectedIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 w-12 h-12"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                )}

                {selectedIndex < images.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 w-12 h-12"
                    onClick={goToNext}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CaseStudyGallery;
