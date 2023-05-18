import React from "react";
import { Route, Routes } from "react-router-dom";
import { CoursesPage } from "../pages/CoursesPage";
import { AnouncementPage } from "../pages/AnouncementPage";
import { NotificationPage } from "../pages/NotificationPage";
import { SchedulePage } from "../pages/ShedulePage";
import Material from "../layout/Material";
import Students from "../layout/Students";
import Rating from "../layout/Rating";
import { StudentsDetails } from "../Details/StudentsDetails";
import { MaterialDetails } from "../Details/MaterialDetails";
import WatePage from "../pages/WatePage";
import LatePage from "../pages/LatePage";
import SubmitePage from "../pages/SubmitePage";

const students = [
  {
    id: 5,
    title: "Barsbek Makhmatov",
  },
  {
    id: 2,
    title: "Zhakshylyk Nasipbekov",
  },
  {
    id: 3,
    title: "Abdukadyrov Ali",
  },
];

const material = [
  {
    id: 1,
    title: "Lesson 17 (Routers)",
  },
  {
    id: 2,
    title: "Session 18 (Routers)",
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/courses/" element={<CoursesPage />}>
        <Route path="materials" element={<Material material={material} />} />
        <Route path="students" element={<Students students={students} />} />
        <Route path="rating" element={<Rating />} />
        <Route
          path="students/:id/details"
          element={<StudentsDetails students={students} />}
        />
        <Route
          path="materials/:id/details"
          element={<MaterialDetails material={material} />}
        >
          <Route path="wate" element={<WatePage />} />
          <Route path="late" element={<LatePage />} />
          <Route path="submite" element={<SubmitePage />} />
        </Route>
      </Route>
      <Route path="/anouncement" element={<AnouncementPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
    </Routes>
  );
};
