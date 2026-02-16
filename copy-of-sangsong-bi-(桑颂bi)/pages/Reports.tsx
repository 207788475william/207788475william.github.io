import React from 'react';
import { Plus, Download, ChevronDown } from 'lucide-react';

const PaperInput = ({ label, placeholder, value }: { label: string, placeholder: string, value?: string }) => (
  <div className="flex flex-col gap-1 group">
    <label className="text-[10px] uppercase tracking-wider text-muji-sub font-medium group-focus-within:text-muji-accent transition-colors">
      {label}
    </label>
    <div className="relative">
      <input 
        type="text" 
        className="w-full bg-transparent border-b border-muji-border py-2 text-lg font-serif text-muji-text focus:outline-none focus:border-muji-accent transition-colors placeholder-muji-border"
        placeholder={placeholder}
        defaultValue={value}
      />
      <span className="absolute right-0 bottom-2 text-xs text-muji-sub font-light select-none">CNY</span>
    </div>
  </div>
);

const Reports: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-muji-bg">
      {/* Header */}
      <header className="px-6 pt-10 pb-4 bg-muji-bg border-b border-muji-border">
        <div className="flex justify-between items-end">
           <div>
              <h1 className="text-2xl font-serif font-bold text-muji-text">数据填报</h1>
              <p className="text-xs text-muji-sub mt-1">Manual Data Entry</p>
           </div>
           <button className="p-2 text-muji-text border border-muji-border bg-white hover:bg-muji-bg transition-colors">
             <Download size={18} strokeWidth={1.5} />
           </button>
        </div>
      </header>

      <main className="flex-grow px-6 py-8 space-y-8">
        
        {/* Paper Form Container */}
        <div className="bg-muji-paper border border-muji-border p-8 shadow-sm relative">
          {/* Decorative Holes for "Binder" feel */}
          <div className="absolute top-0 left-0 w-full h-4 flex justify-between px-4 -mt-2">
             <div className="w-3 h-3 rounded-full bg-muji-bg border border-muji-border/50"></div>
             <div className="w-3 h-3 rounded-full bg-muji-bg border border-muji-border/50"></div>
             <div className="w-3 h-3 rounded-full bg-muji-bg border border-muji-border/50"></div>
          </div>

          {/* Date Selection */}
          <div className="flex gap-4 mb-8">
             <div className="w-1/2 border-b border-muji-text pb-1">
                <label className="block text-[9px] text-muji-sub uppercase mb-1">Year</label>
                <div className="flex items-center justify-between">
                   <span className="text-lg font-serif">2026</span>
                   <ChevronDown size={14} className="text-muji-sub" />
                </div>
             </div>
             <div className="w-1/2 border-b border-muji-text pb-1">
                <label className="block text-[9px] text-muji-sub uppercase mb-1">Month</label>
                <div className="flex items-center justify-between">
                   <span className="text-lg font-serif">02 February</span>
                   <ChevronDown size={14} className="text-muji-sub" />
                </div>
             </div>
          </div>

          {/* Inputs */}
          <div className="space-y-6">
             <PaperInput label="本月销售业绩" placeholder="0.00" />
             <PaperInput label="总营业目标" placeholder="0.00" value="2,000,000" />
             <div className="pt-2"></div>
             <PaperInput label="茶叶类目销售" placeholder="0.00" />
             <PaperInput label="香薰类目销售" placeholder="0.00" />
          </div>

          {/* Add Line */}
          <button className="w-full mt-8 py-3 border border-dashed border-muji-sub/40 text-muji-sub text-xs hover:border-muji-accent hover:text-muji-accent transition-colors flex items-center justify-center gap-2">
            <Plus size={14} />
            <span>增加其他业务线</span>
          </button>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-muji-text text-white font-serif py-4 text-sm tracking-widest hover:bg-muji-accent transition-colors shadow-lg shadow-muji-text/20">
           CONFIRM & SUBMIT
        </button>

      </main>
    </div>
  );
};

export default Reports;