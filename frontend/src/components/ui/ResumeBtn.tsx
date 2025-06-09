import React from 'react';
import { Download } from 'lucide-react';

const ResumeBtn: React.FC = () => {
  const PDF_FILE_URL: string = '/Ivan_Vargas_Resume_2025.pdf';

  const downloadFileAtURL = (url: string): void => {
    try {
      const fileName: string = url.split('/').pop() || 'resume.pdf';
      const aTag: HTMLAnchorElement = document.createElement('a');
      aTag.href = url;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } catch (error) {
      console.error('Failed to download the file:', error);
    }
  };

  return (
    <button
      onClick={() => downloadFileAtURL(PDF_FILE_URL)}
      className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-300 ease-in-out"
    >
      <div className="relative flex items-center gap-2 px-6 py-3 bg-black border-2 border-rose-400 rounded-lg text-white hover:text-rose-400 transition-colors duration-300">
        <Download className="w-5 h-5" />
        <span>Download Resume</span>
      </div>
    </button>
  );
};

export default ResumeBtn;
