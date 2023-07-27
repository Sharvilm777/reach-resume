/* eslint-disable no-unused-vars */
// import { useState } from "react";
import { useState } from "react";
import ExportPdf from "./component/exportPdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { ResumeInput } from "./constants/resumeInputs";
import AboutSection from "./component/aboutSection/index";
import InputFrom from "./component/inputForm";
import Input from "./component/input";
import { SearchSelect } from "search-select-react";
import Chip from "./component/chip/index";
import { GenerateResumeContext, ResumeContext } from "./context/resumeContext";
import EduSection from "./component/eduSection";
import ExpSection from "./component/expSection";
import ProjSection from "./component/projSection";
import HobSection from "./component/hobSection";
import SkillSection from "./component/skillSection";
import FAB from "./component/fab";

function App() {
  const [data, setData] = useState(ResumeInput);
  const [generate, setGenerate] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const handleSaveAndSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <ResumeContext.Provider value={{ data, setData }}>
      <GenerateResumeContext.Provider value={{ generate, setGenerate }}>
        <nav className="flex w-full h-20 items-center px-20 text-slate-600 bg-white  shadow-md">
          <h1 className="text-3xl cursor-pointer">Reach-resume</h1>
        </nav>
        <div className="w-full flex flex-row">
          <div className="sidebar h-screen w-[25%] flex flex-col gap-8 items-start shadow-md pt-28 pl-10">
            <h1
              className="hover:text-[#f53855] hover:drop-shadow text-xl cursor-pointer "
              onClick={() => {
                setCurrentStep(1);
              }}
            >
              About
            </h1>
            <h1
              className="hover:text-[#f53855]  hover:drop-shadow  text-xl cursor-pointer"
              onClick={() => {
                setCurrentStep(2);
              }}
            >
              Education
            </h1>
            <h1
              className="hover:text-[#f53855]  hover:drop-shadow text-xl cursor-pointer"
              onClick={() => {
                setCurrentStep(3);
              }}
            >
              Skills
            </h1>
            <h1
              className="hover:text-[#f53855]  hover:drop-shadow text-xl cursor-pointer"
              onClick={() => {
                setCurrentStep(4);
              }}
            >
              Projects
            </h1>
            <h1
              className="hover:text-[#f53855]  hover:drop-shadow  text-xl cursor-pointer"
              onClick={() => {
                setCurrentStep(5);
              }}
            >
              Experience
            </h1>
            <h1
              className="hover:text-[#f53855]  hover:drop-shadow  text-xl"
              onClick={() => {
                setCurrentStep(6);
              }}
            >
              Hobbies
            </h1>
          </div>
          <div className="w-3/4 flex justify-center items-center ">
            {currentStep === 1 && (
              <AboutSection onSaveAndSubmit={handleSaveAndSubmit} />
            )}
            {currentStep === 2 && (
              <EduSection onSaveAndSubmit={handleSaveAndSubmit} />
            )}
            {currentStep === 3 && (
              <SkillSection onSaveAndSubmit={handleSaveAndSubmit} />
            )}
            {currentStep === 4 && (
              <ProjSection onSaveAndSubmit={handleSaveAndSubmit} />
            )}
            {currentStep === 5 && (
              <ExpSection onSaveAndSubmit={handleSaveAndSubmit} />
            )}
            {currentStep === 6 && (
              <HobSection onSaveAndSubmit={handleSaveAndSubmit} />
            )}
          </div>
        </div>
        {/* <div className="relative min-h-screen w-full flex flex-col gap-8 justify-center items-center mb-40">
          {/* 
          
          
          <FAB /> */}
        {/* </div>*/}

        <div
          className="flex flex-col w-full items-center"
          id="preview"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="flex justify-between items-center px-20 py-4 bg-gray-700 w-full mb-4 text-gray-200  ">
            <h2 className="text-4xl bg-gray-700 w-full mb-4 text-gray-200 ">
              Preview
            </h2>
            <PDFDownloadLink
              document={
                <ResumeContext.Provider value={{ data }}>
                  <ExportPdf />
                </ResumeContext.Provider>
              }
              fileName="portfolio.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  <button className="text-gray-100 bg-yellow-500 py-2 px-3 font-semibold rounded hover:bg-yellow-600 hover:shadow-lg transition-all ease-in-out duration-200">
                    Loading&nbsp;document...
                  </button>
                ) : error ? (
                  <button className="text-gray-100 bg-red-500 py-2 px-3 font-semibold rounded hover:bg-red-600 hover:shadow-lg transition-all ease-in-out duration-200">
                    Opps!&nbsp;Something&nbsp;went&nbsp;wrong.
                  </button>
                ) : (
                  <button className="text-gray-100 bg-lime-500 py-2 px-3 font-semibold rounded hover:bg-lime-600 hover:shadow-lg transition-all ease-in-out duration-200">
                    Download&nbsp;Now!
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
          <PDFViewer width={"900px"} height={"900px"} showToolbar={false}>
            <ResumeContext.Provider value={{ data }}>
              <ExportPdf />
            </ResumeContext.Provider>
          </PDFViewer>
        </div>
      </GenerateResumeContext.Provider>
    </ResumeContext.Provider>
  );
}

export default App;
