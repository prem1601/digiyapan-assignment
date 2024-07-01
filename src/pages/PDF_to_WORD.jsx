import { useCallback, useState } from "react";
import { PiArrowBendRightDownLight } from "react-icons/pi";
import ConverterImage from "../assets/converter.jpg";
import AccessBlock from "../components/AccessBlock";
import axios from "axios";
import { API_Key } from "../common";
import RenderLinks from "../components/RenderLinks";
import { useDropzone } from "react-dropzone";
import LoadingComponent from "../components/LoadingComponent";

const PDF_to_WORD = () => {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  const onDrop = useCallback(async (files) => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      setLoading(true);
      const dataResponse = await axios.post(API_Key.post, formData);
      setLinks(dataResponse.data.download_links);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Oops! Something went wrong. Please check console.");
      console.log(error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [],
    },
  });

  return (
    <main>
      <AccessBlock />
      <div className="px-8 py-4">
        <div className="text-slate-400 mb-4">
          Home {">"} PDF to Word Converter
        </div>

        <div className="bg-slate-300 border border-dashed border-slate-500 rounded-md max-h-full h-[75vh] flex">
          {!loading ? (
            links.length > 0 ? (
              <RenderLinks links={links} />
            ) : (
              <div className="basis-1/4 m-auto text-center">
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <img
                    src={ConverterImage}
                    alt="PDF to Word Img"
                    className="w-10 rounded"
                  />
                  <h3 className="text-2xl font-bold">PDF to Word Converter</h3>
                </div>
                <p className="text-slate-800 text-lg mt-3 mb-6">
                  Convert PDF to editable Word documents
                </p>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {/* <input
                    className="hidden"
                    accept=".pdf"
                    type="file"
                    name="pdf"
                    id="pdf"
                    multiple
                    onChange={handleChange}
                  /> */}
                  <label htmlFor="pdf" className="cursor-pointer">
                    <p className="w-full py-2 bg-blue-700 font-bold text-md text-white rounded-md outline outline-blue-700 outline-offset-2">
                      Select File(s)
                    </p>

                    <div className="text-slate-600 text-lg mt-6 flex justify-center items-center gap-1">
                      <p>Or drop PDF files here</p>
                      <PiArrowBendRightDownLight className="w-6 h-6" />
                    </div>
                  </label>
                </div>
              </div>
            )
          ) : (
            <LoadingComponent />
          )}
        </div>
      </div>
    </main>
  );
};

export default PDF_to_WORD;
