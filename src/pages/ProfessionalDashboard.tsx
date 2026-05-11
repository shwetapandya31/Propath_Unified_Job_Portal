import { 
  Briefcase, 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  FileText, 
  Plus,
  Edit,
  Trash
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useJob, Job } from '../context/JobContext';
import { useNavigate } from 'react-router-dom';

export default function ProfessionalDashboard() {
  const { user } = useAuth();
  const { getApplicationsForEmployer, addJob, editJob, deleteJob, jobs } = useJob();
  const navigate = useNavigate();

  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Full-Time');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Tech');

  if (!user || user.role !== 'Employer') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Access Denied</h2>
          <p className="mt-2 text-gray-600">You must be logged in as an Employer to view this page.</p>
          <button onClick={() => navigate('/login')} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Login</button>
        </div>
      </div>
    );
  }

  const applications = getApplicationsForEmployer(user.id);
  // Fallback: Also show jobs where company name matches user name (useful if session ID changed)
  const myJobs = jobs.filter(j => j.employerId === user.id || (j.company === user.name));

  const openNewJobModal = () => {
    setEditingJobId(null);
    setTitle(''); setLocation(''); setType('Full-Time'); setSalary(''); setDescription(''); setCategory('Tech');
    setShowPostJobModal(true);
  };

  const openEditJobModal = (job: Job) => {
    setEditingJobId(job.id);
    setTitle(job.title); setLocation(job.location); setType(job.type); setSalary(job.salary); setDescription(job.description); setCategory(job.category || 'Tech');
    setShowPostJobModal(true);
  };

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingJobId) {
      editJob(editingJobId, { title, location, type, salary, description, category });
      alert('Job updated successfully!');
    } else {
      addJob({
        employerId: user.id,
        company: user.name,
        title,
        location,
        type,
        salary,
        description,
        category
      });
      alert('Job posted successfully!');
    }
    setShowPostJobModal(false);
  };

  const toggleJobStatus = (job: Job) => {
    const newStatus = job.status === 'Active' ? 'Closed' : 'Active';
    editJob(job.id, { status: newStatus });
  };

  const handleDeleteJob = (id: string) => {
    if (window.confirm("Are you sure you want to delete this job? All applications will be lost.")) {
      deleteJob(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 pt-8">
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-1">Employer Dashboard</h1>
            <p className="text-gray-500 text-sm">Manage your job postings and view applicants</p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button 
              onClick={openNewJobModal}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Plus size={18} />
              Post a New Job
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: My Jobs */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">My Jobs</h2>
            {myJobs.length === 0 ? (
              <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center text-gray-500">
                You haven't posted any jobs yet.
              </div>
            ) : (
              myJobs.map(job => (
                <div key={job.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm relative group">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <button onClick={() => openEditJobModal(job)} className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded" title="Edit Job"><Edit size={16}/></button>
                    <button onClick={() => handleDeleteJob(job.id)} className="p-1.5 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded" title="Delete Job"><Trash size={16}/></button>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900 pr-16">{job.title}</h3>
                    <button 
                      onClick={() => toggleJobStatus(job)}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        job.status === 'Active' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-red-50 text-red-700 border-red-200'
                      }`}
                    >
                      {job.status || 'Active'}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                  <p className="text-sm text-gray-500 mt-1">{job.category} • {job.salary}</p>
                  <div className="mt-4 text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">
                    {applications.filter(a => a.job.id === job.id).length} Applicants
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Applicants */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Applications</h2>
            {applications.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center text-gray-500 shadow-sm">
                <UsersIcon className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <p>No applications received yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map(({ job, application }) => (
                  <div key={application.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                        {application.candidateName[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{application.candidateName}</h3>
                        <p className="text-sm text-gray-500">Applied for: <span className="font-semibold text-blue-600">{job.title}</span></p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 font-medium whitespace-nowrap">
                      {new Date(application.appliedAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Post/Edit Job Modal */}
      {showPostJobModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">{editingJobId ? 'Edit Job' : 'Post a New Job'}</h2>
            <form onSubmit={handlePostJob} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Job Title</label>
                  <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Senior Frontend Developer" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                  <input required type="text" value={location} onChange={e => setLocation(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Remote, San Francisco" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Job Type</label>
                  <select value={type} onChange={e => setType(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Salary Range</label>
                  <input required type="text" value={salary} onChange={e => setSalary(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. $100k - $120k" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                  <select value={category} onChange={e => setCategory(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Tech</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Customer Support</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Job Description</label>
                <textarea required value={description} onChange={e => setDescription(e.target.value)} rows={5} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Describe the role, responsibilities, and requirements..."></textarea>
              </div>
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
                <button type="button" onClick={() => setShowPostJobModal(false)} className="px-5 py-2.5 text-gray-600 font-semibold hover:bg-gray-100 rounded-xl">Cancel</button>
                <button type="submit" className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg">{editingJobId ? 'Save Changes' : 'Post Job'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function UsersIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
