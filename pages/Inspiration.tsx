import React from 'react';
import { Clock, Store, Armchair, Zap, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- FULL DATASET FOR INSPIRATION FEED ---
// All images are curated high-quality Unsplash assets.

const storeAestheticsData = [
  { id: 'store-1', title: 'Aesop Sydney', brand: 'Aesop', source: 'Dezeen', img: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-2', title: 'Blue Bottle Kyoto', brand: 'Blue Bottle', source: 'Remodelista', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-3', title: 'Gentle Monster Haus', brand: 'Gentle Monster', source: 'Founterior', img: 'https://images.unsplash.com/photo-1582037928769-181f2644ec27?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-4', title: 'Apple Fifth Avenue', brand: 'Apple', source: 'ArchDaily', img: 'https://images.unsplash.com/photo-1565514020176-db7923707d89?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-5', title: 'Acne Studios Tokyo', brand: 'Acne Studios', source: 'Wallpaper*', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-6', title: 'Glossier LA', brand: 'Glossier', source: 'Vogue Living', img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-7', title: 'Freitag Store', brand: 'Freitag', source: 'Designboom', img: 'https://images.unsplash.com/photo-1472851294608-415263172f7d?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-8', title: 'MUJI Hotel Ginza', brand: 'MUJI', source: 'Web Japan', img: 'https://images.unsplash.com/photo-1522771753035-1a5b6562f329?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-9', title: 'Starbucks Reserve', brand: 'Starbucks', source: 'Hospitality Design', img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80' },
  { id: 'store-10', title: 'Dover Street Market', brand: 'DSM', source: 'Hypebeast', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80' },
];

const sensoryDesignData = [
  { id: 'sensory-1', title: 'BALMUDA The Toaster', brand: 'BALMUDA', source: 'Dezeen', img: 'https://images.unsplash.com/photo-1544030288-e64459871cc0?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-2', title: 'Le Labo Santal 33', brand: 'Le Labo', source: 'Medium', img: 'https://images.unsplash.com/photo-1594035910387-fea4779426e9?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-3', title: 'Teenage Engineering OP-1', brand: 'TE', source: 'Pinterest', img: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-4', title: 'Bang & Olufsen A9', brand: 'B&O', source: 'Interior Design', img: 'https://images.unsplash.com/photo-1545459720-aac3e5ca9678?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-5', title: 'Dyson Supersonic', brand: 'Dyson', source: 'Houzz', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-6', title: 'Leica M11 Camera', brand: 'Leica', source: 'The Verge', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-7', title: 'Analogue Pocket', brand: 'Analogue', source: 'Core77', img: 'https://images.unsplash.com/photo-1531297461136-82lw8z0e?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-8', title: 'Kindle Scribe', brand: 'Amazon', source: 'TechCrunch', img: 'https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-9', title: 'Keychron Q1 Pro', brand: 'Keychron', source: 'MKBHD', img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80' },
  { id: 'sensory-10', title: 'Kinto Ceramics', brand: 'Kinto', source: 'Kinfolk', img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80' },
];

const homeDesignData = [
  { id: 'home-1', title: 'Herman Miller Aeron', brand: 'Herman Miller', source: 'AD100', img: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-2', title: 'USM Haller System', brand: 'USM', source: 'Remodelista', img: 'https://images.unsplash.com/photo-1540932296774-3250a6122e2c?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-3', title: 'Eames Lounge Chair', brand: 'Vitra', source: 'Elle Decor', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-4', title: 'Panton Chair', brand: 'Vitra', source: 'Dezeen', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-5', title: 'Noguchi Table', brand: 'Vitra', source: 'Dwell', img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-6', title: 'PH 5 Pendant', brand: 'Louis Poulsen', source: 'Architonic', img: 'https://images.unsplash.com/photo-1513506003011-38776f306206?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-7', title: 'Componibili Storage', brand: 'Kartell', source: 'DWR', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-8', title: 'The Egg Chair', brand: 'Fritz Hansen', source: 'Monocle', img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-9', title: 'Mags Soft Sofa', brand: 'HAY', source: 'Hay', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80' },
  { id: 'home-10', title: 'Stool 60', brand: 'Artek', source: 'Finland Design', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80' },
];

const archData = [
  { id: 'arch-1', title: 'Church of the Light', brand: 'Tadao Ando', source: 'ArchDaily', img: 'https://images.unsplash.com/photo-1517581177697-a0e85f559843?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-2', title: 'Fallingwater', brand: 'F.L. Wright', source: 'AD100', img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-3', title: 'Guggenheim Bilbao', brand: 'Frank Gehry', source: 'Dezeen', img: 'https://images.unsplash.com/photo-1525286102393-8636541f4a67?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-4', title: 'Harbin Opera House', brand: 'MAD', source: 'Designboom', img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-5', title: 'The Interlace', brand: 'OMA', source: 'Architizer', img: 'https://images.unsplash.com/photo-1470723710355-171b443c6832?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-6', title: 'Bosco Verticale', brand: 'Stefano Boeri', source: 'Domus', img: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-7', title: 'Heydar Aliyev Center', brand: 'Zaha Hadid', source: 'ArchDaily', img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-8', title: 'Therme Vals', brand: 'Peter Zumthor', source: 'Swiss Arch', img: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-9', title: 'Sydney Opera House', brand: 'Jørn Utzon', source: 'UNESCO', img: 'https://images.unsplash.com/photo-1624138784181-29e5e6778e9b?auto=format&fit=crop&w=600&q=80' },
  { id: 'arch-10', title: 'Louvre Pyramid', brand: 'I.M. Pei', source: 'Paris Guide', img: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=600&q=80' },
];

const SectionHeader = ({ title, icon: Icon, source }: { title: string, icon: any, source: string }) => (
  <div className="flex items-center justify-between mb-4 px-1 mt-8 first:mt-0">
    <div className="flex items-center gap-2">
       <Icon size={18} className="text-muji-accent" strokeWidth={1.5} />
       <h2 className="text-sm font-bold text-muji-text tracking-wider border-l-2 border-muji-accent pl-3">{title}</h2>
    </div>
    <div className="flex items-center gap-1 text-[10px] text-muji-sub">
       <span className="uppercase tracking-wide">{source}</span>
    </div>
  </div>
);

const HorizontalScrollCard = ({ item, onClick }: { item: any, onClick: (id: string) => void }) => (
    <div 
        onClick={() => onClick(item.id)}
        className="flex-shrink-0 w-40 group cursor-pointer mr-3 last:mr-0 snap-start"
    >
        <div className="aspect-[3/4] bg-white border border-muji-border p-2 relative overflow-hidden shadow-soft hover:shadow-md transition-all duration-300">
            <img 
                src={item.img} 
                className="w-full h-full object-cover filter contrast-[0.95] group-hover:scale-105 transition-transform duration-700" 
                alt={item.title} 
                loading="lazy"
            />
            <div className="absolute top-2 left-2">
               <span className="text-[8px] font-medium bg-white/90 backdrop-blur-sm text-muji-text px-1.5 py-0.5 border border-muji-border/50 uppercase">
                  {item.brand}
               </span>
            </div>
        </div>
        <div className="mt-2 px-1">
            <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] uppercase text-muji-sub/80">{item.source}</span>
            </div>
            <h3 className="text-xs font-bold text-muji-text leading-tight group-hover:text-muji-accent transition-colors line-clamp-2">
                {item.title}
            </h3>
        </div>
    </div>
);

const Inspiration: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }).replace('/', '.');
  const navigate = useNavigate();

  const handleArticleClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="bg-muji-bg min-h-screen">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-muji-bg sticky top-0 z-40 border-b border-muji-border/50 backdrop-blur-md">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-muji-accent uppercase block mb-1">Curated Daily</span>
            <h1 className="text-3xl font-serif font-bold text-muji-text tracking-tight">每日灵感</h1>
          </div>
          <div className="text-right">
            <div className="text-3xl font-serif font-light text-muji-text">{currentDate}</div>
            <div className="flex items-center justify-end gap-1 text-[10px] text-muji-sub uppercase tracking-wider mt-1">
              <Clock size={10} />
              <span>40 Cases Updated</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-5 pb-24 pt-6 space-y-10 no-scrollbar">
        
        {/* SECTION 1: Store Aesthetics */}
        <section>
          <SectionHeader title="店铺美学" icon={Store} source="Via Remodelista" />
          <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
             {storeAestheticsData.map((item) => (
                 <HorizontalScrollCard key={item.id} item={item} onClick={handleArticleClick} />
             ))}
             <div className="flex-shrink-0 w-4 flex items-center justify-center"></div>
          </div>
        </section>

        {/* SECTION 2: Sensory Design */}
        <section>
          <SectionHeader title="感官设计" icon={Zap} source="Via Dezeen" />
          <div className="grid grid-cols-2 gap-3">
             {sensoryDesignData.map((item) => (
               <div key={item.id} onClick={() => handleArticleClick(item.id)} className="group cursor-pointer">
                  <div className="aspect-square bg-white border border-muji-border p-3 relative mb-2 overflow-hidden shadow-sm">
                     <img src={item.img} className="w-full h-full object-contain filter contrast-[0.98] group-hover:scale-105 transition-transform duration-700" alt={item.title} loading="lazy" />
                  </div>
                  <div className="px-1">
                     <span className="text-[9px] text-muji-sub uppercase tracking-wider">{item.brand}</span>
                     <h3 className="text-xs font-bold text-muji-text mt-0.5 line-clamp-1 group-hover:text-muji-accent transition-colors">{item.title}</h3>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* SECTION 3: Home Design */}
        <section>
          <SectionHeader title="家居设计" icon={Armchair} source="Via Houzz" />
           <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
             {homeDesignData.map((item) => (
                 <HorizontalScrollCard key={item.id} item={item} onClick={handleArticleClick} />
             ))}
             <div className="flex-shrink-0 w-4 flex items-center justify-center"></div>
          </div>
        </section>

        {/* SECTION 4: Architectural Aesthetics */}
        <section>
          <SectionHeader title="建筑美学" icon={Landmark} source="Via ArchDaily" />
          <div className="space-y-4">
             {archData.map((item) => (
               <div key={item.id} onClick={() => handleArticleClick(item.id)} className="group cursor-pointer bg-white border border-muji-border p-1 shadow-sm">
                  <div className="aspect-video w-full overflow-hidden relative">
                     <img src={item.img} className="w-full h-full object-cover filter saturate-[0.9] group-hover:scale-105 transition-transform duration-1000" alt={item.title} loading="lazy" />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                        <div className="text-white">
                           <span className="text-[9px] uppercase tracking-widest opacity-80">{item.brand}</span>
                           <h3 className="text-sm font-serif font-medium leading-tight">{item.title}</h3>
                        </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </section>

        <div className="text-center py-8">
           <p className="text-[10px] text-muji-sub/40 tracking-[0.2em] font-serif italic">SANGSONG BI · GLOBAL DESIGN ARCHIVE</p>
        </div>
      </main>
    </div>
  );
};

export default Inspiration;