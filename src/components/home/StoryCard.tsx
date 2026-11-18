





import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface StoryItem {
  id: number | string;
  title: string;
  description: string;
  category: string;
  image: string;
  bgColor?: string;
}

interface StoryCardProps {
  story: StoryItem;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div
      className="group grid overflow-hidden rounded-3xl border border-amber-200/70 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-2"
      style={{
        background:
          story.bgColor ||
          "linear-gradient(135deg, #FFF8E7 0%, #FDE7A9 55%, #F8D875 100%)",
      }}
    >
      {/* Story Content */}
      <div className="relative flex flex-col items-start justify-center overflow-hidden p-7 sm:p-10 lg:p-12">
        {/* Decorative background circle */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/25" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-white/40" />

        <div className="relative z-10">
          {/* Category */}
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            {story.category}
          </span>

          {/* Heading */}
          <h3 className="mt-6 text-xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-xl lg:text-2xl">
            {story.title}
          </h3>

          {/* Accent line */}
          <div className="mt-5 h-1.5 w-16 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-24" />

          {/* Description */}
          <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
            {story.description}
          </p>

          {/* Button */}
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-amber-500 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
          >
            Know More
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

          {/* Bottom label */}
          <p className="mt-6 text-xs font-semibold tracking-wide text-gray-600">
            EVERY STORY MATTERS. EVERY LIFE COUNTS.
          </p>
        </div>
      </div>

      {/* Story Image */}
      <div className="relative min-h-64 overflow-hidden sm:min-h-80 md:min-h-full">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-transparent to-gray-950/10" />

        {/* Image caption */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <div className="inline-flex items-center rounded-full border border-white/30 bg-gray-950/45 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
            Stories of Hope
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[3rem] bg-amber-400/90" />
      </div>
    </div>
  );
};

export default StoryCard;
