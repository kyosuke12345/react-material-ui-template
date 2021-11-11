import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "components/dashboard/DashboardLayout";
import path from "utils/path";
import { ScopedCssBaseline } from "@mui/material";

// NOTE: userRoutesがまだ使用できないので、Routeで記載する

const App: React.VFC = () => {
  return (
    <ScopedCssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/" element={<DashboardLayout />}>
            <Route
              path={path.dashboardPath.d1.href}
              element={<div>Test 1</div>}
            />
            <Route
              path={path.dashboardPath.d2.href}
              element={<div>Test 2</div>}
            />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ScopedCssBaseline>
  );
};

export default App;
