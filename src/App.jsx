// import { useState } from "react";
import "./App.css";
import ExportPdf from "./component/exportPdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* <Form /> */}

      <PDFDownloadLink document={<ExportPdf />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : <>Download Now , {url}</>
        }
      </PDFDownloadLink>
      <div style={{ display: "flex", width: "700px" }}>
        <PDFViewer width={'900px'} height={'900px'}>
          <ExportPdf />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
