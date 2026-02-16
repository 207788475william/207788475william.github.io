import React from 'react';
import { ChevronRight, Settings, Info, CreditCard } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-muji-bg font-sans">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-muji-bg/80 backdrop-blur-md border-b border-muji-border px-6 py-4">
        <h1 className="text-xl font-medium tracking-tight text-muji-text">设置</h1>
      </header>

      <main className="flex-grow pb-24">
        {/* User Profile */}
        <section className="mt-6 mb-8 px-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-white border border-muji-border flex items-center justify-center overflow-hidden p-0.5">
              <img 
                src="https://picsum.photos/seed/user1/200/200" 
                alt="User Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-muji-text">体验用户</h2>
              <p className="text-sm text-muji-muted font-mono">ID: 88202501</p>
            </div>
          </div>
        </section>

        <div className="space-y-6">
          {/* Learning Fund Card */}
          <section className="mb-8 px-6">
            <h3 className="mb-2 text-xs font-semibold text-muji-muted uppercase tracking-wider">学习资金</h3>
            <div className="bg-white border border-muji-border rounded-sm p-5 space-y-4 shadow-sm">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium text-muji-text">本月预算执行</span>
                  <span className="text-lg font-bold text-muji-accentDark">¥1,280 <span className="text-xs font-normal text-muji-muted">/ ¥2,000</span></span>
                </div>
                <div className="w-full bg-muji-bg h-1.5 rounded-full overflow-hidden">
                  <div className="bg-muji-accentDark h-full" style={{ width: '64%' }}></div>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-[10px] text-muji-muted">本月可用余额: ¥720</span>
                  <span className="text-[10px] text-muji-muted">64%</span>
                </div>
              </div>
              
              <div className="border-t border-muji-border pt-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-muji-muted">费用明细</span>
                  <button className="text-[10px] px-2 py-1 border border-muji-border rounded-sm text-muji-text hover:bg-muji-bg transition-colors">+ 添加项</button>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-muji-text">在线课程 (UI/UX)</span>
                    <span className="text-sm font-medium italic text-muji-text">¥899.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-muji-text">设计书籍</span>
                    <span className="text-sm font-medium italic text-muji-text">¥381.00</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-muji-border pt-3 flex justify-between items-center">
                <span className="text-sm font-medium text-muji-text">总支出统计</span>
                <span className="text-base font-bold text-muji-text">¥1,280.00</span>
              </div>
            </div>
          </section>

          {/* System Settings */}
          <section>
            <h3 className="px-6 mb-2 text-xs font-semibold text-muji-muted uppercase tracking-wider">系统</h3>
            <div className="bg-white border-y border-muji-border divide-y divide-muji-border">
              <button className="w-full flex items-center justify-between px-6 py-4 active:bg-muji-bg transition-colors group">
                <span className="text-base text-muji-text">关于 桑颂 Ai</span>
                <div className="flex items-center text-muji-muted group-hover:text-muji-text transition-colors">
                  <span className="text-sm mr-2">v1.0.4</span>
                  <ChevronRight size={16} />
                </div>
              </button>
            </div>
          </section>

          {/* Dashboard Management */}
          <section>
            <h3 className="px-6 mb-2 text-xs font-semibold text-muji-muted uppercase tracking-wider">看板管理</h3>
            <div className="bg-white border-y border-muji-border">
              {/* Category Setting */}
              <button className="w-full flex items-center justify-between px-6 py-4 active:bg-muji-bg transition-colors group border-b border-muji-border">
                <span className="text-base text-muji-text">看板类目设置</span>
                <div className="flex items-center text-muji-muted group-hover:text-muji-text transition-colors">
                  <span className="text-sm mr-2">茶叶, 香薰...</span>
                  <ChevronRight size={16} />
                </div>
              </button>
              {/* Year Preference */}
              <div className="w-full flex items-center justify-between px-6 py-4">
                <span className="text-base text-muji-text">年份偏好设置</span>
                <select className="bg-transparent border-none text-sm text-muji-muted focus:ring-0 text-right pr-8 cursor-pointer hover:text-muji-text transition-colors">
                  <option value="2025" selected>2025 年</option>
                  <option value="2026">2026 年</option>
                  <option value="2050">2050 年</option>
                </select>
              </div>
            </div>
          </section>

          {/* Logout */}
          <section className="px-6 pt-4 pb-10">
            <button className="w-full py-4 bg-white border border-muji-border text-muji-accentDark font-medium rounded-sm active:bg-red-50 transition-colors shadow-sm">
              退出登录
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;