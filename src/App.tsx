import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import JobDetails from "./components/JobDetails";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Tabs />
      <div className="">
        <JobDetails />
      </div>
    </div>
  );
}
