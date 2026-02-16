import React from 'react';
import CircularProgress from '../components/CircularProgress';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis, Tooltip } from 'recharts';
import { RefreshCw, TrendingUp } from 'lucide-react';

// Monthly data for the last 6 months
const monthlyData = [
  { name: '8月', value: 180 },
  { name: '9月', value: 220 },
  { name: '10月', value: 200 },
  { name: '11月', value: 320 }, // Double 11 peak
  { name: '12月', value: 290 },
  { name: '1月', value: 266 },  // Current month
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-muji-bg">
      <header className="px-6 pt-10 pb-6 sticky top-0 bg-muji-bg/95 backdrop-blur-sm z-30 flex justify-between items-end border-b border-muji-border">
         <div>
            <h1 className="text-2xl font-serif font-bold text-muji-text">经营概览</h1>
            <p className="text-[10px] text-muji-sub tracking-widest uppercase mt-1">Business Intelligence</p>
         </div>
         <div className="flex items-center gap-1.5 bg-white border border-muji-border px-2.5 py-1 rounded-sm shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
            <span className="text-[10px] font-medium text-muji-text">数据更新 09:00</span>
         </div>
      </header>

      <main className="px-5 py-6 space-y-5 animate-fade-in">
        
        {/* KPI Cards Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muji-paper p-5 border border-muji-border shadow-soft flex flex-col justify-between h-40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-8 h-8 bg-muji-bg rounded-bl-full z-0"></div>
            <div className="relative z-10">
               <span className="text-xs text-muji-sub tracking-wider block mb-1">本月营收 (CNY)</span>
               <div className="text-2xl font-serif font-bold text-muji-text mt-1">266<span className="text-sm font-normal text-muji-sub ml-1">万</span></div>
            </div>
            
            <div className="relative z-10 pt-4">
               <div className="flex items-center text-muji-accent text-xs font-medium">
                  <TrendingUp size={14} className="mr-1" />
                  <span>+12.5%</span>
               </div>
               <div className="w-full bg-muji-bg h-1 mt-2">
                 <div className="bg-muji-accent h-full w-[60%]"></div>
               </div>
            </div>
          </div>

          <div className="bg-muji-paper p-5 border border-muji-border shadow-soft flex flex-col justify-between h-40 relative overflow-hidden">
             <div className="relative z-10">
               <span className="text-xs text-muji-sub tracking-wider block mb-4">利润达成率</span>
               <div className="flex justify-center">
                  <CircularProgress percentage={65} value="65" unit="%" size={80} strokeWidth={4} />
               </div>
            </div>
          </div>
        </div>

        {/* YTD Big Card */}
        <section className="bg-muji-paper p-6 border border-muji-border shadow-soft">
           <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-muji-text border-l-2 border-muji-accent pl-3">年度累计利润</h3>
              <span className="text-[10px] text-muji-sub font-mono">YTD 2025</span>
           </div>
           
           <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-serif font-medium text-muji-text">1,342,000</span>
              <span className="text-xs text-muji-sub">CNY</span>
           </div>
           
           <p className="text-xs text-muji-sub leading-relaxed mb-4">
             距离年度目标 <span className="text-muji-text font-medium">200万</span> 还有 <span className="text-muji-accent">32.9%</span> 的差距。
             建议重点关注 Q3 营销活动。
           </p>

           <div className="w-full bg-muji-bg h-8 p-1 flex items-center">
              <div className="h-full bg-muji-text/80 w-[67%] relative group cursor-help">
                 <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">67%</span>
              </div>
           </div>
        </section>

        {/* Category Breakdown */}
        <section className="bg-muji-paper border border-muji-border shadow-soft">
           <div className="px-6 py-4 border-b border-muji-border flex justify-between items-center">
              <h3 className="text-sm font-bold text-muji-text">类目占比</h3>
              <button className="text-[10px] text-muji-sub hover:text-muji-accent transition-colors">查看详情 →</button>
           </div>
           <div className="p-6 space-y-6">
              {[
                { label: '茶叶品类', val: '83万', pct: 45 },
                { label: '家居香薰', val: '112万', pct: 62 },
                { label: '棉麻织物', val: '45万', pct: 25 }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                   <div className="w-16 text-xs text-muji-sub text-right">{item.label}</div>
                   <div className="flex-grow bg-muji-bg h-6 relative">
                      <div className="absolute top-0 left-0 h-full bg-muji-sub/20" style={{ width: `${item.pct}%` }}></div>
                      <div className="absolute top-0 left-0 h-full border-r-2 border-muji-accent" style={{ width: `${item.pct}%` }}></div>
                   </div>
                   <div className="w-12 text-xs font-medium text-muji-text font-serif">{item.val}</div>
                </div>
              ))}
           </div>
        </section>

        {/* Monthly Trend Chart */}
        <section className="bg-muji-paper p-6 border border-muji-border shadow-soft pb-2">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-sm font-bold text-muji-text border-l-2 border-muji-accent pl-3">近6个月销售趋势</h3>
             <span className="text-[10px] text-muji-sub">单位: 万</span>
           </div>
           <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} barCategoryGap="25%">
                <XAxis 
                  dataKey="name" 
                  tick={{fontSize: 10, fill: '#707070', fontFamily: 'Noto Sans SC'}} 
                  axisLine={false} 
                  tickLine={false} 
                  dy={10} 
                />
                <Tooltip 
                  cursor={{fill: '#F5F5F0'}}
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D3D3D3',
                    fontSize: '12px',
                    fontFamily: 'Noto Serif SC',
                    color: '#333333'
                  }}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {monthlyData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      // Highlight the current month
                      fill={index === monthlyData.length - 1 ? '#7F0019' : '#D4D4D4'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
           </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;