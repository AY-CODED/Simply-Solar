import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    monthlyBill: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email address';
    if (!formData.phone.match(/^\d{10,15}$/)) newErrors.phone = 'Valid phone number required';
    if (!formData.zipCode.match(/^\d{5}$/)) newErrors.zipCode = 'Invalid ZIP code';
    if (!formData.monthlyBill) newErrors.monthlyBill = 'Please select your bill';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[2rem] shadow-xl text-center"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={80} className="text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-primary mb-4">Request Received!</h3>
        <p className="text-slate-600 text-lg">
          Thank you for your interest in Simply Solar. One of our energy consultants will reach out to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-primary font-bold hover:underline"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ready to Go Solar?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Fill out the form to get your customized solar quote. Our experts will analyze your energy needs and provide a tailored proposal.
            </p>

            <ul className="space-y-4">
              {[
                'Free on-site energy assessment',
                'Custom system design and engineering',
                'Full assistance with permits and rebates',
                '25-year performance guarantee'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="1234567890"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.zipCode ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="90210"
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Average Monthly Bill</label>
                <select
                  name="monthlyBill"
                  value={formData.monthlyBill}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.monthlyBill ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none bg-no-repeat bg-[right_1rem_center]`}
                  style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundSize: '1.2em'}}
                >
                  <option value="">Select your bill amount</option>
                  <option value="0-100">$0 - $100</option>
                  <option value="101-200">$101 - $200</option>
                  <option value="201-300">$201 - $300</option>
                  <option value="301-500">$301 - $500</option>
                  <option value="501+">$501+</option>
                </select>
                {errors.monthlyBill && <p className="text-red-500 text-xs mt-1">{errors.monthlyBill}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? 'Processing...' : (
                  <>
                    Request My Free Quote
                    <Send size={18} />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                By submitting this form, you agree to be contacted about solar energy solutions.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LeadForm;
