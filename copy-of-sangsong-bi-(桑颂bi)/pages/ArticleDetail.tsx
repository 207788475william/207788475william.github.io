import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, CheckCircle2, Bookmark, Lightbulb, Users, Target, Globe, ArrowUpRight, Maximize2, Palette, Layout } from 'lucide-react';

// --- CONTENT TEMPLATES BY CATEGORY ---
// Content analysis logic (text modules) is shared by category to keep the app lightweight.

const templates = {
  store: {
    category: 'STORE AESTHETICS',
    intro: '实体空间不仅是销售场所，更是品牌哲学的立体容器。本项目通过独特的动线设计与材质语言，重新定义了零售体验。',
    modules: [
      {
        icon: <Layout size={16} />,
        title: '空间叙事 (Spatial Narrative)',
        content: '设计团队放弃了传统的货架堆叠，转而采用“画廊式”布局。光线的引入经过精密计算，引导顾客在空间中自然流动，每一次转身都能发现新的视觉焦点。'
      },
      {
        icon: <Palette size={16} />,
        title: '材质语言 (Materiality)',
        content: '运用了粗糙与细腻的极致对比（如混凝土与丝绒，原木与不锈钢）。这种触觉上的反差，增强了顾客在店内的沉浸感，使购物过程变为一种感官探索。'
      },
      {
        icon: <Target size={16} />,
        title: '商业洞察 (Insight)',
        content: '“体验即留存”。在电商冲击下，该空间通过提供无法在线上复制的五感体验，成功提高了顾客的平均驻留时间（Dwell Time）和品牌忠诚度。'
      }
    ]
  },
  sensory: {
    category: 'SENSORY DESIGN',
    intro: '在功能过剩的时代，能够触动感官的产品方能突围。该设计不仅仅解决了痛点，更创造了“痒点”。',
    modules: [
      {
        icon: <Lightbulb size={16} />,
        title: '感官交互 (Interaction)',
        content: '无论是旋钮的阻尼感，还是按键清脆的声响，每一个交互细节都经过了数百次调校。这种“无意识的快感”让用户在使用过程中建立了与产品的情感连接。'
      },
      {
        icon: <Users size={16} />,
        title: '去繁就简 (Reduction)',
        content: '设计上去除了一切不必要的装饰性元素，只保留最核心的功能形态。这种极简主义不是空洞，而是为了让用户的注意力回归到产品使用的本质体验上。'
      }
    ]
  },
  home: {
    category: 'HOME & LIVING',
    intro: '家是内心世界的投射。这件家具超越了实用器具的范畴，成为了居住空间中的艺术雕塑。',
    modules: [
      {
        icon: <Maximize2 size={16} />,
        title: '形态与功能 (Form & Function)',
        content: '完美平衡了人体工学与视觉美感。其流线型的轮廓不仅适应身体曲线，更在视觉上减轻了家具的体量感，使其能轻松融入各种风格的居住环境。'
      },
      {
        icon: <Target size={16} />,
        title: '经典性 (Timelessness)',
        content: '设计诞生于数年前，但至今看来依然现代。这种穿越周期的生命力来自于对基本几何形态的运用和对材料特性的深刻理解。'
      }
    ]
  },
  arch: {
    category: 'ARCHITECTURE',
    intro: '建筑是凝固的音乐。该项目处理了光、影、结构与环境的关系，创造出了具有精神性的场所。',
    modules: [
      {
        icon: <Layout size={16} />,
        title: '结构美学 (Structural Beauty)',
        content: '结构本身即是装饰。设计师暴露了支撑体系，展现了力量的传递逻辑。这种诚实的设计语言赋予了建筑一种原始而震撼的力量感。'
      },
      {
        icon: <Globe size={16} />,
        title: '环境共生 (Context)',
        content: '建筑没有傲慢地矗立，而是谦逊地嵌入环境之中。通过窗景的借用和体块的退让，室内与室外的界限被打破，自然光线成为了最好的建筑材料。'
      }
    ]
  }
};

// --- MASTER DATABASE ---
// Contains specific metadata for all 40 items to match Inspiration.tsx perfectly.

