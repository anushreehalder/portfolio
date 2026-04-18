import React from 'react';

const projectImage = "https://www.figma.com/api/mcp/asset/c1ed8828-bd82-4465-be8b-dcd0dd25c8d5";
const mockupImage = "https://www.figma.com/api/mcp/asset/df5752f4-b92d-4b1f-9001-1eceb1ebfdd3";
const arrowIcon = "https://www.figma.com/api/mcp/asset/a818385d-cc8c-4c85-aa5c-65a15afbec25";

const SelectedWork = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-5 lg:px-16">
        {/* Section header */}
        <div className="flex justify-between items-start mb-10">
          <p className="font-semibold text-[13px] text-[#566166] tracking-[14px] uppercase leading-[14px]">
            SELECTED WORK
          </p>
            <p className="text-[13px] text-[#566166] leading-[18px] text-right max-w-[280px] hidden lg:block">
            At the intersection of empathy and precision, crafting intentional interfaces for the modern era.
          </p>
        </div>

        {/* Project card */}
        <div className="bg-white rounded-[15px] border border-[rgba(0,0,0,0.12)] shadow-[0px_17px_34px_rgba(26,28,29,0.1)] overflow-hidden flex flex-col lg:flex-row">
          {/* Left: Project info */}
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-[13px] text-[#414755] leading-[18px] font-medium mb-6">
              01 / Skin care clinic
            </p>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] text-[#1a1c1d] leading-[38px] mb-6">
              The digital Apothecary
            </h3>
            <p className="text-[15px] text-[#414755] leading-[22px] max-w-[320px] mb-7">
              The Digital Apothecary is a premium skincare and wellness website designed to blend modern clinical expertise with the calm, restorative essence of botanical care.
            </p>
            <a
              href="https://www.figma.com/design/oJfYft0BFCDLYglHF3UFO9/Untitled?node-id=0-1&p=f&t=R6DFUoyQYDIlSvcZ-0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-blue font-semibold text-[15px] tracking-[1.4px] underline hover:opacity-80 transition-opacity"
            >
              VIEW PROJECT
              <img src={arrowIcon} alt="arrow" className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Project mockup image */}
          <div className="lg:w-1/2 bg-[#c4c4c4] rounded-tr-[15px] rounded-br-[15px] overflow-hidden relative min-h-[300px] lg:min-h-[340px]">
            <div className="absolute inset-0">
              <img
                src={projectImage}
                alt="The Digital Apothecary"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-[#e7e6e4]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%]">
              <img
                src={mockupImage}
                alt="Project mockup"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
