import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar, Sidebar } from "./layout";
import { AllNotes, ArchiveNotes, ErrorPage, TagNotes } from "./pages";
import TrashNote from "./pages/TrashNotes/TrashNotes";
import "./App.css";
import { TagsModal } from "./components";
import { useAppSelector } from "./hooks/redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { veiwEditTagsModal } = useAppSelector((state) => state.modal);
  return (
    <div className="app">
      {veiwEditTagsModal && <TagsModal type="edit" />}
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      <BrowserRouter>
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNote />} />
            <Route path="/tag/:name" element={<TagNotes />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to={"/404"} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