const masterDatabase: Record<string, {title: string, brand: string, img: string, source: string}> = {
  // Store Aesthetics
  'store-1': { title: 'Aesop Sydney', brand: 'Aesop', source: 'Dezeen', img: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1200&q=80' },
  'store-2': { title: 'Blue Bottle Kyoto', brand: 'Blue Bottle', source: 'Remodelista', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80' },
  'store-3': { title: 'Gentle Monster Haus', brand: 'Gentle Monster', source: 'Founterior', img: 'https://images.unsplash.com/photo-1582037928769-181f2644ec27?auto=format&fit=crop&w=1200&q=80' },
  'store-4': { title: 'Apple Fifth Avenue', brand: 'Apple', source: 'ArchDaily', img: 'https://images.unsplash.com/photo-1565514020176-db7923707d89?auto=format&fit=crop&w=1200&q=80' },
  'store-5': { title: 'Acne Studios Tokyo', brand: 'Acne Studios', source: 'Wallpaper*', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80' },
  'store-6': { title: 'Glossier LA', brand: 'Glossier', source: 'Vogue Living', img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80' },
  'store-7': { title: 'Freitag Store', brand: 'Freitag', source: 'Designboom', img: 'https://images.unsplash.com/photo-1472851294608-415263172f7d?auto=format&fit=crop&w=1200&q=80' },
  'store-8': { title: 'MUJI Hotel Ginza', brand: 'MUJI', source: 'Web Japan', img: 'https://images.unsplash.com/photo-1522771753035-1a5b6562f329?auto=format&fit=crop&w=1200&q=80' },
  'store-9': { title: 'Starbucks Reserve', brand: 'Starbucks', source: 'Hospitality Design', img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80' },
  'store-10': { title: 'Dover Street Market', brand: 'DSM', source: 'Hypebeast', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80' },

  // Sensory Design
  'sensory-1': { title: 'BALMUDA The Toaster', brand: 'BALMUDA', source: 'Dezeen', img: 'https://images.unsplash.com/photo-1544030288-e64459871cc0?auto=format&fit=crop&w=1200&q=80' },
  'sensory-2': { title: 'Le Labo Santal 33', brand: 'Le Labo', source: 'Medium', img: 'https://images.unsplash.com/photo-1594035910387-fea4779426e9?auto=format&fit=crop&w=1200&q=80' },
  'sensory-3': { title: 'Teenage Engineering OP-1', brand: 'TE', source: 'Pinterest', img: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=1200&q=80' },
  'sensory-4': { title: 'Bang & Olufsen A9', brand: 'B&O', source: 'Interior Design', img: 'https://images.unsplash.com/photo-1545459720-aac3e5ca9678?auto=format&fit=crop&w=1200&q=80' },
  'sensory-5': { title: 'Dyson Supersonic', brand: 'Dyson', source: 'Houzz', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80' },
  'sensory-6': { title: 'Leica M11 Camera', brand: 'Leica', source: 'The Verge', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80' },
  'sensory-7': { title: 'Analogue Pocket', brand: 'Analogue', source: 'Core77', img: 'https://images.unsplash.com/photo-1531297461136-82lw8z0e?auto=format&fit=crop&w=1200&q=80' },
  'sensory-8': { title: 'Kindle Scribe', brand: 'Amazon', source: 'TechCrunch', img: 'https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&w=1200&q=80' },
  'sensory-9': { title: 'Keychron Q1 Pro', brand: 'Keychron', source: 'MKBHD', img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80' },
  'sensory-10': { title: 'Kinto Ceramics', brand: 'Kinto', source: 'Kinfolk', img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=80' },

  // Home Design
  'home-1': { title: 'Herman Miller Aeron', brand: 'Herman Miller', source: 'AD100', img: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=1200&q=80' },
  'home-2': { title: 'USM Haller System', brand: 'USM', source: 'Remodelista', img: 'https://images.unsplash.com/photo-1540932296774-3250a6122e2c?auto=format&fit=crop&w=1200&q=80' },
  'home-3': { title: 'Eames Lounge Chair', brand: 'Vitra', source: 'Elle Decor', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80' },
  'home-4': { title: 'Panton Chair', brand: 'Vitra', source: 'Dezeen', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80' },
  'home-5': { title: 'Noguchi Table', brand: 'Vitra', source: 'Dwell', img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80' },
  'home-6': { title: 'PH 5 Pendant', brand: 'Louis Poulsen', source: 'Architonic', img: 'https://images.unsplash.com/photo-1513506003011-38776f306206?auto=format&fit=crop&w=1200&q=80' },
  'home-7': { title: 'Componibili Storage', brand: 'Kartell', source: 'DWR', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80' },
  'home-8': { title: 'The Egg Chair', brand: 'Fritz Hansen', source: 'Monocle', img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80' },
  'home-9': { title: 'Mags Soft Sofa', brand: 'HAY', source: 'Hay', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80' },
  'home-10': { title: 'Stool 60', brand: 'Artek', source: 'Finland Design', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80' },

  // Architecture
  'arch-1': { title: 'Church of the Light', brand: 'Tadao Ando', source: 'ArchDaily', img: 'https://images.unsplash.com/photo-1517581177697-a0e85f559843?auto=format&fit=crop&w=1200&q=80' },
  'arch-2': { title: 'Fallingwater', brand: 'F.L. Wright', source: 'AD100', img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80' },
  'arch-3': { title: 'Guggenheim Bilbao', brand: 'Frank Gehry', source: 'Dezeen', img: 'https://images.unsplash.com/photo-1525286102393-8636541f4a67?auto=format&fit=crop&w=1200&q=80' },
  'arch-4': { title: 'Harbin Opera House', brand: 'MAD', source: 'Designboom', img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80' },
  'arch-5': { title: 'The Interlace', brand: 'OMA', source: 'Architizer', img: 'https://images.unsplash.com/photo-1470723710355-171b443c6832?auto=format&fit=crop&w=1200&q=80' },
  'arch-6': { title: 'Bosco Verticale', brand: 'Stefano Boeri', source: 'Domus', img: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80' },
  'arch-7': { title: 'Heydar Aliyev Center', brand: 'Zaha Hadid', source: 'ArchDaily', img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80' },
  'arch-8': { title: 'Therme Vals', brand: 'Peter Zumthor', source: 'Swiss Arch', img: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=1200&q=80' },
  'arch-9': { title: 'Sydney Opera House', brand: 'Jørn Utzon', source: 'UNESCO', img: 'https://images.unsplash.com/photo-1624138784181-29e5e6778e9b?auto=format&fit=crop&w=1200&q=80' },
  'arch-10': { title: 'Louvre Pyramid', brand: 'I.M. Pei', source: 'Paris Guide', img: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=1200&q=80' },
};


const getArticleData = (id: string) => {
  const meta = masterDatabase[id];

  // If we have specific metadata, combine it with the category template
  if (meta) {
    if (id.startsWith('store-')) return { ...templates.store, ...meta };
    if (id.startsWith('sensory-')) return { ...templates.sensory, ...meta };
    if (id.startsWith('home-')) return { ...templates.home, ...meta };
    if (id.startsWith('arch-')) return { ...templates.arch, ...meta };
  }

  // Absolute Fallback (Should not happen in demo)
  return {
    ...templates.sensory,
    title: 'Loading Design Case...',
    brand: 'System',
    img: 'https://images.unsplash.com/photo-1531297461136-82lw8z0e?auto=format&fit=crop&w=1200&q=80',
    source: 'Loading'
  };
};

const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (id) {
        const articleData = getArticleData(id);
        setData(articleData);
    }
  }, [id]);

  if (!data) return <div className="min-h-screen bg-muji-bg"></div>;

  return (
    <div className="min-h-screen bg-muji-bg flex flex-col animate-fade-in pb-24">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-muji-bg/95 backdrop-blur-md z-50 px-4 h-14 flex items-center justify-between border-b border-muji-border/50">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-muji-text hover:text-muji-accent transition-colors">
          <ArrowLeft size={22} strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-1.5 bg-muji-line/30 px-2 py-0.5 rounded-full border border-muji-border">
          <CheckCircle2 size={10} className="text-green-600" />
          <span className="text-[9px] text-muji-sub uppercase tracking-wide">Archived</span>
        </div>
        <button className="p-2 -mr-2 text-muji-text hover:text-muji-accent transition-colors">
          <Share2 size={20} strokeWidth={1.5} />
        </button>
      </nav>

      <main className="flex-grow pt-14">
        {/* Hero Image */}
        <div className={`w-full bg-muji-line mb-6 ${data.category === 'ARCHITECTURE' ? 'aspect-video' : 'aspect-square'}`}>
          <img 
            src={data.img || data.imageUrl} 
            alt={data.title} 
            className="w-full h-full object-cover filter contrast-[1.02]"
            loading="eager"
          />
        </div>

        {/* Content Body */}
        <article className="px-6 max-w-2xl mx-auto">
          
          {/* Header Info */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
               <span className="inline-block px-2 py-1 border border-muji-accent text-muji-accent text-[10px] tracking-widest uppercase font-medium">
                  {data.category}
               </span>
               {/* Source Badge */}
               {data.source && (
                 <div className="flex items-center gap-1 text-[10px] text-muji-sub font-medium bg-white px-2 py-0.5 border border-muji-border rounded-sm">
                    <Globe size={10} />
                    <span>Via {data.source}</span>
                 </div>
               )}
            </div>
            
            <h1 className="text-2xl font-serif font-bold text-muji-text leading-snug mb-2">
              {data.title}
            </h1>
            
            <div className="mt-2 mb-4">
                <div className="text-xs font-bold text-muji-sub tracking-widest uppercase mb-4">{data.brand}</div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="space-y-8">
            
            {/* Intro Text */}
            {data.intro && (
               <p className="text-lg font-serif text-muji-text leading-relaxed border-l-2 border-muji-accent pl-4 italic">
                  {data.intro}
               </p>
            )}

            {/* DESIGN CASE STUDY MODULES */}
            <div className="space-y-8 mt-8">
                {data.modules && data.modules.map((mod: any, idx: number) => (
                    <section key={idx} className="bg-white border border-muji-border p-5 shadow-soft">
                    <div className="flex items-center gap-2 mb-3 text-muji-accent border-b border-muji-border/50 pb-2">
                        {mod.icon || <Lightbulb size={16} />}
                        <h3 className="text-xs font-bold uppercase tracking-widest">{mod.title}</h3>
                    </div>
                    <p className="text-sm font-serif text-muji-text/90 leading-loose text-justify">
                        {mod.content}
                    </p>
                    </section>
                ))}

                {/* Source Reference Block */}
                {data.source && (
                    <div className="mt-8 pt-6 border-t border-dashed border-muji-border">
                    <h4 className="text-[10px] uppercase tracking-widest text-muji-sub mb-3">Data Source</h4>
                    <div className="flex items-start gap-3 bg-muji-line/20 p-3 rounded-sm">
                        <div className="w-8 h-8 bg-muji-text text-white flex items-center justify-center font-serif font-bold text-xs shrink-0">
                            {data.source.charAt(0)}
                        </div>
                        <div>
                            <div className="flex items-center gap-1 font-bold text-sm text-muji-text">
                                {data.source}
                                <ArrowUpRight size={10} className="text-muji-sub" />
                            </div>
                            <p className="text-xs text-muji-sub mt-1">
                                Authorized design intelligence provider.
                            </p>
                        </div>
                    </div>
                    </div>
                )}
            </div>
          </div>

          <div className="my-10 flex justify-center">
             <div className="w-12 h-1 bg-muji-border/50 rounded-full"></div>
          </div>
        </article>
      </main>

      {/* Footer Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-muji-border px-6 py-4 z-40 flex items-center justify-between safe-area-pb">
         <div className="flex gap-6">
            <button className="flex flex-col items-center gap-0.5 text-muji-sub hover:text-muji-accent transition-colors group">
               <Heart size={20} strokeWidth={1.5} className="group-hover:fill-muji-accent" />
               <span className="text-[9px]">Like</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-muji-sub hover:text-muji-accent transition-colors">
               <Share2 size={20} strokeWidth={1.5} />
               <span className="text-[9px]">Share</span>
            </button>
         </div>
         
         <button className="flex-grow ml-8 bg-muji-text text-white h-10 px-4 flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform">
            <Bookmark size={16} />
            <span className="text-xs font-medium tracking-widest uppercase">Save to Library</span>
         </button>
      </div>
    </div>
  );
};

export default ArticleDetail;