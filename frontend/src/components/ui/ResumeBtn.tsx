import React from 'react';

const ResumeBtn: React.FC = () => {
  const PDF_FILE_URL: string = '/ivanvargas-portfolio/VargasIvanChristopherD._Resume.pdf';

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
    <div className="pt-7">
      <button
        onClick={() => downloadFileAtURL(PDF_FILE_URL)}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg border-2 border-green-500 group hover:shadow-green-glow transition-shadow duration-300 hover:-translate-y-2"
      >
        <span className="text-base 2xl:text-lg relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md text-white group-hover:text-green-500">
          Download Resume
        </span>
      </button>
    </div>
  );
};

export default ResumeBtn;
