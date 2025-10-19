import { useState, useRef } from 'react';
import { Send, Mail, Github, Linkedin, Twitter, MapPin, CheckCircle } from 'lucide-react';
import { supabase, type ContactSubmission } from '../lib/supabase';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Contact() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (submitError) throw submitError;

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through the form or connect with me on social media.
              </p>

              <div className="space-y-4 mb-8">
                <button
                  onClick={() => copyToClipboard('ranjithtweaks@gmail.com')}
                  className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors group w-full"
                >
                  <div className="p-3 bg-blue-50 group-hover:bg-blue-100 rounded-lg transition-colors">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium">ranjithtweaks@gmail.com</p>
                  </div>
                </button>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium">Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Connect on Social Media
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ranj1thr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ranj1thr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://x.com/ranj1thhh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
