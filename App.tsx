import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Users, 
  Lock, 
  Command, 
  Square, 
  BarChart2, 
  MoreHorizontal, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Link2,
  Download,
  Plus,
  Sparkles,
  Smile,
  CheckCircle2,
  Shield,
  Zap,
  Cpu,
  Database,
  Search,
  Info
} from 'lucide-react';

const App: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden text-white font-sans selection:bg-purple-500/30">
      
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Top Right Purple/Pink Glow (Massive) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 blur-[140px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
        
        {/* Top Left Subtle Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-slate-800/20 blur-[120px] rounded-full -translate-x-1/4 -translate-y-1/4"></div>
        
        {/* Statue Image - Atlas Back View - Large, Top Right, Behind Dashboard */}
        <div className="absolute top-0 right-0 w-[800px] md:w-[1200px] h-[1200px] z-0 pointer-events-none opacity-50 mix-blend-screen">
          <img 
            src="https://images.unsplash.com/photo-1627931327170-c027429665f8?q=80&w=1956&auto=format&fit=crop" 
            alt="Atlas Statue" 
            className="absolute top-[-100px] right-[-200px] md:right-[-100px] w-full h-full object-contain [mask-image:radial-gradient(circle_at_50%_40%,black_40%,transparent_100%)] grayscale contrast-125"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-xl font-semibold tracking-tight text-white transition-opacity duration-500 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>atlas.</span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-lg shadow-black/20">
          <button className="px-5 py-1.5 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5">Início</button>
          <button className="px-5 py-1.5 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5">Soluções</button>
          <button className="px-5 py-1.5 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5">Contato</button>
        </div>

        <div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.2)]">
            Consultoria Gratuita
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-start md:items-start space-y-32">
        
        {/* Hero Section */}
        <section className="w-full">
          {/* Header Section */}
          <div className="max-w-3xl mb-16 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 w-auto">
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <Zap size={10} className="text-white" />
              </div>
              <span className="text-xs text-gray-300 font-medium">+ R$ 50M em Vendas Geradas</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              Sites de alta performance <br />
              <span className="text-gray-400">& automação inteligente.</span>
            </h1>

            <h2 className="text-xl text-gray-400 font-medium mb-6">
              Escale sua operação com tecnologia
            </h2>

            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              Nós transformamos visitantes em clientes. A Atlas cria ecossistemas digitais completos, integrando web design estratégico e automações que eliminam gargalos e multiplicam seu faturamento.
            </p>
          </div>

          {/* Dashboard Mockup - The Centerpiece */}
          <div className="relative w-full rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl shadow-black/50">
            {/* Mockup Container Inner */}
            <div className="bg-[#0A0A0A]/90 backdrop-blur-xl rounded-xl overflow-hidden border border-white/5 relative">
                
                {/* Browser Header */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-black/40">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    <div className="w-px h-4 bg-white/10 mx-2"></div>
                    <ArrowLeft size={14} className="text-gray-600" />
                    <ArrowRight size={14} className="text-gray-600" />
                    <RotateCcw size={14} className="text-gray-600" />
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1 bg-black/50 rounded-md border border-white/5 w-64 justify-center">
                    <Lock size={10} className="text-gray-500" />
                    <span className="text-xs text-gray-500">atlas.ag/dashboard-vendas</span>
                    <Link2 size={10} className="text-gray-500 ml-auto" />
                  </div>

                  <div className="flex gap-3">
                    <Download size={14} className="text-gray-600" />
                    <Plus size={14} className="text-gray-600" />
                  </div>
                </div>

                {/* App Interface Body */}
                <div className="flex h-[600px] relative">
                  
                  {/* Left Sidebar */}
                  <div className="w-64 border-r border-white/5 p-4 flex flex-col gap-6 hidden md:flex bg-black/20">
                    {/* Skeleton loaders for sidebar items */}
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-3">
                        <div className="h-2 w-16 bg-white/5 rounded-full mb-4"></div>
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-white/5 rounded-full opacity-60"></div>
                          <div className="h-2 w-4/5 bg-white/5 rounded-full opacity-40"></div>
                          <div className="h-2 w-3/4 bg-white/5 rounded-full opacity-30"></div>
                        </div>
                      </div>
                    ))}
                    <div className="mt-auto space-y-3 opacity-50">
                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-8 relative">
                      {/* Top Controls */}
                      <div className="flex justify-between items-start mb-10">
                          <div>
                            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent mb-6 opacity-80"></div>
                            <h2 className="text-3xl text-gray-200 font-medium mb-4">Relatório de Performance</h2>
                            <div className="flex gap-2">
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:bg-white/10">
                                <Command size={12} /> Ações
                              </button>
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:bg-white/10">
                                <Square size={12} /> Integrações
                              </button>
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:bg-white/10">
                                <BarChart2 size={12} /> Conversão
                              </button>
                            </div>
                          </div>
                          <button className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-gray-300 hover:bg-white/15">
                            Exportar
                          </button>
                      </div>

                      {/* Text Content with Highlights */}
                      <div className="space-y-6 max-w-2xl text-gray-500 text-sm leading-7">
                        <p>
                          A análise mensal aponta um crescimento significativo na captação de leads. A implementação do <span className="text-gray-300 font-medium bg-white/5 px-1 rounded">novo fluxo de CRM</span> resultou em uma redução de 40% no tempo de resposta, enquanto o <span className="text-purple-400">redesign da landing page</span> aumentou a conversão imediata. O tráfego qualificado está sendo processado automaticamente. <span className="line-through opacity-50">Processos manuais removidos.</span>
                        </p>

                        <ol className="list-decimal pl-5 space-y-3 marker:text-gray-600">
                          <li>Automação de e-mail marketing <span className="text-gray-300">ativa e convertendo</span> acima da média.</li>
                          <li>Integração de pagamentos verificada e segura.</li>
                          <li>Bot de atendimento operando com <span className="text-gray-300">retenção de 85%</span> dos usuários.</li>
                        </ol>

                        {/* Bottom Widget Area */}
                        <div className="mt-12 pt-8 border-t border-white/5">
                          <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent mb-6 opacity-50"></div>
                          <h3 className="text-lg text-gray-200 font-medium mb-4">Pilares da Estratégia Atlas</h3>
                          
                          <div className="flex flex-wrap gap-3">
                              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5 text-xs text-gray-400">
                                <Cpu size={10} className="text-yellow-500" /> Automação
                              </span>
                              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5 text-xs text-gray-400">
                                <Sparkles size={10} className="text-yellow-500" /> Design UI/UX
                              </span>
                              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5 text-xs text-gray-400">
                                <CheckCircle2 size={10} className="text-red-400" /> Vendas
                              </span>
                              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5 text-xs text-gray-400">
                                <Shield size={10} className="text-yellow-500" /> Segurança
                              </span>
                          </div>
                          <p className="mt-4 text-xs text-gray-600">Dados baseados na performance real dos nossos clientes nos últimos 30 dias.</p>
                        </div>
                      </div>
                  </div>

                  {/* Right Sidebar (Stats/Widgets) */}
                  <div className="w-72 border-l border-white/5 p-6 hidden lg:flex flex-col gap-6 bg-black/20">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-3">
                          <div className="h-1.5 w-1/3 bg-white/10 rounded-full mb-2"></div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full"></div>
                          <div className="h-1.5 w-2/3 bg-white/5 rounded-full"></div>
                        </div>
                      ))}
                  </div>

                  {/* Overlay Play Button (Absolute Center) */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/20 backdrop-blur-[1px]">
                    <button className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-transform hover:scale-110 active:scale-95">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                        <Play size={32} className="text-white fill-white ml-1 opacity-90 group-hover:opacity-100" />
                    </button>
                  </div>
                </div>
            </div>
            
            {/* Grid Lines Overlay on Mockup (Cosmetic) */}
            <div className="absolute -top-10 -left-10 -right-10 -bottom-10 border border-white/5 rounded-[40px] pointer-events-none opacity-20 hidden md:block"></div>
          </div>
        </section>

        {/* AI/Automation Features Section (New Addition) */}
        <section className="relative w-full flex flex-col md:flex-row items-center gap-16 py-12">
          
          {/* Subtle White/Gray Background Glow for this section */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none -z-10 blur-3xl"></div>

          {/* Left Content - Automation Copy */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.2] mb-4">
                Revolucione sua operação <br />
                com automação & IA
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Deixe que a inteligência artificial cuide dos processos repetitivos. Otimize a captação de dados, qualifique leads automaticamente e foque no que realmente importa: fechar negócios.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group transition-colors hover:border-purple-500/30">
                  <Command className="text-purple-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Algoritmos Inteligentes</h3>
                  <p className="text-gray-500 text-sm">Integrações que aprendem e otimizam seus fluxos.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group transition-colors hover:border-purple-500/30">
                  <Database className="text-purple-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Coleta de Dados Otimizada</h3>
                  <p className="text-gray-500 text-sm">Centralize informações de múltiplos canais em tempo real.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="pt-6 max-w-md">
               <div className="flex gap-3 h-12">
                 <div className="relative flex-1 h-full">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      <Search size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Seu melhor e-mail" 
                      className="w-full h-full bg-[#0A0A0A] border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                 </div>
                 <button className="h-full bg-[#151515] hover:bg-[#202020] text-gray-200 text-sm font-medium px-6 rounded-lg border border-white/10 transition-colors whitespace-nowrap shadow-[0_0_10px_-3px_rgba(255,255,255,0.05)]">
                   Começar Agora
                 </button>
               </div>
               <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                 <div className="bg-gray-800 rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px] font-bold text-gray-400">i</div>
                 <span>Receba uma análise gratuita. <a href="#" className="underline text-gray-400 hover:text-white decoration-gray-600">Saiba mais</a></span>
               </div>
            </div>
          </div>

          {/* Right Content - Visual Graph Card */}
          <div className="flex-1 w-full flex justify-end">
            <div className="relative w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
               
               {/* Decorative Glow inside card */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

               {/* Card Header */}
               <div className="flex justify-between items-center mb-8 relative z-10">
                 <h3 className="text-white font-medium">Performance</h3>
                 <MoreHorizontal className="text-gray-600 w-5 h-5 cursor-pointer hover:text-gray-400" />
               </div>

               {/* Tabs */}
               <div className="flex items-center gap-2 mb-8 text-xs relative z-10">
                  <span className="text-gray-600 px-1 font-medium">Exibindo 12</span>
                  <div className="ml-auto flex bg-[#111] rounded-lg p-1 border border-white/5">
                    <button className="px-3 py-1 text-gray-500 hover:text-white transition-colors">Dia</button>
                    <button className="px-3 py-1 text-gray-500 hover:text-white transition-colors">Semana</button>
                    <button className="px-3 py-1 bg-[#1F1F1F] text-gray-200 rounded-md shadow-sm border border-white/5">Mês</button>
                  </div>
               </div>

               {/* Chart Area */}
               <div className="relative h-48 w-full mb-8 z-10">
                  {/* Y Axis */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-600 font-medium">
                    <span>50k</span>
                    <span>40k</span>
                    <span>30k</span>
                    <span>20k</span>
                    <span>00k</span>
                  </div>

                  {/* Chart Drawing */}
                  <div className="absolute left-8 right-0 top-2 bottom-2">
                     {/* Horizontal Lines */}
                     <div className="w-full h-full flex flex-col justify-between">
                        <div className="w-full h-px bg-white/5"></div>
                        <div className="w-full h-px bg-white/5"></div>
                        <div className="w-full h-px bg-white/5"></div>
                        <div className="w-full h-px bg-white/5"></div>
                        <div className="w-full h-px bg-white/5"></div>
                     </div>
                     
                     {/* The Line Visualization */}
                     <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                       {/* Line path up (solid beige/yellow) */}
                       <line x1="0" y1="100%" x2="60%" y2="20%" stroke="#E8C089" strokeWidth="1.5" />
                       
                       {/* Line path down (dotted purple) */}
                       <line x1="60%" y1="20%" x2="100%" y2="60%" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="4 4" />
                       
                       {/* Dot at peak */}
                       <circle cx="60%" cy="20%" r="4" fill="#0A0A0A" stroke="#E8C089" strokeWidth="2" />
                       <circle cx="60%" cy="20%" r="12" fill="#E8C089" opacity="0.1" />
                       
                       {/* Tooltip Bubble */}
                       <foreignObject x="48%" y="0" width="80" height="30">
                          <div className="bg-[#1A1A1A] border border-white/10 rounded-full px-3 py-1 text-center shadow-lg">
                            <span className="text-white text-[10px] font-bold block leading-tight">44,6k</span>
                          </div>
                       </foreignObject>
                     </svg>
                     
                     {/* Dotted vertical line helper */}
                     <div className="absolute left-[60%] top-[20%] bottom-0 w-px border-l border-dashed border-white/10"></div>
                  </div>
               </div>

               {/* Bottom Card - Atlas AI Widget */}
               <div className="bg-[#111] rounded-xl p-4 border border-white/5 relative z-10">
                 <div className="flex justify-between items-center mb-3">
                   <span className="text-white text-xs font-medium">Atlas AI - Automação</span>
                 </div>
                 <div className="h-1.5 w-full bg-[#1A1A1A] rounded-full overflow-hidden mb-2">
                   {/* Gradient Progress Bar */}
                   <div className="h-full w-[65%] bg-gradient-to-r from-orange-200 via-purple-300 to-purple-500 rounded-full"></div>
                 </div>
                 <p className="text-[10px] text-gray-500">85% da capacidade operacional otimizada.</p>
               </div>

            </div>
          </div>
        </section>

      </main>

      {/* Simple Footer */}
      <footer className="text-center pb-12 pt-4 relative z-10">
        <p className="text-xs text-gray-500 font-medium">A escolha nº 1 de empresas que querem crescer.</p>
      </footer>
    </div>
  );
};

export default App;