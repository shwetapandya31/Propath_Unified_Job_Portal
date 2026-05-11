import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle2, 
  HeartPulse, 
  Plane, 
  TrendingUp, 
  Search,
  ChevronRight, 
  Bookmark
} from 'lucide-react';
import { motion } from 'motion/react';
import { useJob } from '../context/JobContext';
import { useAuth } from '../context/AuthContext';
import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function DesignJobBoard() {
  const { jobs, applyForJob, hasApplied } = useJob();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const titleQuery = searchParams.get('title') || '';
  const locationQuery = searchParams.get('location') || '';

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesTitle = !titleQuery || 
        job.title.toLowerCase().includes(titleQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(titleQuery.toLowerCase());
      const matchesLocation = !locationQuery || 
        job.location.toLowerCase().includes(locationQuery.toLowerCase());
      return matchesTitle && matchesLocation;
    });
  }, [jobs, titleQuery, locationQuery]);

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  // Update selected job if the current one is filtered out or if none selected
  const selectedJob = useMemo(() => {
    if (selectedJobId) {
      const found = filteredJobs.find(j => j.id === selectedJobId);
      if (found) return found;
    }
    return filteredJobs[0] || null;
  }, [filteredJobs, selectedJobId]);

  const handleClearFilters = () => {
    setSearchParams({});
  };

  const handleApply = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (user.role === 'Employer') {
      alert("Employers cannot apply for jobs.");
      return;
    }
    if (selectedJob && user) {
      applyForJob(selectedJob.id, user.id, user.name);
      alert("Successfully applied!");
    }
  };

  const isApplied = user && selectedJob ? hasApplied(selectedJob.id, user.id) : false;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-8 mt-4">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
              {(titleQuery || locationQuery) && ` for "${titleQuery}${locationQuery ? ' in ' + locationQuery : ''}"`}
            </h2>
          </div>
          {(titleQuery || locationQuery) && (
            <button 
              onClick={handleClearFilters}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-700">No jobs match your search</h2>
            <p className="text-slate-500 mt-2">Try adjusting your keywords or location filters.</p>
            <button 
              onClick={handleClearFilters}
              className="mt-6 px-6 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
            >
              Show All Jobs
            </button>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Hero Section */}
            <motion.section 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white rounded-2xl border border-slate-200 flex items-center justify-center p-4 shrink-0 shadow-sm">
                    <div className="bg-slate-900 w-full h-full rounded-md flex items-center justify-center text-white font-bold text-xl">
                      {selectedJob.company[0]}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{selectedJob.type}</span>
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{selectedJob.category || 'General'}</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-1">{selectedJob.title}</h1>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <span className="font-semibold text-slate-700">{selectedJob.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {selectedJob.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-400">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleApply}
                    disabled={isApplied}
                    className={`px-10 py-3.5 rounded-xl font-bold shadow-lg transition-all flex-1 md:flex-none ${
                      isApplied 
                        ? 'bg-green-100 text-green-700 cursor-not-allowed shadow-none' 
                        : 'bg-[#0058be] text-white hover:shadow-xl hover:bg-blue-700'
                    }`}
                  >
                    {isApplied ? 'Applied' : 'Apply Now'}
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Salary Range', value: selectedJob.salary, icon: TrendingUp },
                  { label: 'Job Type', value: selectedJob.type, icon: Briefcase },
                  { label: 'Posted Date', value: new Date(selectedJob.postedAt).toLocaleDateString(), icon: Clock },
                  { label: 'Company', value: selectedJob.company, icon: Users },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-slate-900 line-clamp-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-10">
                {/* Job Description */}
                <motion.article variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
                    <h2 className="text-2xl font-bold text-slate-900">Job Description</h2>
                  </div>
                  <div className="space-y-6 text-slate-600 leading-relaxed max-w-none whitespace-pre-wrap">
                    {selectedJob.description || "No description provided for this job."}
                  </div>
                </motion.article>

                {/* Requirements */}
                <motion.article variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
                    <h2 className="text-2xl font-bold text-slate-900">Key Requirements</h2>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Strong understanding of data visualization principles.",
                      "Ability to prototype complex interactions.",
                      "Portfolio demonstrating clear problem-solving."
                    ].map((req, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1 bg-blue-50 p-1 rounded-full">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        </div>
                        <span className="text-slate-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </div>

              {/* Right Column */}
              <aside className="lg:col-span-4 space-y-8">
                {/* Related Jobs */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Other Matches</h3>
                  <div className="space-y-4">
                    {filteredJobs.filter(j => j.id !== selectedJob?.id).map((job) => (
                      <button 
                        key={job.id} 
                        onClick={() => setSelectedJobId(job.id)}
                        className="w-full text-left bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
                      >
                        <div className="flex gap-4 mb-3">
                          <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 font-bold border border-slate-100">
                            {job.company[0]}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{job.title}</h4>
                            <p className="text-xs font-medium text-slate-400">{job.company} • {job.location}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                          <span>{job.salary}</span>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                        </div>
                      </button>
                    ))}
                    {filteredJobs.length === 1 && (
                      <p className="text-sm text-gray-500 italic">No other matches found.</p>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 mt-12 w-full">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white">
              <Briefcase className="w-6 h-6" />
              <span className="text-xl font-bold">ProPath</span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em]">© 2024 ProPath Professional. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
