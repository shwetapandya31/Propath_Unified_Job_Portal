import { useAuth } from '../context/AuthContext';
import { useJob } from '../context/JobContext';
import { useNavigate, Link } from 'react-router-dom';
import { Briefcase, Building } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const { getApplicationsByCandidate } = useJob();
  const navigate = useNavigate();

  if (!user || user.role !== 'Candidate') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Access Denied</h2>
          <p className="mt-2 text-gray-600">You must be logged in as a Candidate to view this page.</p>
          <button onClick={() => navigate('/login')} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Login</button>
        </div>
      </div>
    );
  }

  const myApplications = getApplicationsByCandidate(user.id);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-12">
      <main className="max-w-4xl mx-auto px-6 mt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-500 mt-2">Track the status of jobs you've applied for.</p>
        </div>

        {myApplications.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Applications Yet</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">You haven't applied to any jobs yet. Browse the job board to find your next opportunity.</p>
            <Link to="/job-board" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {myApplications.map(({ job, application }) => (
              <div key={application.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md hover:border-blue-200">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-gray-400">
                    {job ? (
                      <span className="text-xl font-bold text-gray-800">{job.company[0]}</span>
                    ) : (
                      <Building size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {job ? job.title : 'Job no longer available'}
                    </h3>
                    {job && (
                      <p className="text-sm font-medium text-gray-600 mt-1">
                        {job.company} • {job.location}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                    Applied
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {new Date(application.appliedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
