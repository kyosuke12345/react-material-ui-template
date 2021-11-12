import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashboardLayout from "components/dashboard/DashboardLayout";
import path from "utils/path";
import { ScopedCssBaseline } from "@mui/material";
import authModule from "redux/modules/authModule";
import { useDidMount } from "hooks/useDidMount";
import { useDispatch } from "react-redux";
import Layout from "components/template/Layout";
import TestFormScreen from "pages/TestFormScreen";

// NOTE: userRoutesがまだ使用できないので、Routeで記載する

const App: React.VFC = () => {
  const dispatch = useDispatch();

  useDidMount(() => {
    dispatch(authModule.actions.login());
  });

  return (
    <ScopedCssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/" element={<DashboardLayout />}>
            <Route
              path={path.dashboardPath.d1.href}
              element={<TestFormScreen />}
            />
            <Route
              path={path.dashboardPath.d2.href}
              element={
                <div>
                  <Link to="/dashboard/d1">d1</Link>
                </div>
              }
            />
            <Route path="*" element={<div>404</div>} />
          </Route>
          <Route path="template1/" element={<Layout />}>
            <Route path={"test1"} element={<TestFormScreen />} />
            <Route
              path={"test2"}
              element={
                <div style={{ height: 2000, backgroundColor: "blue" }}>
                  <Link to="/template1/test1">test1</Link>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ScopedCssBaseline>
  );
};

export default App;
