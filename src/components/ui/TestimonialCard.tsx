import React from 'react';
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
}
export function TestimonialCard({
  quote,
  name,
  role,
  imageUrl
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 text-[#2E8B57]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="opacity-50">
          
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.94.41-2.98.82-2.77 2.93-5.03 5.5-6.32.3-.15.41-.5.25-.8l-.72-1.45c-.15-.3-.49-.4-.79-.25-3.31 1.56-5.96 4.5-6.93 8.2-.16.57-.27 1.15-.34 1.73-.01.06-.02.11-.02.17-.1 1-.06 1.99.12 2.95.24 1.36.9 2.6 1.94 3.5.94.82 2.17 1.3 3.45 1.28 1.38-.04 2.54-.62 3.26-1.68.81-1.18 1.07-2.74.62-4.47zm8.88 0c0-.88-.23-1.618-.69-2.217-.326-.41-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.94.41-2.98.82-2.77 2.93-5.03 5.5-6.32.3-.15.41-.5.25-.8l-.72-1.45c-.15-.3-.49-.4-.79-.25-3.31 1.56-5.96 4.5-6.93 8.2-.16.57-.27 1.15-.34 1.73-.01.06-.02.11-.02.17-.1 1-.06 1.99.12 2.95.24 1.36.9 2.6 1.94 3.5.94.82 2.17 1.3 3.45 1.28 1.38-.04 2.54-.62 3.26-1.68.81-1.18 1.07-2.74.62-4.47z" />
        </svg>
      </div>
      <p className="mb-6 italic text-gray-600">{quote}</p>
      <div className="mt-auto flex items-center">
        {imageUrl ?
        <img
          src={imageUrl}
          alt={name}
          className="mr-4 h-12 w-12 rounded-full object-cover" /> :


        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2E8B57]/10 text-[#2E8B57]">
            <span className="text-lg font-semibold">{name[0]}</span>
          </div>
        }
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>);

}