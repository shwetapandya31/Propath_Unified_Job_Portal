import React, { useState } from 'react';
import { 
  Briefcase, 
  ChevronDown, 
  MapPin, 
  Info, 
  FileText, 
  CheckCircle2, 
  PlusCircle, 
  Trash2, 
  Bold, 
  Italic, 
  List, 
  Link as LinkIcon, 
  Undo2, 
  Redo2, 
  Eye, 
  Send,
  User,
  LayoutDashboard,
  Plus,
  Settings,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Professional() {
  const [requirements, setRequirements] = useState([
    "5+ years of experience in modern JavaScript frameworks.",
    "Strong understanding of distributed systems and cloud architecture."
  ]);
  const [newRequirement, setNewRequirement] = useState("");

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement("");
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="bg-blue-700 p-1.5 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">ProPath</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">Find Jobs</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">Dashboard</a>
            <a href="#" className="text-sm font-medium text-blue-700 border-b-2 border-blue-700 pb-1">Post a Job</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium px-3 py-1 hover:bg-slate-100 rounded-md transition-colors text-slate-700">Alex Rivers</button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-100 ring-2 ring-white shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSA7DH3BpNqtAvI2-h6srbvWgKxV2Br3jwe25BiVy5kar1V2wKwBhPh2h8ibC2Xon7ATNDX2MeVkPplJLCRutwX64KODZqPUJq5zHyn-AxKSpSUswKCNirCwDfcwFP7TWlMpi7ttqYULm5wdCgEKvEHa_hnbhPu5xJ2SIRJBOoMraEHQh7WeUQgvF3YIgGsT4hGEzmfhcRdbyaD217sA21TL9mKQNM_JBWmEJC2WS94ai_obJqA32KLUVoPAVmmb44yogY-MkF8m0H" 
                alt="Alex Rivers" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block col-span-3">
          <div className="sticky top-24 space-y-2">
            <div className="px-4 py-2 border-b border-slate-200 mb-4">
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Creation Pipeline</p>
            </div>
            
            <SidebarItem icon={<FileText size={18} />} label="Job Details" active />
            <SidebarItem icon={<ShieldCheck size={18} />} label="Requirements" />
            <SidebarItem icon={<Settings size={18} />} label="Settings" />
            <SidebarItem icon={<Eye size={18} />} label="Preview" />
          </div>
        </aside>

        {/* Form Content */}
        <div className="col-span-1 md:col-span-9">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-primary mb-2">Create New Job Opening</h1>
            <p className="text-slate-500">Fill in the professional details to attract high-caliber candidates.</p>
          </div>

          <form className="space-y-8 pb-32">
            {/* Basic Information */}
            <Section icon={<Info className="text-blue-600" />} title="Basic Information">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Job Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Senior Principal Software Engineer" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-slate-700">
                      <option>Engineering & Tech</option>
                      <option>Product Management</option>
                      <option>Design</option>
                      <option>Operations</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="London, UK or Remote" 
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Salary Range (Minimum)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                    <input 
                      type="text" 
                      placeholder="80,000" 
                      className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Salary Range (Maximum)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                    <input 
                      type="text" 
                      placeholder="120,000" 
                      className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>
            </Section>

            {/* Job Description */}
            <Section icon={<FileText className="text-blue-600" />} title="Job Description">
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-slate-50 border-b border-slate-200 p-2 flex items-center gap-2">
                  <EditorButton icon={<Bold size={16} />} />
                  <EditorButton icon={<Italic size={16} />} />
                  <EditorButton icon={<List size={16} />} />
                  <EditorButton icon={<LinkIcon size={16} />} />
                  <div className="w-px h-4 bg-slate-300 mx-1" />
                  <EditorButton icon={<Undo2 size={16} />} />
                  <EditorButton icon={<Redo2 size={16} />} />
                </div>
                <textarea 
                  className="w-full p-6 min-h-[300px] outline-none text-slate-700 leading-relaxed placeholder:text-slate-300 resize-none"
                  placeholder="Describe the role, team dynamics, and daily responsibilities..."
                />
              </div>
            </Section>

            {/* Key Requirements */}
            <Section 
              icon={<CheckCircle2 className="text-blue-600" />} 
              title="Key Requirements"
              action={
                <button 
                  type="button" 
                  onClick={addRequirement}
                  className="flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-semibold text-sm transition-colors"
                >
                  <PlusCircle size={16} />
                  Add Requirement
                </button>
              }
            >
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {requirements.map((req, index) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={index} 
                      className="flex items-start gap-4 p-2 group"
                    >
                      <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      <span className="flex-grow text-slate-700 text-sm leading-relaxed">{req}</span>
                      <button 
                        type="button"
                        onClick={() => removeRequirement(index)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <div className="flex items-start gap-4 p-2">
                  <div className="mt-2 w-2 h-2 rounded-full bg-slate-200 shrink-0" />
                  <div className="flex-grow">
                    <input 
                      type="text" 
                      value={newRequirement}
                      onChange={(e) => setNewRequirement(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                      placeholder="Type a new requirement and press enter..."
                      className="w-full text-sm border-none bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                    />
                    <div className="h-px w-full bg-slate-100 mt-2" />
                  </div>
                </div>
              </div>
            </Section>
          </form>
        </div>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-40 bg-gradient-to-t from-background via-background/80 to-transparent">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-700">AR</div>
              <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-slate-400">
                <User size={12} />
              </div>
            </div>
            <span className="text-xs text-slate-500 animate-pulse">Draft saved 2 minutes ago by Alex</span>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-3 border border-slate-900 text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <Eye size={18} />
              Preview
            </button>
            <button className="flex-1 md:flex-none px-10 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              <Send size={18} />
              Post Job
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pb-40">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center gap-10">
          <div className="text-center">
            <h3 className="text-lg font-bold text-slate-800 mb-1">ProPath Professional</h3>
            <p className="text-[10px] uppercase tracking-widest text-slate-400">© 2024 ProPath Professional. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <FooterLink label="Privacy Policy" />
            <FooterLink label="Terms of Service" />
            <FooterLink label="Help Center" />
            <FooterLink label="Employer Solutions" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${active ? 'bg-slate-100 text-blue-700 font-bold border-l-4 border-blue-700' : 'text-slate-500 hover:bg-slate-50'}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}

function Section({ icon, title, children, action }: { icon: React.ReactNode, title: string, children: React.ReactNode, action?: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          {icon}
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

function EditorButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button type="button" className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-600 transition-all">
      {icon}
    </button>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-700 transition-colors">
      {label}
    </a>
  );
}
