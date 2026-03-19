import React, { useState } from 'react';
import { Button } from './Button';
export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    preferredDate: '',
    preferredTime: ''
  });
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('Form submitted:', formData);
    alert("Thank you for your booking request! We'll contact you shortly.");
    setFormData({
      name: '',
      phone: '',
      course: '',
      preferredDate: '',
      preferredTime: ''
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700">
          
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2E8B57] focus:outline-none focus:ring-1 focus:ring-[#2E8B57]" />
        
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-gray-700">
          
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2E8B57] focus:outline-none focus:ring-1 focus:ring-[#2E8B57]" />
        
      </div>
      <div>
        <label
          htmlFor="course"
          className="mb-1 block text-sm font-medium text-gray-700">
          
          Course/Service
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2E8B57] focus:outline-none focus:ring-1 focus:ring-[#2E8B57]">
          
          <option value="">Select a course or service</option>
          <optgroup label="Driving Courses">
            <option value="category-a">Category A (Motorcycles)</option>
            <option value="category-b">Category B (Cars)</option>
            <option value="category-c">Category C (Light Commercial)</option>
            <option value="category-d">Category D (Heavy Vehicles)</option>
            <option value="tuktuk">Tuktuk (Three-wheelers)</option>
          </optgroup>
          <optgroup label="Computer Courses">
            <option value="microsoft-office">Microsoft Office</option>
            <option value="basic-it">Basic IT & Networking</option>
          </optgroup>
          <optgroup label="Other Services">
            <option value="first-aid">First Aid Lessons</option>
            <option value="mechanics">Basic Mechanics</option>
            <option value="printing">Printing Services</option>
            <option value="kra-services">KRA Services</option>
            <option value="other">Other Services</option>
          </optgroup>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="preferredDate"
            className="mb-1 block text-sm font-medium text-gray-700">
            
            Preferred Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2E8B57] focus:outline-none focus:ring-1 focus:ring-[#2E8B57]" />
          
        </div>
        <div>
          <label
            htmlFor="preferredTime"
            className="mb-1 block text-sm font-medium text-gray-700">
            
            Preferred Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2E8B57] focus:outline-none focus:ring-1 focus:ring-[#2E8B57]">
            
            <option value="">Select time</option>
            <option value="morning">Morning (8AM - 12PM)</option>
            <option value="afternoon">Afternoon (12PM - 4PM)</option>
            <option value="evening">Evening (4PM - 7PM)</option>
          </select>
        </div>
      </div>
      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Book Now
        </Button>
      </div>
    </form>);

}