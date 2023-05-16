import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ResultTable from "./ResultTable.js";
import { Box } from "@mui/material";

import "./App.css";
export default function App() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <div className="wrapper">
        <div>
          <h1>Upload a video</h1>
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
          />
          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
        </div>
        <div>
          <button class="button-26" role="button">
            Submit
          </button>
        </div>

        <div className="output">
          <h1>Results</h1>
          <Box>
            <ResultTable />
          </Box>
        </div>
      </div>
    </>
  );
}
