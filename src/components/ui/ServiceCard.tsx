import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2E8B57]/10 text-[#2E8B57]">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="flex-grow text-gray-600">{description}</p>
    </div>);

}