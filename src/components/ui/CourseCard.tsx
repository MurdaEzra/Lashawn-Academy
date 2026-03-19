import React from 'react';
import { Button } from './Button';
interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  duration?: string;
  prerequisites?: string;
  imageUrl: string;
}
export function CourseCard({
  title,
  category,
  description,
  duration,
  prerequisites,
  imageUrl
}: CourseCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover" />
        
        <div className="absolute top-0 right-0 bg-[#1E90FF] px-3 py-1 text-sm font-medium text-white">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        {(duration || prerequisites) &&
        <div className="mb-4 space-y-2 rounded-md bg-gray-50 p-3 text-sm">
            {duration &&
          <div className="flex items-start">
                <span className="mr-2 font-semibold">Duration:</span>
                <span>{duration}</span>
              </div>
          }
            {prerequisites &&
          <div className="flex items-start">
                <span className="mr-2 font-semibold">Prerequisites:</span>
                <span>{prerequisites}</span>
              </div>
          }
          </div>
        }
        <div className="flex justify-between">
          <Button variant="outline" size="sm">
            Learn More
          </Button>
          <Button variant="primary" size="sm">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>);

}