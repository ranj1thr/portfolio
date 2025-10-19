import { useEffect, useState, useRef } from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase, Download } from 'lucide-react';
import { supabase, type Experience as ExperienceType } from '../lib/supabase';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Experience() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    async function fetchExperience() {
      try {
        const { data, error } = await supabase
          .from('experience')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) throw error;
        setExperiences(data || []);
      } catch (error) {
        console.error('Error fetching experience:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchExperience();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-100 rounded-xl h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div ref={sectionRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* ---------- SECTION HEADER ---------- */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              My professional journey and educational background - a blend of analytics, automation,
              and operational strategy that’s evolved from data-driven roles into building complete systems
              connecting business and technology.
            </p>
          </div>

          {/* ---------- TIMELINE ---------- */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.type === 'education' ? GraduationCap : Briefcase;
                const isLeft = index % 2 === 0;

                return (
                  <div key={exp.id}>
                    {/* ---------- STORKSTONE BRIDGE (insert AFTER latest role, i.e., index === 0) ---------- */}
                    {index === 0 && (
                      <div className="relative md:w-1/2 md:mr-auto md:pr-12 mb-12">
                        <div className="absolute left-6 md:-left-8 top-6 w-4 h-4 rounded-full bg-purple-500 border-4 border-white shadow-lg" />
                        <div className="ml-16 md:ml-0 bg-white rounded-xl border border-purple-100 p-6 shadow-sm">
                          <p className="italic text-slate-700 leading-relaxed">
                            Alongside my role at <strong className="text-blue-700">ShakeDeal</strong>, I began developing{' '}
                            <a
                              href="https://storkstone.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-700 underline hover:text-purple-800 transition-colors"
                            >
                             <strong>STORKSTONE</strong>
                            </a>{' '}
                            - blending my technical foundation with creative and operational direction to build a D2C brand from the ground up.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* ---------- EXPERIENCE CARD ---------- */}
                    <div
                      className={`relative ${isLeft ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-1/2 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute left-8 md:left-auto md:right-auto top-6 w-0.5 h-full bg-blue-200 md:hidden" />
                      <div
                        className={`absolute left-6 md:left-auto ${isLeft ? 'md:-right-8' : 'md:-left-8'} top-6 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg`}
                      />

                      <div className="ml-16 md:ml-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div
                          className={`p-6 ${
                            exp.type === 'education'
                              ? 'bg-gradient-to-br from-teal-500 to-cyan-500'
                              : 'bg-gradient-to-br from-blue-600 to-blue-700'
                          } text-white`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                              <p className="text-blue-100 font-medium">{exp.company}</p>
                            </div>
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                              <Icon size={24} />
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 mt-4 text-sm text-blue-50">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>
                                {formatDate(exp.start_date)} - {exp.current ? 'Present' : formatDate(exp.end_date!)}
                              </span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1">
                                <MapPin size={16} />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="p-6">
                          <p className="text-slate-700 mb-4 leading-relaxed">{exp.description}</p>

                          {exp.achievements && exp.achievements.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-slate-600">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- RESUME DOWNLOAD ---------- */}
          <div className="mt-16 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <Download size={20} />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
