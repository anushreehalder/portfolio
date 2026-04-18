import React from 'react';

const steps = [
  {
    icon: "https://www.figma.com/api/mcp/asset/6e89fe1f-14d2-496d-996b-a0f90d91c4cb",
    title: "EMPATHIZE",
    description: "Researching user needs and pain points."
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/dffb2085-19e4-410e-8770-d5ec48786790",
    title: "DEFINE",
    description: "Creating clear project goals and insights."
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/b8a7492a-1d97-43ec-a6a5-7f0121c03c72",
    title: "IDEATE",
    description: "Sketching multiple solutions rapidly."
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/618dd5da-b1d4-48bf-8015-f0ff26551c67",
    title: "DESIGN",
    description: "Building high-fidelity prototypes."
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/cf25d08a-a571-4794-9ebb-536d656b2f9e",
    title: "TEST",
    description: "Validating through usability testing."
  }
];

const ProcessStep = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-14 h-14 rounded-full bg-white border border-[rgba(169,180,185,0.1)] shadow-sm flex items-center justify-center mb-7">
      <img src={icon} alt={title} className="w-5 h-5 object-contain" />
    </div>
    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#2a3439] tracking-[0.3px] uppercase mb-2">
      {title}
    </h4>
    <p className="text-[12px] text-[#566166] leading-[17px] max-w-[160px]">
      {description}
    </p>
  </div>
);

const DesignProcess = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-5 lg:px-16">
        <div className="bg-[rgba(217,228,234,0.3)] rounded-[30px] py-14 px-8 lg:px-14">
          {/* Label */}
          <p className="text-center font-semibold text-[13px] text-[#566166] tracking-[14px] uppercase leading-[14px] mb-4">
            my METHODOLOGY
          </p>

          {/* Heading */}
          <div className="text-center mb-10">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[38px] text-[#0f172a] tracking-[-1.4px] leading-[44px]">
              A Scientific Approach{' '}
            </span>
            <span className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[56px] leading-[60px] tracking-[-1.3px] capitalize">
              to Beauty
            </span>
          </div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Dashed connecting line */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] border-t border-dashed border-white" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {steps.map((step) => (
                <ProcessStep key={step.title} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
