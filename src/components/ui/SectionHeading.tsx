import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${
            light
              ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
              : 'bg-amber-100 text-amber-900 border border-amber-200'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
