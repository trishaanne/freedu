import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// Basis
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import Form from "./scenes/form";
// import Calendar from "./scenes/calendar";
// import FAQ from "./scenes/faq";
// import Bar from "./scenes/bar";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";
// import Geography from "./scenes/geography";

import Sidebar from "./account/admin/shared/Sidebar";
import Topbar from "./account/admin/shared/Topbar";
import Dashboard from "./account/admin/Dashboard";
import SchoolNews from "./account/admin/SchoolNews";
import SmartSendPro from "./account/admin/SmartSendPro";
import SchoolYear from "./account/admin/SchoolYear";
import SchoolProfile from "./account/admin/SchoolProfile";
import CategoryLevels from "./account/admin/CategoryLevels";
import Levels from "./account/admin/Levels";
import Import from "./account/admin/Import";
import EnrollmentReports from "./account/admin/EnrollmentReports";
import Promote from "./account/admin/Promote";
import Prospects from "./account/admin/Prospects";
import Student from "./account/admin/Student";
import Parent from "./account/admin/Parent";
import Teacher from "./account/admin/Teacher";
import Ledger from "./account/admin/Ledger";
import Contract from "./account/admin/Contract";
import Payments from "./account/admin/Payments";
import FinancialReports from "./account/admin/FinancialReports";
import Library from "./account/admin/Library";
import Subject from "./account/admin/Subject";
import AdministratorReport from "./account/admin/AdministratorReport";
import TeacherReport from "./account/admin/TeacherReport";




function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                {/* Admin */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin/communicate/school-news" element={<SchoolNews />} />
                <Route path="/admin/communicate/smartsend-pro" element={<SmartSendPro />} />
                <Route path="/admin/configurations/school-year" element={<SchoolYear />} />
                <Route path="/admin/configurations/school-profile" element={<SchoolProfile />} />
                <Route path="/admin/configurations/category-levels" element={<CategoryLevels />} />
                <Route path="/admin/configurations/levels" element={<Levels />} />
                <Route path="/admin/enrollment/import" element={<Import />} />
                <Route path="/admin/enrollment/reports" element={<EnrollmentReports />} />
                <Route path="/admin/enrollment/promote" element={<Promote />} />
                <Route path="/admin/enrollment/prospects" element={<Prospects />} />
                <Route path="/admin/account/student" element={<Student />} />
                <Route path="/admin/account/parent" element={<Parent />} />
                <Route path="/admin/account/teacher" element={<Teacher />} />
                <Route path="/admin/financial/ledger" element={<Ledger />} />
                <Route path="/admin/financial/contract" element={<Contract />} />
                <Route path="/admin/inancial/payments" element={<Payments />} />
                <Route path="/admin/financial/reports" element={<FinancialReports />} />
                <Route path="/admin/curriculum/library" element={<Library />} />
                <Route path="/admin/curriculum/subject" element={<Subject />} />
                <Route path="/admin/reports/administrator" element={<AdministratorReport />} />
                <Route path="/admin/reports/teacher" element={<TeacherReport />} />




                {/* Basis */}
                {/* <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
