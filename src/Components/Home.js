import React from "react";
import Navbar from "./Navbar";
import Dropzone from "./Dropzone";
import Footer from "./Footer";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="content-container">
        <div>
          <Navbar />
        </div>
        <div className="contain">
          <h1 style={{color: "black", fontSize: "1.6rem", fontWeight: "bold", marginBottom:'1em'}}>
            Convert Your Videos to Audio Online: Supported Formats - MP3, WAV,
            OGG, AAC, WMA, FLAC, M4A
          </h1>
          <p>
            Utilize our free online video to audio converter tool to seamlessly
            transform your videos into high-quality audio files. Supported
            formats include MP3, WAV, OGG, AAC, WMA, FLAC, and M4A. Simply
            upload your videos in any format and download the converted audio
            effortlessly. Try our free online converter now!
          </p>
        </div>

        <div>
          <Dropzone />
        </div>
      </div>

      <div style={{marginTop:'8rem'}}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
