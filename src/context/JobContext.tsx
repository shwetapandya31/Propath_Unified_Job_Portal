import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Job {
  id: string;
  employerId: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  category: string;
  status: 'Active' | 'Closed';
  postedAt: string;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  candidateName: string;
  appliedAt: string;
}

interface JobContextType {
  jobs: Job[];
  applications: Application[];
  addJob: (job: Omit<Job, 'id' | 'postedAt' | 'status'>) => void;
  editJob: (id: string, updatedJob: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  applyForJob: (jobId: string, candidateId: string, candidateName: string) => void;
  getJobsByEmployer: (employerId: string) => Job[];
  getApplicationsForEmployer: (employerId: string) => { job: Job, application: Application }[];
  getApplicationsByCandidate: (candidateId: string) => { job: Job | undefined, application: Application }[];
  hasApplied: (jobId: string, candidateId: string) => boolean;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

// Initial mock jobs
const initialJobs: Job[] = [
  {
    id: '1',
    employerId: 'emp1',
    title: 'Senior Product Designer',
    company: 'ScaleAI',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-Time',
    salary: '$160k – $220k',
    description: 'Looking for a Senior Product Designer to lead the evolution of our enterprise dashboard.',
    category: 'Design',
    status: 'Active',
    postedAt: new Date().toISOString()
  },
  {
    id: '2',
    employerId: 'emp1',
    title: 'Senior Software Engineer',
    company: 'ScaleAI',
    location: 'Austin, TX (Remote)',
    type: 'Full-time',
    salary: '$140k - $180k',
    description: 'We need an experienced engineer to scale our cloud systems.',
    category: 'Tech',
    status: 'Active',
    postedAt: new Date().toISOString()
  },
  {
    id: '3',
    employerId: 'emp2',
    title: 'Data Analyst',
    company: 'FinTech Solutions',
    location: 'Mumbai, India',
    type: 'Full-time',
    salary: '₹12L - ₹18L',
    description: 'Seeking a Data Analyst to interpret complex data sets and provide actionable insights for our financial products.',
    category: 'Tech',
    status: 'Active',
    postedAt: new Date().toISOString()
  },
  {
    id: '4',
    employerId: 'emp2',
    title: 'Full Stack Developer',
    company: 'TechFlow',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹15L - ₹25L',
    description: 'Join our team to build scalable web applications using React and Node.js.',
    category: 'Tech',
    status: 'Active',
    postedAt: new Date().toISOString()
  },
  {
    id: '5',
    employerId: 'emp3',
    title: 'Marketing Manager',
    company: 'Global Brands',
    location: 'New York, NY',
    type: 'Hybrid',
    salary: '$90k - $120k',
    description: 'Lead our marketing campaigns and expand our brand presence globally.',
    category: 'Marketing',
    status: 'Active',
    postedAt: new Date().toISOString()
  }
];

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>(() => {
    const saved = localStorage.getItem('propath_jobs');
    if (saved) {
      const parsedSaved = JSON.parse(saved);
      // Merge initialJobs into saved jobs if they don't already exist (by ID)
      const merged = [...parsedSaved];
      initialJobs.forEach(initialJob => {
        if (!merged.find(j => j.id === initialJob.id)) {
          merged.push(initialJob);
        }
      });
      return merged;
    }
    return initialJobs;
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem('propath_applications');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('propath_jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('propath_applications', JSON.stringify(applications));
  }, [applications]);

  const addJob = (job: Omit<Job, 'id' | 'postedAt' | 'status'>) => {
    const newJob: Job = {
      ...job,
      id: Math.random().toString(36).substr(2, 9),
      status: 'Active',
      postedAt: new Date().toISOString()
    };
    setJobs([newJob, ...jobs]);
  };

  const editJob = (id: string, updatedFields: Partial<Job>) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, ...updatedFields } : j));
  };

  const deleteJob = (id: string) => {
    setJobs(jobs.filter(j => j.id !== id));
    setApplications(applications.filter(a => a.jobId !== id)); // Delete related applications
  };

  const applyForJob = (jobId: string, candidateId: string, candidateName: string) => {
    if (hasApplied(jobId, candidateId)) return;
    
    const newApp: Application = {
      id: Math.random().toString(36).substr(2, 9),
      jobId,
      candidateId,
      candidateName,
      appliedAt: new Date().toISOString()
    };
    setApplications([newApp, ...applications]);
  };

  const getJobsByEmployer = (employerId: string) => {
    return jobs.filter(j => j.employerId === employerId);
  };

  const getApplicationsForEmployer = (employerId: string) => {
    const employerJobs = getJobsByEmployer(employerId).map(j => j.id);
    return applications
      .filter(a => employerJobs.includes(a.jobId))
      .map(app => ({
        job: jobs.find(j => j.id === app.jobId)!,
        application: app
      }));
  };

  const getApplicationsByCandidate = (candidateId: string) => {
    return applications
      .filter(a => a.candidateId === candidateId)
      .map(app => ({
        job: jobs.find(j => j.id === app.jobId),
        application: app
      }));
  };

  const hasApplied = (jobId: string, candidateId: string) => {
    return applications.some(a => a.jobId === jobId && a.candidateId === candidateId);
  };

  return (
    <JobContext.Provider value={{
      jobs, applications, addJob, editJob, deleteJob, applyForJob,
      getJobsByEmployer, getApplicationsForEmployer, getApplicationsByCandidate, hasApplied
    }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJob() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJob must be used within a JobProvider');
  }
  return context;
}
