/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, MapPin, Briefcase, ChevronDown, SlidersHorizontal, Heart, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

// --- Type Definitions ---

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  postedDate: string;
  status?: string;
  isHot?: boolean;
}

// --- Mock Data ---

const JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'InnovateTech Solutions',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABMFfcipFHRVH4X_C8r6CjK1B0NjL5NpLQpb98dEaw4uRW1vGRyONDbNDiueG9VQ8OwtWxuldtV1SRQlmENchswviG2L2U6J5Ep-eylnOSQuMa4CCtX1uDTsMNea97qJ4VqABGr9ymJFY9PUcHT6k294eoNpGZDdCQVhvtNBDmsQ5DCe9Ziq75dzgTJ_pB7Cmtj-0qNvBWYMEQ_cTqZrROSY0TL0zgSaMda6obSYU-zVVfx3NwIw60Z7ijJIS_a7etWDTILm-GTdx5',
    location: 'San Francisco, CA',
    salary: '$140k - $180k',
    type: 'Full-time',
    description: 'We are seeking a seasoned Frontend Engineer to join our core product team. You will be responsible for building high-performance user interfaces using React and Tailwind CSS...',
    postedDate: 'Posted 2 days ago',
    status: 'Active'
  },
  {
    id: '2',
    title: 'Product Design Manager',
    company: 'Velocity Finance',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMliFl4GGcL3Ty8QNzI_REDTp8X_3b49Hh5ezfqbqXgh5ITmTNdVDtVprhcz8zQGq-Dn7xJbRMEIGgnNIdaC-htp0yi0Fn28zVG4vGbVhq15OJGoR4Nuer9jGcmvp1ZcTVvLod_p3Ckj2fSnDvuHLgZXY1fCQfZ20yyML_5C28KJRNy1i4ppCGEzxQzadTfHSwVcfpKAjreMI1hrJ4MGcQI6M7OzXrvcEpJEXWxBnIfGsliainMWfMJj9laE7x-WpBC-BDqAbxyYsh',
    location: 'New York, NY (Remote)',
    salary: '$160k - $210k',
    type: 'Full-time',
    description: 'Lead our design organization to create the next generation of financial tools. You will manage a team of 8 designers across UI/UX and user research...',
    postedDate: 'Posted 5 hours ago',
    status: 'Remote'
  },
  {
    id: '3',
    title: 'Operations Coordinator',
    company: 'Pulse Health',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyqnXGdNnswbdChnZRg0cv9U4uwsbegvCqpUby5Nu7Vgp5353XYt5BJ80COaKP0YytZWxJyzZwhUpvg8arh9-jjv-wDhSkAzF3oo33KX-y40iP7vEfo-GxrC_o2CMUJt2z3jD7tIQmeTJXbZTtzm7ts7TEbx0Ek92GOS0YnQ83_tq68dHrBXfYDyqHgUsGlhBaEr3GEb0Vtq_DwoHNaP9wirQ0T5VgVNKxpOlBQu_OB-Y7lhFfpBe4MqVirrzbbZoKTQfDJL2DHunQ',
    location: 'Austin, TX',
    salary: '$75k - $95k',
    type: 'Hybrid',
    description: 'We are looking for a detail-oriented Operations Coordinator to manage day-to-day logistics and internal communications at our Austin headquarters...',
    postedDate: 'Posted 1 day ago',
    isHot: true
  }
];

// --- Components ---

