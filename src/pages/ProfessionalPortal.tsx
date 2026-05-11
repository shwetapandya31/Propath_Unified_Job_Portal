import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Eye, EyeOff } from 'lucide-react';

type UserRole = 'Candidate' | 'Employer';

export default function ProfessionalPortal() {
  const [role, setRole] = useState<UserRole>('Candidate');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-secondary/20">
      {/* Background Decoration */}
      <div className="fixed top-0 right-0 h-full w-1/3 bg-brand-secondary opacity-5 -z-10 blur-[120px] pointer-events-none" />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-20 max-w-[480px] mx-auto w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-secondary/5 rounded-xl flex items-center justify-center">
              <Briefcase className="text-brand-secondary w-7 h-7" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter text-brand-primary">ProPath</h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary leading-tight">
            Welcome to the future of work
          </h2>
          <p className="text-brand-dim text-base">
            Sign up to access verified opportunities and professional growth.
          </p>
        </div>

        {/* Role Selection */}
        <div className="w-full bg-brand-container p-1 rounded-2xl flex items-center mb-8 relative">
          {(['Candidate', 'Employer'] as UserRole[]).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 relative py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors duration-200 z-10 ${
                role === r ? 'text-brand-secondary' : 'text-brand-dim hover:text-brand-primary'
              }`}
            >
              {r}
              {role === r && (
                <motion.div
                  layoutId="role-bg"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Auth Card */}
        <div className="w-full bg-white border border-brand-outline rounded-2xl p-8 shadow-[0px_8px_24px_-4px_rgba(0,0,0,0.04)]">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-dim block" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="alex@rivers.pro"
                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-outline rounded-xl focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/10 transition-all outline-none text-brand-primary placeholder:text-brand-dim/50"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-brand-dim block" htmlFor="password">
                  Password
                </label>
                <button type="button" className="text-xs font-semibold text-brand-secondary hover:underline transition-all">
                  Forgot?
                </button>
              </div>
              <div className="relative group">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-outline rounded-xl focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/10 transition-all outline-none text-brand-primary placeholder:text-brand-dim/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-brand-dim/40 hover:text-brand-dim transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-brand-dim leading-relaxed">
                Must be at least 8 characters long.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-secondary text-white font-bold py-4 rounded-xl hover:bg-brand-secondary/90 active:scale-[0.98] transition-all shadow-md shadow-brand-secondary/10"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-brand-outline"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-4 text-brand-dim font-bold uppercase tracking-widest text-[10px]">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2.5 border border-brand-outline bg-white py-3 px-4 rounded-xl hover:bg-brand-bg hover:border-brand-dim/20 active:scale-[0.98] transition-all group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvRiHcU5vUAfjCSK03tm7wRHi9043S-FldMn38RAgGkIUxSjdeZr2TUXJJr1k-wn5Zt5_HJ6ajvCP35MUKrqA9MFT8CmBemyUTPGuBUTABS1Ui8ZvnIL9_I-0-D5XbkvmoNYlVN8qWDjVkw4oj_Usppf8gm_p34Yx2Ltx8I9sWvey6p_seeWC1jT351wo_IfdF6shuxAF9VD9XRibDfppxODp93IBRtHUh4tfftFhZsjaVs_CeSytZvJGagGgDq1Baijy4GUZIftH1"
                alt="Google"
                referrerPolicy="no-referrer"
                className="w-5 h-5"
              />
              <span className="text-sm font-semibold text-brand-primary">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2.5 border border-brand-outline bg-white py-3 px-4 rounded-xl hover:bg-brand-bg hover:border-brand-dim/20 active:scale-[0.98] transition-all group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQXA-hsaU2qlNHbmNW8_wg879_OBhxK4rZwzIHeAEbmeJgFdnWBaUTD6AGixSqKHmx7fiOVoLqIqtkc3OoKkZxKqGHOEIb7BrkKuwPV44uarB_B2WGnZfRnYe93_xQ1HNY7-MIAZrO_Q6MzG_PSBP5T-xv7SYonZdjwPAVnfC1ARwiolrsFZ28ALUcRILG1vr2FUh5tW3RzlrN5_duwlhlyN-V_SDsYOyEyRqwTudor2OOeUXzEWgtoX4bsXhNGKnhUQ5blE9KX4Qi"
                alt="LinkedIn"
                referrerPolicy="no-referrer"
                className="w-5 h-5"
              />
              <span className="text-sm font-semibold text-brand-primary">LinkedIn</span>
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <p className="mt-8 text-center text-sm font-medium text-brand-dim">
          Already have an account?{' '}
          <button className="text-brand-secondary font-bold hover:underline transition-all">
            Log in
          </button>
        </p>
      </main>

      {/* Main Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-brand-outline bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 grayscale opacity-70">
          <span className="text-sm font-bold text-brand-primary">ProPath</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dim">Professional</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-brand-dim hover:text-brand-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-brand-dim hover:text-brand-secondary transition-colors">Terms of Service</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-brand-dim hover:text-brand-secondary transition-colors">Help Center</a>
        </nav>
        
        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dim/60">
          © 2024 ProPath Professional. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
