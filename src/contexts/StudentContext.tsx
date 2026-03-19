import React, { useEffect, useState, createContext, useContext } from 'react';
import { supabase } from './supabaseClient';
export interface FeeStatement {
  id: string;
  date: string;
  amount: number;
  transactionCode: string;
  method: string;
  description: string;
}
export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  feesPaid: number;
  totalFees: number;
  pendingDays: number;
  eligibleForExams: boolean;
  status: string;
  enrollmentDate: string;
  feeStatements: FeeStatement[];
}

export interface StudentContextType {
  students: Student[];
  addStudent: (student: Student) => void;
  updateStudent: (id: string, data: Partial<Student>) => void;
  deleteStudent: (id: string) => void;
    // Student login removed: login/logout methods removed
}
const StudentContext = createContext<StudentContextType | undefined>(undefined);
export function StudentProvider({ children }: {children: React.ReactNode;}) {
  const [students, setStudents] = useState<Student[]>([]);
  // Student login removed: currentStudentId state cleaned up

  // Fetch students from Supabase
  useEffect(() => {
    async function fetchStudents() {
      const { data, error } = await supabase
        .from('students')
        .select('*');
      if (!error && data) {
        setStudents(data);
      }
    }
    fetchStudents();
  }, []);

  // CRUD operations
  const addStudent = async (student: Student) => {
    const { data, error } = await supabase
      .from('students')
      .insert([student]);
    if (!error && data) {
      setStudents((prev) => [data[0], ...prev]);
    }
  };
  const updateStudent = async (id: string, data: Partial<Student>) => {
    const { data: updated, error } = await supabase
      .from('students')
      .update(data)
      .eq('id', id);
    if (!error && updated) {
      setStudents((prev) =>
        prev.map((s) => (s.id === id ? { ...s, ...data } : s))
      );
    }
  };
  const deleteStudent = async (id: string) => {
    const { error } = await supabase
      .from('students')
      .delete()
      .eq('id', id);
    if (!error) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };
    // Student login removed: login/logout logic removed
  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateStudent,
        deleteStudent,
          // currentStudent removed
          // login/logout methods removed
      }}>
      {children}
    </StudentContext.Provider>
  );
}
export function useStudentContext() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
}