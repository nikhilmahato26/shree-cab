import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Car,
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, COMPANY } from '../../data/cabData';
import { useToast } from '../ui/useToast';

type CategoryFilter = 'All' | 'SUVs' | 'Sedans' | 'Traveller';

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: 'All Vehicles', value: 'All' },
  { label: 'Sedans (Dzire / Aura)', value: 'Sedans' },
  { label: 'SUVs (Ertiga / Crysta)', value: 'SUVs' },
  { label: 'Traveller & Urbania', value: 'Traveller' },
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);
  const { showToast } = useToast();

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActivePhotoIdx(index);
  };

  const closeLightbox = () => {
    setActivePhotoIdx(null);
  };

  const nextPhoto = useCallback(() => {
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  }, [activePhotoIdx, filteredItems.length]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
  }, [activePhotoIdx, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIdx, nextPhoto, prevPhoto]);

  const handleInquireCar = (item: GalleryItem) => {
    const text = `Hi Shree Cab! 🚕 I saw your fleet photo of "${item.title}" in your gallery. I want to inquire about availability and booking for my journey in Kutch.`;
    showToast(`Opening WhatsApp for ${item.vehicleName}...`, 'info');
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const currentItem = activePhotoIdx !== null ? filteredItems[activePhotoIdx] : null;

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">
            <Camera className="w-4 h-4 text-[#003B95]" />
            Fleet & Tour Gallery
          </span>
          <h2 className="section-title mb-4">
            Our Vehicles & <span className="text-[#003B95]">Travel Moments</span>
          </h2>
          <p className="section-sub mx-auto">
            Take a look at our clean, well-maintained cabs, premium tourist vans, and scenic tour glimpses across Kutch.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#003B95] text-white shadow-[0_4px_16px_rgba(0,59,149,0.3)] scale-103'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative rounded-3xl overflow-hidden shadow-card card-hover border border-gray-100 aspect-square sm:aspect-[4/3] bg-gray-100 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-[#0A1F44]/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#0A1F44]/90 backdrop-blur-md text-[#FFD200] text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {item.vehicleName}
                  </span>
                </div>

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#FFD200] text-[#0A1F44] flex items-center justify-center shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Caption on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white text-xs sm:text-sm font-black truncate drop-shadow">
                    {item.title}
                  </h4>
                  <p className="text-blue-200 text-[11px] truncate font-medium drop-shadow">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#003B95] text-[#FFD200] flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-[#0A1F44] text-sm sm:text-base">
                Want to book a specific car shown in our gallery?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                You can request the exact vehicle model when booking via WhatsApp or phone.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi Shree Cab! I want to choose a specific vehicle from your photo gallery.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs uppercase font-extrabold px-6 py-2.5 shrink-0"
          >
            Inquire Fleet on WhatsApp
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {currentItem && activePhotoIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-white z-20 pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="bg-[#FFD200] text-[#0A1F44] text-xs font-black px-3 py-1 rounded-full uppercase">
                  {currentItem.vehicleName}
                </span>
                <span className="text-xs font-bold text-gray-300">
                  {activePhotoIdx + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Center Image Container */}
            <div
              className="relative flex-1 flex items-center justify-center py-2 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer focus:outline-none"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={currentItem.id}
                src={currentItem.src}
                alt={currentItem.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              {/* Next Button */}
              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer focus:outline-none"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & WhatsApp Trigger */}
            <div
              className="bg-[#0A1F44]/90 backdrop-blur-md rounded-2xl p-4 max-w-2xl mx-auto w-full text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="font-black text-sm sm:text-base text-white">
                  {currentItem.title}
                </h4>
                <p className="text-blue-200 text-xs mt-0.5">
                  {currentItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:+91${COMPANY.phone}`}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Call for this vehicle"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => handleInquireCar(currentItem)}
                  className="btn-primary text-xs uppercase font-extrabold px-4 py-2 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Book This Cab
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
