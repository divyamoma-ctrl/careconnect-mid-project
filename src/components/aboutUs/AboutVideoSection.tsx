import { useState } from "react";
import { Play, X } from "lucide-react";

const AboutVideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Replace with your YouTube embed URL or direct video URL
//   const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 
const videoUrl = "https://www.youtube.com/embed/IZ3SlMPaK1Q?autoplay=1";  

  return (
    <section className="bg-[#171717] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Side: Content */}
          <div className="space-y-6">
             <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
           Our journey
          </span>
{/* 
            <h2 className="font-[Fredoka] text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Dedicated to creating <span className="text-yellow-400">brighter futures</span> for every child.
            </h2> */}
            <h2 className="text-2xl font-extrabold sm:text-3xl font-[Fredoka] text-white">
            Dedicated to creating <span className="text-yellow-400">brighter futures</span> for every child
            </h2>

            <p className="text-lg leading-relaxed text-gray-300">
              CareConnect was born out of a shared dream to empower women and safeguard children in underserved communities. From small grassroots initiatives to impactful programs across regions, our journey is driven by empathy and action.
            </p>

            <p className="leading-relaxed text-gray-400">
              Through collaborative efforts, community support, and dedicated mentorship, we strive to build a world where every individual has equal opportunities to thrive and succeed.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 font-[Fredoka] font-semibold text-[#171717] transition-all hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95"
              >
                <Play size={18} className="fill-current" />
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right Side: Video Thumbnail & Play Button */}
          <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-[#222222] p-2 shadow-2xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              {/* Cover Image / Thumbnail */}
              <img
                src="../../src/assets/images/homeImage/story-edu.jpg"
                alt="CareConnect Community Impact"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />

              {/* Centered Play Button */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-[#171717] shadow-xl transition-all duration-300 group-hover:scale-110 hover:bg-yellow-300"
                aria-label="Play video"
              >
                <Play size={32} className="ml-1 fill-current" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Embed Video Container */}
            <div className="aspect-video w-full">
              <iframe
                src={videoUrl}
                title="CareConnect Video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutVideoSection;