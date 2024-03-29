import { fetchFile } from "@ffmpeg/util";
import { toast } from 'react-toastify';

export const downloadAudio = async (data, selectedVideo, selectedOption = "mp3") => {
  if (!selectedVideo) return;

  try {
    const originalFileNameWithoutExtension = selectedVideo.name.split(".").slice(0, -1).join(".");
    const blob = new Blob([data.buffer], { type: `audio/${selectedOption}` }); // Use selected option here
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement("a");
    anchorElement.href = url;
    anchorElement.download = `${originalFileNameWithoutExtension}.${selectedOption}`; // Use selected option here
    anchorElement.click();
    URL.revokeObjectURL(url);
  } catch (error) {

    toast.error("An error occured during audio download");
    // Handle the error here, e.g., show a user-friendly message or perform other actions
  }
};

function getFileExtension(fileName) {
  const regex = /(?:\.([^.]+))?$/; // Matches the last dot and everything after it
  const match = regex.exec(fileName);
  if (match && match[1]) {
    return match[1];
  }
  return ''; // No file extension found
}

function removeFileExtension(fileName) {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex !== -1) {
    return fileName.slice(0, lastDotIndex);
  }
  return fileName; // No file extension found
}

export const convertToAudio = async (selectedVideo, ffmpegRef, selectedOption = "mp3") => {
    let ffmpeg = ffmpegRef.current;
  //  ffmpeg.on("progress", ({ progress }) => {
  //   console.log(progress);
  // });
  
  let input = getFileExtension(selectedVideo.name);
  let output = removeFileExtension(selectedVideo.name) + '.' + selectedOption;
  await ffmpeg.writeFile(input, await fetchFile(selectedVideo));

  // FFMEG COMMANDS
  let ffmpeg_cmd = [];
  // 3gp video
  if (selectedOption === 'mp3') {
    ffmpeg_cmd = [
      '-i',
      input,
      '-vn',  // This tells FFmpeg to ignore video stream
      '-ar',
      '44100',  // Sample rate for MP3
      '-ac',
      '2',  // Number of audio channels (stereo)
      '-ab',
      '128k',  // Audio bitrate for MP3
      '-f',
      'mp3',  // Output format
      output,
  ]
  } else if(selectedOption === 'wav'){

    ffmpeg_cmd = [
      '-i',
      input,
      '-vn',  //This tells FFmpeg to ignore video stream
      '-ar',
      '44100',  // Sample rate for WAV
      '-ac',
      '2',  // Number of audio channels (stereo)
      output,
  ]

  }
  else if (selectedOption === 'ogg')
  {
    ffmpeg_cmd = [
      '-i',
      input,
      '-vn',  // This tells FFmpeg to ignore video stream
      '-ar',
      '44100',  // Sample rate for OGG
      '-ac',
      '2',  // Number of audio channels (stereo)
      '-q:a',
      '4',  // Audio quality parameter (1 to 10)
      '-f',
      'ogg',  // Output format
      output,
  ]
  }
  else if (selectedOption === 'aac')
  {
    ffmpeg_cmd = [
      '-i',
      input,
      '-vn',  // Ignore video stream
      '-c:a',
      'aac',  // Set codec to AAC
      '-strict',
      'experimental',
      '-b:a',
      '128k',  // Audio bitrate for AAC
      output,
  ]
  
  }
  else if (selectedOption === 'wma')
  {
    ffmpeg_cmd = [
      '-i',
      input,
      '-vn',  // Ignore video stream
      '-c:a',
      'wmav2',  // Set codec to WMA
      '-b:a',
      '128k',  // Audio bitrate for WMA
      output,
  ]
  
  }
  else if (selectedOption === 'flac')
  {
    ffmpeg_cmd = [
      '-i',
      input,
      '-vn',  // Ignore video stream
      '-c:a',
      'flac',  // Set codec to FLAC
      '-compression_level',
      '8',  // Set compression level (0-8, with 8 being highest)
      output,
  ]
  
  }
  else if(selectedOption === 'm4a')
  {
    ffmpeg_cmd = [
      '-i',
      input,
      '-vn',  // Ignore video stream
      '-c:a',
      'aac',  // Set codec to AAC
      '-b:a',
      '128k',  // Audio bitrate for M4A
      '-strict',
      'experimental',  // Ensure compatibility
      output,
  ]
  
  }
  else {
    ffmpeg_cmd = ['-i', input, output];
  }

  await ffmpeg.exec(ffmpeg_cmd);
  let data = await ffmpeg.readFile(output);
  return { data, selectedVideo };
}



