import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryContent } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  
  // Set to 6 to display 2 clean rows of 3 columns initially
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Filter items dynamically based on category tab selection
  const filteredImages = activeCategory === 'All'
    ? galleryContent.images
    : galleryContent.images.filter(img => img.category === activeCategory);

  // Slice image list according to load-more boundaries
  const displayedImages = filteredImages.slice(0, visibleCount);

  // Reset pagination boundaries when switching layout tabs
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <SectionHeading 
          eyebrow="Photo Gallery"
          title={galleryContent.heading} 
          subtitle={galleryContent.subheading} 
          align="center"
        />

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {galleryContent.categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 transform active:scale-95 ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                  : 'bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clean 3-Column Image Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-700/80 shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setLightboxImage(image)}
              >
                {/* 4:3 Aspect Ratio offers great uniformity for mixed vertical/horizontal captures */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Trigger — calculation checks out perfectly for 13 items */}
        {filteredImages.length > visibleCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(filteredImages.length)}
              className="px-6 py-3 border border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white font-medium rounded-xl transition-all duration-300 transform active:scale-95 shadow-sm"
            >
              View More Photos ({filteredImages.length - visibleCount} Left)
            </button>
          </div>
        )}

        {/* Lightbox Backdrop Window */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            >
              <button onClick={() => setLightboxImage(null)} className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl focus:outline-none">&times;</button>
              <motion.div
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full overflow-hidden rounded-2xl shadow-2xl border border-zinc-800 bg-black"
              >
                <img src={lightboxImage.src} alt={lightboxImage.title} className="max-h-[85vh] w-full object-contain" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
