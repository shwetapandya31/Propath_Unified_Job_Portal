import React, { createContext, useContext, useState, useEffect } from 'react';

export type Role = 'Candidate' | 'Employer';

export interface User {
  id: string;
  name: string;
  role: Role;
  email: string;
}

interface AuthContextType {
  user: User | null;
  allUsers: User[];
  login: (email: string, name: string, role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('propath_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [allUsers, setAllUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('propath_all_users');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('propath_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('propath_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('propath_all_users', JSON.stringify(allUsers));
  }, [allUsers]);

  const login = (email: string, name: string, role: Role) => {
    // Check if user already exists
    const existingUser = allUsers.find(u => u.email === email);
    
    if (existingUser) {
      setUser(existingUser);
    } else {
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        role
      };
      setUser(newUser);
      setAllUsers(prev => [...prev, newUser]);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, allUsers, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