function TopAppBar() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="bg-secondary rounded p-1">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-slate-900">ProPath</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-secondary border-b-2 border-secondary pb-1">Find Jobs</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors">Dashboard</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors">Applications</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors">Messages</a>
        </nav>

        <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
          Post a Job
        </button>
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <div className="sticky top-[73px] z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search Inputs */}
          <div className="flex flex-1 w-full border border-outline-variant rounded-xl overflow-hidden divide-x divide-outline-variant bg-white focus-within:ring-2 focus-within:ring-secondary/20 transition-all">
            <div className="flex flex-1 items-center px-4 gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input 
                className="w-full border-none focus:outline-none text-on-surface py-3 text-sm" 
                placeholder="Job title, keywords, or company" 
                type="text"
              />
            </div>
            <div className="hidden md:flex flex-1 items-center px-4 gap-3">
              <MapPin className="w-5 h-5 text-slate-400" />
              <input 
                className="w-full border-none focus:outline-none text-on-surface py-3 text-sm" 
                placeholder="City, state, or zip code" 
                type="text"
              />
            </div>
            <button className="bg-secondary text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors">
              Find Jobs
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            {['Job Type', 'Salary', 'Remote'].map((filter) => (
              <button 
                key={filter}
                className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full text-sm font-medium text-on-surface hover:bg-slate-50 transition-colors"
              >
                {filter} <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>
            ))}
            <button className="p-2 text-secondary hover:bg-blue-50 rounded-full transition-colors">
              <SlidersHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 hover:shadow-lg hover:border-l-4 hover:border-l-secondary transition-all group flex flex-col md:flex-row gap-6"
    >
      <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
        <img 
          src={job.logo} 
          alt={job.company} 
          className="w-10 h-10 object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-1">
              {job.title}
            </h3>
            <p className="text-secondary font-medium">{job.company}</p>
          </div>
          {job.isHot ? (
            <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Hot Job</span>
          ) : (
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              job.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'
            }`}>
              {job.status}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
          <div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
            <MapPin className="w-4 h-4" /> {job.location}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
            <DollarSign className="w-4 h-4" /> {job.salary}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
            <Clock className="w-4 h-4" /> {job.type}
          </div>
        </div>

        <p className="text-sm text-on-surface-variant line-clamp-2 mb-6 leading-relaxed">
          {job.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs font-medium text-slate-400">{job.postedDate}</span>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-2 border border-outline-variant rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
              Save
            </button>
            <button className="flex-1 sm:flex-none px-8 py-2 bg-secondary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
              Quick Apply
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-1/3 gap-6">
      {/* Profile Card */}
      <div className="bg-primary-container text-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary-container">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv09f4Pm4MtDOpNTlDNhGxRRDh4RH-HjxvlJMOAVwBGyQ284FF-sMEpEFfxyafG3YLYpbPl-rM80IEzlud4KUjntAsdNZVzwVXl4oTOZHh8Toctlab6rpsbPPJHimXyqyKl_dvke_cYos8DDEn8vZp9xp1NS-W-RbnFStDo6fhRKnEJiosAMHfgbm7euQRH9QzKVmFZLADcq6Hg5-NQ2fhAFESeVOK6wuqp930hcM-LE2gCN5MVP11kEeUNGnX2LD-rGrwRV7mZhMn" 
              alt="Alex Rivers" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="text-lg font-bold">Alex Rivers</p>
            <p className="text-xs text-on-primary-container/80">Senior UX Designer</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium">Profile Strength</span>
            <span className="font-bold text-secondary-container">85%</span>
          </div>
          <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
            <div className="bg-secondary-container h-full w-[85%] rounded-full" />
          </div>
        </div>
        
        <button className="w-full mt-8 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-semibold transition-colors border border-white/20">
          Manage Profile
        </button>
      </div>

      {/* Alerts Card */}
      <div className="bg-white p-8 rounded-xl border border-slate-200">
        <h4 className="text-lg font-bold text-primary mb-2">Job Alerts</h4>
        <p className="text-sm text-on-surface-variant mb-6">Get notified when new jobs matching your profile are posted.</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <span className="text-sm font-semibold text-on-surface">Frontend Developer</span>
            <div className="w-10 h-5 bg-secondary rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <span className="text-sm font-semibold text-on-surface">Remote Design Roles</span>
            <div className="w-10 h-5 bg-slate-300 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
        </div>
        
        <button className="w-full mt-6 text-sm font-bold text-secondary hover:underline transition-all">
          + Create new alert
        </button>
      </div>

      {/* Promo Card */}
      <div className="bg-slate-900 p-8 rounded-xl relative overflow-hidden text-white h-64 flex flex-col justify-end group">
        <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv0VcnWe1FaAwTvYHsv0Dfm6zmCrnpuzId8HgwaXZmWwM1mK1u28Q-ghY2LSuzaSoMgtPFXOb7eMRHqH5yXNRHUWGpMr5e3m2SKfzgah9IkamO5S18cdqGGv4vzU_v5PQ_dNfj5jekpunmmonPVNLNEzy4sURcPt2papcseN_9AzqkZcc0ATiuuOCBN7RMRqnokEKEna_1A35ycNQg15JX8Cjg5jeWz1-J6d-cfHAHNrhI5gV6JPUQKiTmyyy9JjwdDSGdrK2vJYE4" 
            alt="ProPath Premium" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10">
          <h4 className="text-xl font-bold mb-1">ProPath Premium</h4>
          <p className="text-sm text-slate-300 mb-6 leading-snug">See how you compare to other applicants and stand out.</p>
          <button className="bg-white text-slate-900 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors w-full sm:w-auto">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 w-full mt-auto">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-slate-700 rounded p-1">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span className="text-md font-bold text-slate-700">ProPath</span>
          </div>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            © 2024 PROPATH PROFESSIONAL. ALL RIGHTS RESERVED.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {['Privacy Policy', 'Terms of Service', 'Help Center', 'Employer Solutions'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-xs uppercase tracking-widest text-slate-500 hover:text-secondary font-bold transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// --- Main App ---

export default function Propath1() {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      <TopAppBar />
      
      <main className="grow">
        <SearchBar />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-8">
          {/* Main Feed */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-on-surface">342 results found</h2>
              <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                <span>Sort by:</span>
                <select className="bg-transparent border-none focus:ring-0 text-secondary font-bold cursor-pointer p-0">
                  <option>Most Recent</option>
                  <option>Highest Salary</option>
                  <option>Relevance</option>
                </select>
              </div>
            </div>

            {JOBS.map((job) => (
              <div key={job.id}>
                <JobCard job={job} />
              </div>
            ))}

            <button className="w-full py-6 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant font-bold hover:bg-slate-50 hover:border-secondary/30 hover:text-secondary transition-all mt-4">
              Load more opportunities
            </button>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
