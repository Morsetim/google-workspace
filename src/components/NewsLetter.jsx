import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('test@test.com');
  const [country, setCountry] = useState('United States');
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="bg-gray-50 py-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 text-center mb-12">
          Sign up for the Google Workspace newsletter
        </h2>

        <form className="max-w-3xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            
            {/* Email Input with Floating Fieldset Label */}
            <div className="relative flex-1 group">
              <fieldset className="border border-gray-400 rounded-md px-3 pb-2 transition-colors group-within:border-blue-600 group-within:border-2">
                <legend className="text-xs font-medium text-gray-600 px-1 group-within:text-blue-600">
                  Enter your email*
                </legend>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-gray-900 py-1 bg-transparent"
                />
              </fieldset>
            </div>

            {/* Country Select with Floating Fieldset Label */}
            <div className="relative flex-1 group">
              <fieldset className="border border-gray-400 rounded-md px-3 pb-2 transition-colors group-within:border-blue-600 group-within:border-2">
                <legend className="text-xs font-medium text-gray-600 px-1 group-within:text-blue-600">
                  Country*
                </legend>
                <div className="relative flex items-center">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full outline-none text-gray-900 py-1 bg-transparent appearance-none cursor-pointer"
                  >
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                  <ChevronDown className="absolute right-0 text-gray-600 pointer-events-none" size={20} />
                </div>
              </fieldset>
            </div>
          </div>

          {/* Custom Checkbox Section */}
          <div className="flex gap-4 mb-8 items-start">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`mt-1 min-w-[20px] h-5 border-2 rounded transition-colors flex items-center justify-center ${
                agreed ? 'bg-blue-600 border-blue-600' : 'border-gray-500'
              }`}
            >
              {agreed && <div className="w-2 h-2 bg-white rounded-sm" />}
            </button>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="mb-4">
                Also sign me up for Google Cloud emails with news, product updates, event information, special offers, and more. 
                (Optional and you can unsubscribe at a later time).
              </p>
              <p>
                I understand my personal data will be processed in accordance with Google's {' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 rounded-full border border-gray-300 text-blue-600 font-medium text-lg hover:bg-blue-50 transition-all shadow-sm"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;