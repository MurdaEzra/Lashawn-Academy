import React from 'react';
import { Button } from '../ui/Button';
import { ClipboardList } from 'lucide-react';
export function QuickBookingSection() {
  return (
    <section className="bg-[#2E8B57]/5 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md text-center">
          <div className="mx-auto w-16 h-16 bg-[#2E8B57]/10 rounded-full flex items-center justify-center mb-6">
            <ClipboardList className="h-8 w-8 text-[#2E8B57]" />
          </div>
          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Register today to begin your driving or computer course. Our simple
            3-step registration process takes just a few minutes. You'll receive
            a unique registration number upon completion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/register">
              Register Now
            </Button>
            <Button variant="outline" to="/fees">
              View Fee Structure
            </Button>
          </div>
        </div>
      </div>
    </section>);

}