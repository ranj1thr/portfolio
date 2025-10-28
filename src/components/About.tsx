import { useRef } from 'react';
import { Code2, Database, Workflow, BarChart3, Download } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skills = [
  { icon: Workflow, name: 'Workflow Automation', color: 'bg-blue-500' },
  { icon: Database, name: 'Data Engineering', color: 'bg-cyan-500' },
  { icon: BarChart3, name: 'Analytics & BI', color: 'bg-teal-500' },
  { icon: Code2, name: 'API Integration', color: 'bg-blue-600' },
];

const technologies = [
  'SQL', 'Python', 'Power BI', 'Tableau', 'Excel',
  'Metabase', 'n8n', 'PostgreSQL', 'Supabase',
  'Data Warehousing', 'ETL', 'RDBMS', 'Data Modeling',
  'Inventory Management', 'E-commerce Analytics'
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-slate-50">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Building Systems That Work Quietly
              </h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  I'm Ranjith R, an automation engineer and data systems specialist currently working as a Marketplace Analyst at ShakeDeal,
                  where I build analytics workflows, automate reporting, and design data pipelines that improve operational efficiency.
                </p>
                <p>
                  Alongside my professional role, I'm also the Founder & Tech Lead at STORKSTONE, a D2C brand crafting minimalist silver jewelry and scented candles.
                  At STORKSTONE, I lead both technology and creative direction - building the automations, dashboards, and digital systems that power the brand from the inside out.
                </p>
                <p>
                  Across everything I do, my focus remains the same: make data and automation work quietly behind the scenes - simplifying processes,
                  scaling impact, and keeping systems elegant and efficient.
                </p>
              </div>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-1">
                  <img
                    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional headshot"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50" />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`${skill.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      {skill.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
