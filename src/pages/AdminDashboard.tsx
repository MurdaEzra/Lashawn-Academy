import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../contexts/supabaseClient';
import {
  Users,
  Search,
  Filter,
  LogOut,
  CheckCircle,
  XCircle,
  Clock,
  MoreVertical,
  Download,
  GraduationCap,
  CreditCard,
  ShieldAlert,
  Edit3,
  Save,
  X,
  DollarSign,
  Trash2,
  Check,
  Award,
  AlertTriangle,
  Plus,
  UserPlus,
  Printer } from
'lucide-react';
import { useStudentContext } from '../contexts/StudentContext';
// Fee Structure State
const DEFAULT_FEES = {
  'Category A (Motorcycles)': {
    theoryOnly: 5000,
    practical: 8000,
    both: 12000
  },
  'Category B (Cars)': {
    theoryOnly: 6000,
    practical: 12000,
    both: 16000
  },
  'Category C (Light Commercial)': {
    theoryOnly: 7000,
    practical: 14000,
    both: 19000
  },
  'Category D (Heavy Vehicles)': {
    theoryOnly: 8000,
    practical: 18000,
    both: 24000
  },
  'Tuktuk (Three-wheelers)': {
    theoryOnly: 4000,
    practical: 7000,
    both: 10000
  },
  'Microsoft Office Suite': {
    theoryOnly: 0,
    practical: 0,
    both: 8000
  },
  'Basic IT & Networking': {
    theoryOnly: 0,
    practical: 0,
    both: 10000
  },
  'First Aid Training': {
    theoryOnly: 0,
    practical: 0,
    both: 5000
  },
  'Basic Mechanics': {
    theoryOnly: 0,
    practical: 0,
    both: 7000
  },
  'KRA PIN Registration': {
    theoryOnly: 0,
    practical: 0,
    both: 500
  },
  'HELB Application Assistance': {
    theoryOnly: 0,
    practical: 0,
    both: 800
  },
  'eCitizen Service Support': {
    theoryOnly: 0,
    practical: 0,
    both: 500
  },
  'Driving License Renewal': {
    theoryOnly: 0,
    practical: 0,
    both: 1000
  }
};
export function AdminDashboard() {
  const navigate = useNavigate();
  const {
    students: contextStudents,
    updateStudent,
    deleteStudent,
    addStudent
  } = useStudentContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('All');
  const [students, setStudents] = useState(contextStudents);
  const [activeTab, setActiveTab] = useState<'students' | 'register' | 'fees'>(
    'students'
  );
  const [fees, setFees] = useState(DEFAULT_FEES);
  const [editingFee, setEditingFee] = useState<string | null>(null);
  const [editValues, setEditValues] = useState({
    theoryOnly: 0,
    practical: 0,
    both: 0
  });
  const [feeSaved, setFeeSaved] = useState(false);
  const [openActionMenu, setOpenActionMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  // Registration State
  const [regData, setRegData] = useState({
    studentName: '',
    idNumber: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    nationality: 'Kenyan',
    county: '',
    course: Object.keys(DEFAULT_FEES)[0],
    drivingClass: 'both',
    feesPaid: 0,
    transactionCode: '',
    schedule: 'Morning',
    kinName: '',
    kinPhone: '',
    kinRelationship: ''
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [registeredStudent, setRegisteredStudent] = useState<any>(null);
  // Student Detail Modal State
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [isEditingStudent, setIsEditingStudent] = useState(false);
  const [editStudentData, setEditStudentData] = useState<any>(null);
  // New Payment State for Modal
  const [newPayment, setNewPayment] = useState({
    amount: 0,
    transactionCode: ''
  });
  const handleRegChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
  {
    const { name, value } = e.target;
    setRegData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const calculateTotalFees = () => {
    const courseFees = fees[regData.course as keyof typeof fees];
    if (!courseFees) return 1500; // Base registration fee
    const classFee =
    courseFees[regData.drivingClass as keyof typeof courseFees] || 0;
    return classFee + 1500; // Add 1500 registration fee
  };
  const handleRegisterSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsRegistering(true);

  try {
    // Generate registration number
    const year = new Date().getFullYear();
    const { data: studentsList, error: countError } = await supabase
      .from('students')
      .select('id', { count: 'exact' });

    if (countError) throw countError;

    const regCount = studentsList ? studentsList.length : 0;
    const regNum = String(regCount + 1).padStart(4, '0');
    const newId = `LASH-${year}-${regNum}`;

    const totalFees = calculateTotalFees();

    // Insert into students table
    const { data: studentData, error: studentError } = await supabase
      .from('students')
      .insert([
        {
          name: regData.studentName,
          idNumber: regData.idNumber,
          email: regData.email,
          phone: regData.phone,
          course: regData.course,
          feesPaid: Number(regData.feesPaid),
          totalFees: totalFees,
          pendingDays: 30,
          eligibleForExams: "false",
          status: "Active",
          enrollmentDate: new Date().toISOString().split('T')[0]
        }
      ])
      .select(); // <--- important to get inserted row with ID

    if (studentError || !studentData || studentData.length === 0) throw studentError || new Error('No student data returned');

    const studentId = studentData[0].id; // ID of newly inserted student

    // Insert into enrollments table with student_id
    const { error: enrollmentError } = await supabase
      .from('enrollments')
      .insert([
        {
          student_id: studentId,          // <-- link to student
          course: regData.course,
          enrollment_date: new Date().toISOString().split('T')[0],
          status: "Active"
        }
      ]);

    if (enrollmentError) throw enrollmentError;

    // Update local state
    setRegisteredStudent({
      id: newId,
      name: regData.studentName,
      email: regData.email,
      course: regData.course,
      totalFees: totalFees ?? 0,
      feesPaid: Number(regData.feesPaid) ?? 0
    });

    setIsRegistering(false);
    setActiveTab('students');

    // Refresh students list
    const { data: updatedStudents } = await supabase
      .from('students')
      .select('*');
    setStudents(updatedStudents ?? []);

  } catch (err) {
    console.error('Registration failed:', err);
    setIsRegistering(false);
  }
};
  const resetRegistration = () => {
    setRegisteredStudent(null);
    setRegData({
      studentName: '',
      idNumber: '',
      email: '',
      phone: '',
      gender: '',
      dob: '',
      nationality: 'Kenyan',
      county: '',
      course: Object.keys(DEFAULT_FEES)[0],
      drivingClass: 'both',
      feesPaid: 0,
      transactionCode: '',
      schedule: 'Morning',
      kinName: '',
      kinPhone: '',
      kinRelationship: ''
    });
  };
  const handleDeleteStudent = (studentId: string) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      deleteStudent(studentId);
      if (selectedStudent?.id === studentId) setSelectedStudent(null);
    }
    setOpenActionMenu(null);
  };
  const handleSaveStudentEdit = () => {
    if (editStudentData) {
      updateStudent(editStudentData.id, {
        name: editStudentData.name,
        email: editStudentData.email,
        phone: editStudentData.phone,
        course: editStudentData.course,
        feesPaid: Number(editStudentData.feesPaid),
        totalFees: Number(editStudentData.totalFees),
        pendingDays: Number(editStudentData.pendingDays),
        eligibleForExams: editStudentData.eligibleForExams,
        status: editStudentData.status,
        feeStatements: editStudentData.feeStatements
      });
      setSelectedStudent({
        ...selectedStudent,
        ...editStudentData
      });
      setIsEditingStudent(false);
    }
  };
  const handleAddNewPayment = () => {
    if (newPayment.amount > 0 && newPayment.transactionCode) {
      const newStatement = {
        id: 'TXN-' + Date.now(),
        date: new Date().toISOString().split('T')[0],
        amount: Number(newPayment.amount),
        transactionCode: newPayment.transactionCode,
        method: 'M-Pesa/Till',
        description: 'Installment Payment'
      };
      const updatedFeesPaid =
      Number(editStudentData.feesPaid) + Number(newPayment.amount);
      const updatedStatements = [
      ...(editStudentData.feeStatements || []),
      newStatement];

      setEditStudentData({
        ...editStudentData,
        feesPaid: updatedFeesPaid,
        feeStatements: updatedStatements
      });
      setNewPayment({
        amount: 0,
        transactionCode: ''
      });
    }
  };
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth');
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate]);
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };
  useEffect(() => {
    let filtered = contextStudents;
    if (searchTerm) {
      filtered = filtered.filter(
        (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filterCourse !== 'All') {
      filtered = filtered.filter((s) => s.course.includes(filterCourse));
    }
    setStudents(filtered);
  }, [searchTerm, filterCourse, contextStudents]);
  // Close action menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenActionMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const totalStudents = contextStudents.length;
  const eligibleStudents = contextStudents.filter(
    (s) => s.eligibleForExams
  ).length;
  const totalRevenue = contextStudents.reduce((sum, s) => sum + s.feesPaid, 0);
  const pendingFees = contextStudents.reduce(
    (sum, s) => sum + (s.totalFees - s.feesPaid),
    0
  );
  const startEditingFee = (category: string) => {
    setEditingFee(category);
    setEditValues(fees[category as keyof typeof fees]);
    setFeeSaved(false);
  };
  const saveFee = () => {
    if (editingFee) {
      setFees((prev) => ({
        ...prev,
        [editingFee]: editValues
      }));
      setEditingFee(null);
      setFeeSaved(true);
      setTimeout(() => setFeeSaved(false), 3000);
    }
  };
  const cancelEditFee = () => {
    setEditingFee(null);
  };
  const handleMarkPaid = (studentId: string, totalFees: number) => {
    updateStudent(studentId, {
      feesPaid: totalFees
    });
    setOpenActionMenu(null);
  };
  const handleToggleEligibility = (
  studentId: string,
  currentStatus: boolean) =>
  {
    updateStudent(studentId, {
      eligibleForExams: !currentStatus
    });
    setOpenActionMenu(null);
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Admin Header */}
      <div className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/Lashawn_Logo-removebg-preview.png"
              alt="Lashawn Logo"
              className="h-10 w-auto object-contain mr-4 brightness-0 invert" />
            
            <div>
              <h1 className="text-xl font-bold">Lashawn Admin Portal</h1>
              <p className="text-xs text-gray-400">Student Management System</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-300 hover:text-white transition-colors text-sm font-medium bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
            
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center">
            <div className="bg-blue-100 p-4 rounded-full mr-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Total Students
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {totalStudents}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center">
            <div className="bg-green-100 p-4 rounded-full mr-4">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Exam Eligible</p>
              <p className="text-2xl font-bold text-gray-900">
                {eligibleStudents}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center">
            <div className="bg-emerald-100 p-4 rounded-full mr-4">
              <CreditCard className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                KSh {totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center">
            <div className="bg-orange-100 p-4 rounded-full mr-4">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Pending Fees</p>
              <p className="text-2xl font-bold text-gray-900">
                KSh {pendingFees.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'students' ? 'border-[#2E8B57] text-[#2E8B57]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            
            <Users className="h-4 w-4 inline mr-2" />
            Student Directory
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'register' ? 'border-[#2E8B57] text-[#2E8B57]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            
            <UserPlus className="h-4 w-4 inline mr-2" />
            Register Student
          </button>
          <button
            onClick={() => setActiveTab('fees')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'fees' ? 'border-[#2E8B57] text-[#2E8B57]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            
            <DollarSign className="h-4 w-4 inline mr-2" />
            Fee Structure
          </button>
        </div>

        {/* Students Tab */}
        {activeTab === 'students' &&
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-sm border border-gray-200 border-t-0 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-gray-800">
                All Admitted Students
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                  type="text"
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none w-full sm:w-64" />
                
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-4 w-4 text-gray-400" />
                  </div>
                  <select
                  value={filterCourse}
                  onChange={(e) => setFilterCourse(e.target.value)}
                  className="pl-9 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none appearance-none bg-white w-full sm:w-auto">
                  
                    <option value="All">All Courses</option>
                    <option value="Category">Driving Courses</option>
                    <option value="Microsoft">Computer Courses</option>
                    <option value="Basic IT">IT Courses</option>
                  </select>
                </div>
                <button
                onClick={() => window.print()}
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors border border-gray-300">
                
                  <Printer className="h-4 w-4 mr-2" />
                  Export PDF
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-200">
                    <th className="px-6 py-4 font-semibold">Reg No. & Name</th>
                    <th className="px-6 py-4 font-semibold">Course Enrolled</th>
                    <th className="px-6 py-4 font-semibold">Fees Status</th>
                    <th className="px-6 py-4 font-semibold">Pending Days</th>
                    <th className="px-6 py-4 font-semibold">
                      Exam Eligibility
                    </th>
                    <th className="px-6 py-4 font-semibold text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.length > 0 ?
                students.map((student) => {
                  const feePercentage =
                  student.feesPaid / student.totalFees * 100;
                  const isFullyPaid = feePercentage === 100;
                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => {
                        setSelectedStudent(student);
                        setEditStudentData(student);
                        setIsEditingStudent(false);
                      }}>
                      
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] flex items-center justify-center font-bold text-sm mr-3">
                                {student.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {student.name}
                                </p>
                                <p className="text-xs text-gray-500 font-mono">
                                  {student.id}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-700">
                              {student.course}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-gray-900">
                                  KSh {student.feesPaid.toLocaleString()}
                                </span>
                                <span className="text-xs text-gray-500">
                                  / {student.totalFees.toLocaleString()}
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                              className={`h-1.5 rounded-full ${isFullyPaid ? 'bg-green-500' : 'bg-orange-500'}`}
                              style={{
                                width: `${feePercentage}%`
                              }}>
                            </div>
                              </div>
                              {!isFullyPaid &&
                          <span className="text-xs text-orange-600 mt-1 font-medium">
                                  Balance: KSh{' '}
                                  {(
                            student.totalFees - student.feesPaid).
                            toLocaleString()}
                                </span>
                          }
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {student.pendingDays > 0 ?
                        <div className="flex items-center text-sm text-gray-700">
                                <Clock className="h-4 w-4 text-blue-500 mr-1.5" />
                                {student.pendingDays} days left
                              </div> :

                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Completed
                              </span>
                        }
                          </td>
                          <td className="px-6 py-4">
                            {student.eligibleForExams ?
                        <div className="flex items-center text-sm text-green-600 font-medium">
                                <CheckCircle className="h-4 w-4 mr-1.5" />
                                Eligible
                              </div> :

                        <div className="flex items-center text-sm text-red-600 font-medium">
                                <XCircle className="h-4 w-4 mr-1.5" />
                                Not Eligible
                              </div>
                        }
                          </td>
                          <td className="px-6 py-4 text-right relative">
                            <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenActionMenu(
                              openActionMenu === student.id ?
                              null :
                              student.id
                            );
                          }}
                          className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors">
                          
                              <MoreVertical className="h-5 w-5" />
                            </button>

                            {openActionMenu === student.id &&
                        <div
                          ref={menuRef}
                          className="absolute right-8 top-10 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50 py-1 text-left"
                          onClick={(e) => e.stopPropagation()}>
                          
                                {!isFullyPaid &&
                          <button
                            onClick={() =>
                            handleMarkPaid(
                              student.id,
                              student.totalFees
                            )
                            }
                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            
                                    <Check className="h-4 w-4 mr-2 text-green-500" />
                                    Mark as Fully Paid
                                  </button>
                          }
                                <button
                            onClick={() =>
                            handleToggleEligibility(
                              student.id,
                              student.eligibleForExams
                            )
                            }
                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            
                                  <Award className="h-4 w-4 mr-2 text-blue-500" />
                                  Toggle Eligibility
                                </button>
                                <div className="border-t border-gray-100 my-1"></div>
                                <button
                            onClick={() =>
                            handleDeleteStudent(student.id)
                            }
                            className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center">
                            
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete Student
                                </button>
                              </div>
                        }
                          </td>
                        </tr>);

                }) :

                <tr>
                      <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500">
                    
                        <div className="flex flex-col items-center justify-center">
                          <Search className="h-8 w-8 text-gray-300 mb-2" />
                          <p>No students found matching your criteria.</p>
                        </div>
                      </td>
                    </tr>
                }
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
              <span className="text-sm text-gray-600">
                Showing <span className="font-medium">{students.length}</span>{' '}
                of <span className="font-medium">{contextStudents.length}</span>{' '}
                students
              </span>
              <div className="flex space-x-2">
                <button
                className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 disabled:opacity-50"
                disabled>
                
                  Previous
                </button>
                <button
                className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 disabled:opacity-50"
                disabled>
                
                  Next
                </button>
              </div>
            </div>
          </div>
        }

        {/* Register Tab */}
        {activeTab === 'register' &&
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-sm border border-gray-200 border-t-0 overflow-hidden">
            {registeredStudent ?
          <div className="p-8 print:p-0">
                <div className="text-center mb-8 print:hidden">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Student Registered Successfully!
                  </h2>
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                  onClick={() => window.print()}
                  className="flex items-center bg-[#2E8B57] text-white px-4 py-2 rounded-md hover:bg-[#267349]">
                  
                      <Printer className="h-4 w-4 mr-2" /> Print Receipt
                    </button>
                    <button
                  onClick={resetRegistration}
                  className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                  
                      <UserPlus className="h-4 w-4 mr-2" /> Register Another
                    </button>
                  </div>
                </div>

                {/* Printable Receipt */}
                <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-8 print:border-none print:p-0 print:block">
                  <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-6">
                    <div>
                      <img
                    src="/Lashawn_Logo-removebg-preview.png"
                    alt="Lashawn Logo"
                    className="h-12 w-auto object-contain mb-2" />
                  
                      <p className="text-xs text-gray-600">
                        Along Eldoret Roadblock
                        <br />
                        Opposite Khetias Supermarket
                      </p>
                      <p className="text-xs text-gray-600">+254 117 564 318</p>
                    </div>
                    <div className="text-right">
                      <h2 className="text-2xl font-bold text-gray-800 tracking-wider">
                        OFFICIAL RECEIPT
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        Receipt No:{' '}
                        <span className="font-medium font-mono">
                          {Math.random().
                      toString(36).
                      substring(2, 10).
                      toUpperCase()}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Date:{' '}
                        <span className="font-medium">
                          {new Date().toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 text-center">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Registration Number
                    </p>
                    <p className="text-2xl font-bold text-gray-900 tracking-widest">
                      {registeredStudent.id}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Default Portal Password:{' '}
                      <span className="font-mono font-bold text-gray-800">
                        password123
                      </span>
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 border-b pb-1">
                      Student Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-bold text-gray-800">
                          {registeredStudent.name}
                        </p>
                        <p className="text-gray-600">
                          ID: {registeredStudent.idNumber}
                        </p>
                        <p className="text-gray-600">
                          {registeredStudent.phone}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">
                          <span className="font-medium text-gray-800">
                            Course:
                          </span>{' '}
                          {registeredStudent.course}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium text-gray-800">
                            Class:
                          </span>{' '}
                          {regData.drivingClass === 'both' ?
                      'Theory & Practical' :
                      regData.drivingClass === 'theoryOnly' ?
                      'Theory Only' :
                      'Practical Only'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <table className="w-full mb-8 text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-800 text-left">
                        <th className="pb-2 font-bold text-gray-800">
                          Description
                        </th>
                        <th className="pb-2 font-bold text-gray-800 text-right">
                          Amount (KSh)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Registration Fee</td>
                        <td className="py-3 text-right">1,500.00</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">
                          <p className="font-medium text-gray-800">
                            {registeredStudent.course}
                          </p>
                          <p className="text-xs text-gray-500">Tuition Fee</p>
                        </td>
                        <td className="py-3 text-right">
                          {(
                      registeredStudent.totalFees - 1500).
                      toLocaleString()}
                          .00
                        </td>
                      </tr>
                      {registeredStudent.feeStatements &&
                  registeredStudent.feeStatements.length > 0 &&
                  <tr className="border-b border-gray-200 bg-gray-50">
                            <td className="py-3 px-2">
                              <p className="font-medium text-gray-800 text-xs">
                                Transaction Code
                              </p>
                            </td>
                            <td className="py-3 px-2 text-right font-mono text-xs font-bold">
                              {
                      registeredStudent.feeStatements[0].
                      transactionCode
                      }
                            </td>
                          </tr>
                  }
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="pt-4 pb-1 text-right font-bold text-gray-800">
                          Total Fees:
                        </td>
                        <td className="pt-4 pb-1 text-right font-bold text-gray-900">
                          {(registeredStudent.totalFees ?? 0).toLocaleString()}.00
                        </td>
                      </tr>
                      <tr>
                        <td className="pb-1 text-right font-bold text-gray-800">
                          Amount Paid:
                        </td>
                        <td className="pb-1 text-right font-bold text-green-600">
                          {(registeredStudent.feesPaid ?? 0).toLocaleString()}.00
                        </td>
                      </tr>
                      <tr>
                        <td className="pb-1 text-right font-bold text-gray-800">
                          Balance:
                        </td>
                        <td className="pb-1 text-right font-bold text-red-600">
                          {((registeredStudent.totalFees ?? 0) - (registeredStudent.feesPaid ?? 0)).toLocaleString()}
                          .00
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
                    <p className="mb-1 font-medium text-gray-700">
                      Thank you for choosing Lashawn Driving & Computer College!
                    </p>
                    <p>
                      This is an official receipt generated by the
                      administration system.
                    </p>
                  </div>
                </div>
              </div> :

          <div className="p-6">
                <div className="mb-6 border-b border-gray-200 pb-4">
                  <h2 className="text-lg font-bold text-gray-800">
                    Register New Student
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill in the details below to enroll a new student into the
                    system.
                  </p>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-8">
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-l-4 border-[#2E8B57] pl-2">
                      Personal Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                      required
                      type="text"
                      name="studentName"
                      value={regData.studentName}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ID/Passport Number *
                        </label>
                        <input
                      required
                      type="text"
                      name="idNumber"
                      value={regData.idNumber}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                      required
                      type="tel"
                      name="phone"
                      value={regData.phone}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                      type="email"
                      name="email"
                      value={regData.email}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Gender
                        </label>
                        <select
                      name="gender"
                      value={regData.gender}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none bg-white">
                      
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date of Birth
                        </label>
                        <input
                      type="date"
                      name="dob"
                      value={regData.dob}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                    </div>
                  </div>

                  {/* Course & Fees */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-l-4 border-[#2E8B57] pl-2">
                      Course & Financials
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Course *
                        </label>
                        <select
                      required
                      name="course"
                      value={regData.course}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none bg-white">
                      
                          {Object.keys(fees).map((course) =>
                      <option key={course} value={course}>
                              {course}
                            </option>
                      )}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Class Type *
                        </label>
                        <select
                      required
                      name="drivingClass"
                      value={regData.drivingClass}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none bg-white">
                      
                          <option value="both">Theory & Practical</option>
                          <option value="theoryOnly">Theory Only</option>
                          <option value="practical">Practical Only</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Total Fees (Auto-calculated)
                        </label>
                        <div className="w-full border border-gray-200 bg-gray-100 rounded-md px-3 py-2 text-sm font-bold text-gray-700">
                          KSh {calculateTotalFees().toLocaleString()}
                        </div>
                        <p className="text-[10px] text-gray-500 mt-1">
                          Includes KSh 1,500 Registration Fee
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Amount Paid Now (KSh) *
                        </label>
                        <input
                      required
                      type="number"
                      min="0"
                      max={calculateTotalFees()}
                      name="feesPaid"
                      value={regData.feesPaid}
                      onChange={handleRegChange}
                      className="w-full border border-[#2E8B57] rounded-md px-3 py-2 text-sm font-bold text-[#2E8B57] focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          M-Pesa/Till Transaction Code *
                        </label>
                        <input
                      required
                      type="text"
                      name="transactionCode"
                      value={regData.transactionCode}
                      onChange={handleRegChange}
                      placeholder="e.g. SHK7Y2M4PQ"
                      className="w-full border border-[#2E8B57] rounded-md px-3 py-2 text-sm font-bold text-gray-900 focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none uppercase" />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Balance
                        </label>
                        <div className="w-full border border-gray-200 bg-gray-100 rounded-md px-3 py-2 text-sm font-bold text-red-600">
                          KSh{' '}
                          {(
                      calculateTotalFees() - Number(regData.feesPaid)).
                      toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next of Kin */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-l-4 border-[#2E8B57] pl-2">
                      Next of Kin / Emergency Contact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Kin Name
                        </label>
                        <input
                      type="text"
                      name="kinName"
                      value={regData.kinName}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Kin Phone
                        </label>
                        <input
                      type="tel"
                      name="kinPhone"
                      value={regData.kinPhone}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Relationship
                        </label>
                        <input
                      type="text"
                      name="kinRelationship"
                      value={regData.kinRelationship}
                      onChange={handleRegChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none" />
                    
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200">
                    <button
                  type="submit"
                  disabled={isRegistering}
                  className="bg-[#2E8B57] text-white px-8 py-3 rounded-md font-bold hover:bg-[#267349] transition-colors disabled:opacity-70 flex items-center">
                  
                      {isRegistering ?
                  'Registering...' :

                  <>
                          <UserPlus className="mr-2 h-5 w-5" /> Complete
                          Registration
                        </>
                  }
                    </button>
                  </div>
                </form>
              </div>
          }
          </div>
        }

        {/* Fee Structure Tab */}
        {activeTab === 'fees' &&
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-sm border border-gray-200 border-t-0 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Fee Structure Management
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Click the edit icon on any course to update its fees.
                </p>
              </div>
              {feeSaved &&
            <div className="flex items-center text-sm text-green-600 bg-green-50 px-4 py-2 rounded-md">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Fees updated successfully
                </div>
            }
            </div>

            {/* Driving Courses Fees */}
            <div className="p-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                Driving Courses
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#2E8B57] text-white text-sm">
                      <th className="px-4 py-3 rounded-tl-lg">Category</th>
                      <th className="px-4 py-3">Theory Only (KSh)</th>
                      <th className="px-4 py-3">Practical Only (KSh)</th>
                      <th className="px-4 py-3">Theory & Practical (KSh)</th>
                      <th className="px-4 py-3 rounded-tr-lg text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(fees).
                  filter(
                    ([key]) =>
                    key.startsWith('Category') ||
                    key.startsWith('Tuktuk')
                  ).
                  map(([category, values], index) =>
                  <tr
                    key={category}
                    className={
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }>
                    
                          <td className="px-4 py-3 font-medium text-gray-800 text-sm">
                            {category}
                          </td>
                          {editingFee === category ?
                    <>
                              <td className="px-4 py-3">
                                <input
                          type="number"
                          value={editValues.theoryOnly}
                          onChange={(e) =>
                          setEditValues((prev) => ({
                            ...prev,
                            theoryOnly: Number(e.target.value)
                          }))
                          }
                          className="w-24 border border-[#2E8B57] rounded px-2 py-1 text-sm focus:ring-1 focus:ring-[#2E8B57] outline-none" />
                        
                              </td>
                              <td className="px-4 py-3">
                                <input
                          type="number"
                          value={editValues.practical}
                          onChange={(e) =>
                          setEditValues((prev) => ({
                            ...prev,
                            practical: Number(e.target.value)
                          }))
                          }
                          className="w-24 border border-[#2E8B57] rounded px-2 py-1 text-sm focus:ring-1 focus:ring-[#2E8B57] outline-none" />
                        
                              </td>
                              <td className="px-4 py-3">
                                <input
                          type="number"
                          value={editValues.both}
                          onChange={(e) =>
                          setEditValues((prev) => ({
                            ...prev,
                            both: Number(e.target.value)
                          }))
                          }
                          className="w-24 border border-[#2E8B57] rounded px-2 py-1 text-sm focus:ring-1 focus:ring-[#2E8B57] outline-none" />
                        
                              </td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                            onClick={saveFee}
                            className="p-1.5 bg-[#2E8B57] text-white rounded-md hover:bg-[#267349] transition-colors"
                            title="Save">
                            
                                    <Save className="h-4 w-4" />
                                  </button>
                                  <button
                            onClick={cancelEditFee}
                            className="p-1.5 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors"
                            title="Cancel">
                            
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              </td>
                            </> :

                    <>
                              <td className="px-4 py-3 text-sm text-gray-700">
                                {values.theoryOnly.toLocaleString()}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-700">
                                {values.practical.toLocaleString()}
                              </td>
                              <td className="px-4 py-3 text-sm font-medium text-[#2E8B57]">
                                {values.both.toLocaleString()}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <button
                          onClick={() => startEditingFee(category)}
                          className="p-1.5 text-gray-400 hover:text-[#2E8B57] hover:bg-[#2E8B57]/10 rounded-md transition-colors"
                          title="Edit fees">
                          
                                  <Edit3 className="h-4 w-4" />
                                </button>
                              </td>
                            </>
                    }
                        </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Computer Courses Fees */}
            <div className="p-6 pt-0">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                Computer Courses
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1E90FF] text-white text-sm">
                      <th className="px-4 py-3 rounded-tl-lg">Course</th>
                      <th className="px-4 py-3">Course Fee (KSh)</th>
                      <th className="px-4 py-3 rounded-tr-lg text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(fees).
                  filter(
                    ([key]) =>
                    key.startsWith('Microsoft') ||
                    key.startsWith('Basic IT')
                  ).
                  map(([category, values], index) =>
                  <tr
                    key={category}
                    className={
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }>
                    
                          <td className="px-4 py-3 font-medium text-gray-800 text-sm">
                            {category}
                          </td>
                          {editingFee === category ?
                    <>
                              <td className="px-4 py-3">
                                <input
                          type="number"
                          value={editValues.both}
                          onChange={(e) =>
                          setEditValues((prev) => ({
                            ...prev,
                            both: Number(e.target.value)
                          }))
                          }
                          className="w-28 border border-[#1E90FF] rounded px-2 py-1 text-sm focus:ring-1 focus:ring-[#1E90FF] outline-none" />
                        
                              </td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                            onClick={saveFee}
                            className="p-1.5 bg-[#1E90FF] text-white rounded-md hover:bg-blue-600 transition-colors"
                            title="Save">
                            
                                    <Save className="h-4 w-4" />
                                  </button>
                                  <button
                            onClick={cancelEditFee}
                            className="p-1.5 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors"
                            title="Cancel">
                            
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              </td>
                            </> :

                    <>
                              <td className="px-4 py-3 text-sm font-medium text-[#1E90FF]">
                                {values.both.toLocaleString()}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <button
                          onClick={() => startEditingFee(category)}
                          className="p-1.5 text-gray-400 hover:text-[#1E90FF] hover:bg-blue-50 rounded-md transition-colors"
                          title="Edit fees">
                          
                                  <Edit3 className="h-4 w-4" />
                                </button>
                              </td>
                            </>
                    }
                        </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Special Courses Fees */}
            <div className="p-6 pt-0">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                Special Courses
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#D7263D] text-white text-sm">
                      <th className="px-4 py-3 rounded-tl-lg">Course</th>
                      <th className="px-4 py-3">Course Fee (KSh)</th>
                      <th className="px-4 py-3 rounded-tr-lg text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(fees).
                  filter(
                    ([key]) =>
                    key === 'First Aid Training' ||
                    key === 'Basic Mechanics'
                  ).
                  map(([category, values], index) =>
                  <tr
                    key={category}
                    className={
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }>
                    
                          <td className="px-4 py-3 font-medium text-gray-800 text-sm">
                            {category}
                          </td>
                          {editingFee === category ?
                    <>
                              <td className="px-4 py-3">
                                <input
                          type="number"
                          value={editValues.both}
                          onChange={(e) =>
                          setEditValues((prev) => ({
                            ...prev,
                            both: Number(e.target.value)
                          }))
                          }
                          className="w-28 border border-[#D7263D] rounded px-2 py-1 text-sm focus:ring-1 focus:ring-[#D7263D] outline-none" />
                        
                              </td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                            onClick={saveFee}
                            className="p-1.5 bg-[#D7263D] text-white rounded-md hover:bg-red-600 transition-colors"
                            title="Save">
                            
                                    <Save className="h-4 w-4" />
                                  </button>
                                  <button
                            onClick={cancelEditFee}
                            className="p-1.5 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors"
                            title="Cancel">
                            
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              </td>
                            </> :

                    <>
                              <td className="px-4 py-3 text-sm font-medium text-[#D7263D]">
                                {values.both.toLocaleString()}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <button
                          onClick={() => startEditingFee(category)}
                          className="p-1.5 text-gray-400 hover:text-[#D7263D] hover:bg-red-50 rounded-md transition-colors"
                          title="Edit fees">
                          
                                  <Edit3 className="h-4 w-4" />
                                </button>
                              </td>
                            </>
                    }
                        </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Services Fees */}
            <div className="p-6 pt-0">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                Additional Services
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white text-sm">
                      <th className="px-4 py-3 rounded-tl-lg">Service</th>
                      <th className="px-4 py-3">Fee (KSh)</th>
                      <th className="px-4 py-3 rounded-tr-lg text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(fees).
                  filter(
                    ([key]) =>
                    key === 'KRA PIN Registration' ||
                    key === 'HELB Application Assistance' ||
                    key === 'eCitizen Service Support' ||
                    key === 'Driving License Renewal'
                  ).
                  map(([category, values], index) =>
                  <tr
                    key={category}
                    className={
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }>
                    
                          <td className="px-4 py-3 font-medium text-gray-800 text-sm">
                            {category}
                          </td>
                          {editingFee === category ?
                    <>
                              <td className="px-4 py-3">
                                <input
                          type="number"
                          value={editValues.both}
                          onChange={(e) =>
                          setEditValues((prev) => ({
                            ...prev,
                            both: Number(e.target.value)
                          }))
                          }
                          className="w-28 border border-gray-800 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-gray-800 outline-none" />
                        
                              </td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                            onClick={saveFee}
                            className="p-1.5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                            title="Save">
                            
                                    <Save className="h-4 w-4" />
                                  </button>
                                  <button
                            onClick={cancelEditFee}
                            className="p-1.5 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors"
                            title="Cancel">
                            
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              </td>
                            </> :

                    <>
                              <td className="px-4 py-3 text-sm font-medium text-gray-800">
                                {values.both.toLocaleString()}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <button
                          onClick={() => startEditingFee(category)}
                          className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                          title="Edit fees">
                          
                                  <Edit3 className="h-4 w-4" />
                                </button>
                              </td>
                            </>
                    }
                        </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-500">
              <p>
                Note: Fee changes will apply to new registrations only. Existing
                student fees remain unchanged.
              </p>
            </div>
          </div>
        }
      </div>

      {/* Student Detail Modal */}
      {selectedStudent &&
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 print:p-0 print:static print:inset-auto print:z-auto">
          <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm print:hidden"
          onClick={() => !isEditingStudent && setSelectedStudent(null)}>
        </div>
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden print:shadow-none print:overflow-visible">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 print:hidden">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] flex items-center justify-center font-bold text-xl mr-4">
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedStudent.name}
                  </h2>
                  <p className="text-sm text-gray-500 font-mono">
                    {selectedStudent.id}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                onClick={() => window.print()}
                className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium transition-colors">
                
                  <Printer className="h-4 w-4 mr-1.5" /> Print Details
                </button>
                {!isEditingStudent ?
              <button
                onClick={() => setIsEditingStudent(true)}
                className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium transition-colors">
                
                    <Edit3 className="h-4 w-4 mr-1.5" /> Edit
                  </button> :

              <>
                    <button
                  onClick={() => {
                    setIsEditingStudent(false);
                    setEditStudentData(selectedStudent);
                  }}
                  className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors">
                  
                      Cancel
                    </button>
                    <button
                  onClick={handleSaveStudentEdit}
                  className="flex items-center px-3 py-1.5 bg-[#2E8B57] text-white rounded-md hover:bg-[#267349] text-sm font-medium transition-colors">
                  
                      <Save className="h-4 w-4 mr-1.5" /> Save
                    </button>
                  </>
              }
                <button
                onClick={() => setSelectedStudent(null)}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Print Header (Only visible when printing) */}
            <div className="hidden print:flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-6 pt-4 px-8">
              <div>
                <img
                src="/Lashawn_Logo-removebg-preview.png"
                alt="Lashawn Logo"
                className="h-12 w-auto object-contain mb-2" />
              
                <p className="text-xs text-gray-600">
                  Along Eldoret Roadblock
                  <br />
                  Opposite Khetias Supermarket
                </p>
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-bold text-gray-800 tracking-wider">
                  STUDENT RECORD
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Reg No:{' '}
                  <span className="font-medium font-mono">
                    {selectedStudent.id}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Printed:{' '}
                  <span className="font-medium">
                    {new Date().toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 print:overflow-visible">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Column */}
                <div className="space-y-10">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
                      Personal Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          Full Name
                        </label>
                        {isEditingStudent ?
                      <input
                        type="text"
                        value={editStudentData.name}
                        onChange={(e) =>
                        setEditStudentData({
                          ...editStudentData,
                          name: e.target.value
                        })
                        }
                        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:border-[#2E8B57] outline-none" /> :


                      <p className="font-medium text-gray-900">
                            {selectedStudent.name}
                          </p>
                      }
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Email
                          </label>
                          {isEditingStudent ?
                        <input
                          type="email"
                          value={editStudentData.email}
                          onChange={(e) =>
                          setEditStudentData({
                            ...editStudentData,
                            email: e.target.value
                          })
                          }
                          className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:border-[#2E8B57] outline-none" /> :


                        <p className="font-medium text-gray-900">
                              {selectedStudent.email || 'N/A'}
                            </p>
                        }
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Phone
                          </label>
                          {isEditingStudent ?
                        <input
                          type="tel"
                          value={editStudentData.phone}
                          onChange={(e) =>
                          setEditStudentData({
                            ...editStudentData,
                            phone: e.target.value
                          })
                          }
                          className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:border-[#2E8B57] outline-none" /> :


                        <p className="font-medium text-gray-900">
                              {selectedStudent.phone}
                            </p>
                        }
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          ID Number
                        </label>
                        <p className="font-medium text-gray-900">
                          {selectedStudent.idNumber}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
                      Course Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          Enrolled Course
                        </label>
                        {isEditingStudent ?
                      <select
                        value={editStudentData.course}
                        onChange={(e) =>
                        setEditStudentData({
                          ...editStudentData,
                          course: e.target.value
                        })
                        }
                        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:border-[#2E8B57] outline-none bg-white">
                        
                            {Object.keys(fees).map((course) =>
                        <option key={course} value={course}>
                                {course}
                              </option>
                        )}
                          </select> :

                      <p className="font-medium text-gray-900">
                            {selectedStudent.course}
                          </p>
                      }
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Enrollment Date
                          </label>
                          <p className="font-medium text-gray-900">
                            {new Date(
                            selectedStudent.enrollmentDate
                          ).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Status
                          </label>
                          {isEditingStudent ?
                        <select
                          value={editStudentData.status}
                          onChange={(e) =>
                          setEditStudentData({
                            ...editStudentData,
                            status: e.target.value
                          })
                          }
                          className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:border-[#2E8B57] outline-none bg-white">
                          
                              <option value="Active">Active</option>
                              <option value="Completed">Completed</option>
                              <option value="Suspended">Suspended</option>
                            </select> :

                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedStudent.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          
                              {selectedStudent.status}
                            </span>
                        }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-10">
                  {/* Financial Info */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 print:bg-transparent print:border-gray-300 print:p-4">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-5 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-[#2E8B57]" />{' '}
                      Financial Status
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Total Fees
                          </label>
                          {isEditingStudent ?
                        <input
                          type="number"
                          value={editStudentData.totalFees}
                          onChange={(e) =>
                          setEditStudentData({
                            ...editStudentData,
                            totalFees: e.target.value
                          })
                          }
                          className="w-24 border border-gray-300 rounded px-2 py-1 text-sm font-bold focus:border-[#2E8B57] outline-none" /> :


                        <p className="font-bold text-gray-900">
                              KSh {selectedStudent.totalFees.toLocaleString()}
                            </p>
                        }
                        </div>
                        <div className="text-right">
                          <label className="block text-xs text-gray-500 mb-1">
                            Amount Paid
                          </label>
                          {isEditingStudent ?
                        <input
                          type="number"
                          value={editStudentData.feesPaid}
                          onChange={(e) =>
                          setEditStudentData({
                            ...editStudentData,
                            feesPaid: e.target.value
                          })
                          }
                          className="w-24 border border-gray-300 rounded px-2 py-1 text-sm font-bold text-green-600 focus:border-[#2E8B57] outline-none" /> :


                        <p className="font-bold text-green-600">
                              KSh {selectedStudent.feesPaid.toLocaleString()}
                            </p>
                        }
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">
                            Payment Progress
                          </span>
                          <span className="font-medium">
                            {Math.round(
                            (isEditingStudent ?
                            editStudentData.feesPaid /
                            editStudentData.totalFees :
                            selectedStudent.feesPaid /
                            selectedStudent.totalFees) * 100
                          )}
                            %
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                          className={`h-2 rounded-full ${(isEditingStudent ? editStudentData.feesPaid : selectedStudent.feesPaid) >= (isEditingStudent ? editStudentData.totalFees : selectedStudent.totalFees) ? 'bg-green-500' : 'bg-orange-500'}`}
                          style={{
                            width: `${Math.min(100, Math.max(0, (isEditingStudent ? editStudentData.feesPaid / editStudentData.totalFees : selectedStudent.feesPaid / selectedStudent.totalFees) * 100))}%`
                          }}>
                        </div>
                        </div>
                        <p className="text-right text-xs text-red-500 font-medium mt-1">
                          Balance: KSh{' '}
                          {(
                        (isEditingStudent ?
                        editStudentData.totalFees :
                        selectedStudent.totalFees) - (
                        isEditingStudent ?
                        editStudentData.feesPaid :
                        selectedStudent.feesPaid)).
                        toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fee Statements & Payments */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
                      Fee Statements & Payments
                    </h3>

                    {isEditingStudent &&
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 print:hidden">
                        <h4 className="text-xs font-bold text-green-800 mb-3">
                          Record New Payment
                        </h4>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div>
                            <label className="block text-[10px] text-gray-500 mb-1">
                              Amount (KSh)
                            </label>
                            <input
                          type="number"
                          value={newPayment.amount || ''}
                          onChange={(e) =>
                          setNewPayment({
                            ...newPayment,
                            amount: Number(e.target.value)
                          })
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:border-[#2E8B57] outline-none"
                          placeholder="0" />
                        
                          </div>
                          <div>
                            <label className="block text-[10px] text-gray-500 mb-1">
                              Transaction Code
                            </label>
                            <input
                          type="text"
                          value={newPayment.transactionCode}
                          onChange={(e) =>
                          setNewPayment({
                            ...newPayment,
                            transactionCode: e.target.value.toUpperCase()
                          })
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:border-[#2E8B57] outline-none uppercase font-mono"
                          placeholder="e.g. SHK7Y2M4PQ" />
                        
                          </div>
                        </div>
                        <button
                      onClick={handleAddNewPayment}
                      disabled={
                      !newPayment.amount || !newPayment.transactionCode
                      }
                      className="w-full bg-[#2E8B57] text-white text-xs font-bold py-2 rounded hover:bg-[#267349] disabled:opacity-50 transition-colors">
                      
                          Add Payment to Record
                        </button>
                      </div>
                  }

                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-3 py-2 font-semibold text-gray-600">
                              Date
                            </th>
                            <th className="px-3 py-2 font-semibold text-gray-600">
                              Ref / Code
                            </th>
                            <th className="px-3 py-2 font-semibold text-gray-600 text-right">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {(
                        (isEditingStudent ?
                        editStudentData.feeStatements :
                        selectedStudent.feeStatements) || []).
                        length > 0 ?
                        (isEditingStudent ?
                        editStudentData.feeStatements :
                        selectedStudent.feeStatements).
                        map((stmt: any, idx: number) =>
                        <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-gray-600">
                                  {new Date(stmt.date).toLocaleDateString()}
                                </td>
                                <td className="px-3 py-2">
                                  <span className="font-mono font-medium text-gray-800">
                                    {stmt.transactionCode}
                                  </span>
                                  <p className="text-[9px] text-gray-400">
                                    {stmt.description}
                                  </p>
                                </td>
                                <td className="px-3 py-2 text-right font-medium text-green-600">
                                  +{stmt.amount.toLocaleString()}
                                </td>
                              </tr>
                        ) :

                        <tr>
                              <td
                            colSpan={3}
                            className="px-3 py-4 text-center text-gray-400 italic">
                            
                                No payment records found.
                              </td>
                            </tr>
                        }
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Exam & Progress */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
                      Exam & Progress
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          Pending Days
                        </label>
                        {isEditingStudent ?
                      <input
                        type="number"
                        value={editStudentData.pendingDays}
                        onChange={(e) =>
                        setEditStudentData({
                          ...editStudentData,
                          pendingDays: e.target.value
                        })
                        }
                        className="w-20 border border-gray-300 rounded px-2 py-1.5 text-sm focus:border-[#2E8B57] outline-none" /> :


                      <p className="font-medium text-gray-900">
                            {selectedStudent.pendingDays} days
                          </p>
                      }
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          Exam Eligibility
                        </label>
                        {isEditingStudent ?
                      <div className="flex items-center mt-1.5">
                            <input
                          type="checkbox"
                          checked={editStudentData.eligibleForExams}
                          onChange={(e) =>
                          setEditStudentData({
                            ...editStudentData,
                            eligibleForExams: e.target.checked
                          })
                          }
                          className="h-4 w-4 text-[#2E8B57] rounded focus:ring-[#2E8B57]" />
                        
                            <span className="ml-2 text-sm text-gray-700">
                              Eligible
                            </span>
                          </div> :

                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedStudent.eligibleForExams ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        
                            {selectedStudent.eligibleForExams ?
                        'Eligible' :
                        'Not Eligible'}
                          </span>
                      }
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="print:hidden">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
                      Uploaded Documents
                    </h3>
                    <div className="flex gap-4">
                      {selectedStudent.documents?.passportPhoto ?
                    <div className="text-center">
                          <img
                        src={selectedStudent.documents.passportPhoto}
                        alt="Passport"
                        className="w-16 h-16 object-cover rounded border border-gray-200 mb-1" />
                      
                          <span className="text-[10px] text-gray-500">
                            Passport
                          </span>
                        </div> :

                    <div className="w-16 h-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[10px] text-gray-400 text-center">
                          No
                          <br />
                          Photo
                        </div>
                    }

                      {selectedStudent.documents?.idCard ?
                    <div className="text-center">
                          <img
                        src={selectedStudent.documents.idCard}
                        alt="ID"
                        className="w-20 h-16 object-cover rounded border border-gray-200 mb-1" />
                      
                          <span className="text-[10px] text-gray-500">
                            ID Card
                          </span>
                        </div> :

                    <div className="w-20 h-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[10px] text-gray-400 text-center">
                          No
                          <br />
                          ID
                        </div>
                    }

                      {selectedStudent.documents?.pdl ?
                    <div className="text-center">
                          <img
                        src={selectedStudent.documents.pdl}
                        alt="PDL"
                        className="w-20 h-16 object-cover rounded border border-gray-200 mb-1" />
                      
                          <span className="text-[10px] text-gray-500">PDL</span>
                        </div> :

                    <div className="w-20 h-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[10px] text-gray-400 text-center">
                          No
                          <br />
                          PDL
                        </div>
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

}