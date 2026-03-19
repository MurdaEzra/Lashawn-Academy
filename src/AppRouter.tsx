import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { DrivingCourses } from './pages/DrivingCourses';
import { ComputerCourses } from './pages/ComputerCourses';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Fees } from './pages/Fees';
import { Registration } from './pages/Registration';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
// StudentDashboard route and import removed
import { PageTransition } from './components/layout/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { StudentProvider } from './contexts/StudentContext';
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
          <PageTransition>
              <Home />
            </PageTransition>
          } />
        
        <Route
          path="/driving-courses"
          element={
          <PageTransition>
              <DrivingCourses />
            </PageTransition>
          } />
        
        <Route
          path="/computer-courses"
          element={
          <PageTransition>
              <ComputerCourses />
            </PageTransition>
          } />
        
        <Route
          path="/services"
          element={
          <PageTransition>
              <Services />
            </PageTransition>
          } />
        
        <Route
          path="/about"
          element={
          <PageTransition>
              <About />
            </PageTransition>
          } />
        
        <Route
          path="/faq"
          element={
          <PageTransition>
              <FAQ />
            </PageTransition>
          } />
        
        <Route
          path="/contact"
          element={
          <PageTransition>
              <Contact />
            </PageTransition>
          } />
        
        <Route
          path="/fees"
          element={
          <PageTransition>
              <Fees />
            </PageTransition>
          } />
        
        <Route
          path="/register"
          element={
          <PageTransition>
              <Registration />
            </PageTransition>
          } />
        
        <Route
          path="/admin/login"
          element={
          <PageTransition>
              <AdminLogin />
            </PageTransition>
          } />
        
        <Route
          path="/admin/dashboard"
          element={
          <PageTransition>
              <AdminDashboard />
            </PageTransition>
          } />
      </Routes>
    </AnimatePresence>);

}
export function AppRouter() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </StudentProvider>);

}