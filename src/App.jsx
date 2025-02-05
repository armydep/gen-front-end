import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Surveys from "./pages/Surveys";
import CreateSurvey from "./pages/CreateSurvey";
import ShowSurvey from "./pages/ShowSurvey";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Surveys />} />
          <Route exact path="/CreateSurvey" element={<CreateSurvey />} />
          <Route exact path="/ShowSurvey/:surveyId" element={<ShowSurvey />} />
        </Routes>
      </Router>
    </>
  );
}