import React, { useState, useEffect } from 'react';
import { Mail, Building2, ShieldAlert, Clock, Copy, Check, Sparkles, Feather, Camera, FileText, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigateHome?: () => void;
  onNavigateCategory?: (categoryId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Contact Fashion Graviti — Newsroom and Editorial Desks';
    
    // Set 140-character Google-compliant meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact the Fashion Graviti newsroom for runway pitches, collection lookbooks, press relations, fact checking, and editorial collaborations.'
      );
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info.fashiongraviti@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const editorialDesks = [
    {
      icon: <Feather className="w-5 h-5 text-gold" />,
      title: 'Editorial Pitches and Essays',
      email: 'info.fashiongraviti@gmail.com',
      description: 'Proposals for runway critiques, designer monographs, fashion history retrospectives, and cultural style essays.',
      guidelines: 'Include a 200-word synopsis, proposed word count (1000–1200 words), and samples of previous sartorial writing.',
    },
    {
      icon: <Camera className="w-5 h-5 text-gold" />,
      title: 'Press Releases and Lookbooks',
      email: 'info.fashiongraviti@gmail.com',
      description: 'Official luxury atelier announcements, seasonal lookbooks, campaign previews, and Paris/Milan fashion week invitations.',
      guidelines: 'Attach high-resolution imagery links (300 DPI minimum), complete garment credits, and embargo dates if applicable.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-gold" />,
      title: 'Corrections and Fact-Checking',
      email: 'info.fashiongraviti@gmail.com',
      description: 'Requests for factual corrections, material composition updates, designer provenance verifications, and historical date clarifications.',
      guidelines: 'Include the specific article title, URL, exact line of text, and primary reference documentation.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      title: 'Luxury Partnerships and Projects',
      email: 'info.fashiongraviti@gmail.com',
      description: 'Inquiries regarding bespoke editorial curations, exhibition partnerships, and institutional cultural collaborations.',
      guidelines: 'All commercial collaborations remain strictly delineated from our independent runway critique.',
    },
    {
      icon: <FileText className="w-5 h-5 text-gold" />,
      title: 'Letters to the Editor-in-Chief',
      email: 'info.fashiongraviti@gmail.com',
      description: 'Direct commentary, critical responses to published essays, and general correspondence with our editorial board.',
      guidelines: 'Letters may be selected for publication in upcoming seasonal digital issues with reader consent.',
    },
  ];

  const bureaus = [
    {
      city: 'PARIS',
      address: 'Place Vendôme, 75001 Paris, France',
      hours: 'Mon - Fri: 09:00 - 18:00 CET',
      focus: 'Haute Couture and Heritage Luxury Houses',
    },
    {
      city: 'MILAN',
      address: 'Via Montenapoleone, 20121 Milano, Italy',
      hours: 'Mon - Fri: 09:00 - 18:00 CET',
      focus: 'Menswear, Cashmere, and Tailoring Ateliers',
    },
    {
      city: 'NEW YORK',
      address: 'Madison Avenue, New York, NY 10022, USA',
      hours: 'Mon - Fri: 09:00 - 17:30 EST',
      focus: 'Contemporary Luxury and Celebrity Styling',
    },
    {
      city: 'TOKYO',
      address: 'Shibuya-ku, Tokyo 150-0001, Japan',
      hours: 'Mon - Fri: 09:30 - 18:30 JST',
      focus: 'Avant-Garde Design and Textile Engineering',
    },
  ];

  const submissionSteps = [
    {
      step: '01',
      title: 'Subject Line Precision',
      detail: 'Label your email clearly (e.g., "[Pitch] Modern Tailoring in Paris AW26" or "[Correction] Article Title"). This ensures immediate routing to the relevant editor.',
    },
    {
      step: '02',
      title: 'Editorial Review',
      detail: 'Our senior editors evaluate submissions based on critical depth, originality of voice, and strict alignment with our luxury editorial standards.',
    },
    {
      step: '03',
      title: 'Response and Follow-Up',
      detail: 'You will receive a formal response within 24 to 48 business hours. During major Fashion Week seasons, please allow up to 72 hours for collection pitches.',
    },
  ];

  return (
    <div className="w-full bg-noir text-white animate-fadeIn">
      {/* Hero Header Section */}
      <section className="relative border-b-2 border-white/20 bg-noir-pure py-16 md:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black border border-gold/40 text-gold text-xs font-mono uppercase tracking-widest font-extrabold mb-6">
            <Mail className="w-4 h-4 text-gold" />
            <span>CONTACT FASHION GRAVITI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white uppercase leading-[1.1]">
            Connect with The Newsroom and Atelier
          </h1>

          <p className="mt-4 text-base sm:text-lg font-sans text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Have an editorial tip, collection pitch, press release, or fact-checking inquiry? Reach out directly to our central newsroom desk.
          </p>

          {/* Central Email Action Card */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 p-5 bg-black border-2 border-gold/50 shadow-2xl">
            <div className="text-left">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-bold block">
                Official Central Newsroom Desk
              </span>
              <a
                href="mailto:info.fashiongraviti@gmail.com"
                className="font-mono text-lg sm:text-xl text-gold hover:text-white font-bold transition-colors underline"
              >
                info.fashiongraviti@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 bg-noir-card border border-white/20 hover:border-gold text-xs font-mono uppercase tracking-wider text-white hover:text-gold transition-colors inline-flex items-center gap-2 cursor-pointer"
                title="Copy Email to Clipboard"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gold" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href="mailto:info.fashiongraviti@gmail.com"
                className="px-4 py-2 bg-white text-black hover:bg-gold hover:text-black text-xs font-mono uppercase tracking-wider font-black transition-colors inline-flex items-center gap-2 no-underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Desks Directory */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            NEWSROOM DIRECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            Dedicated Department Desks
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wider">
            Direct your correspondence to the appropriate editorial desk for rapid review
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {editorialDesks.map((desk, idx) => (
            <div
              key={idx}
              className="p-6 bg-noir-card border-2 border-white/15 hover:border-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-black border border-white/20 w-fit mb-4">
                  {desk.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-white uppercase mb-1.5">
                  {desk.title}
                </h3>
                <a
                  href={`mailto:${desk.email}`}
                  className="text-xs font-mono text-gold hover:text-white font-bold transition-colors underline block mb-3"
                >
                  {desk.email}
                </a>
                <p className="text-xs sm:text-sm font-sans text-zinc-300 font-medium leading-relaxed mb-4">
                  {desk.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-400 leading-relaxed">
                <span className="text-gold uppercase font-bold block mb-1">Submission Notes:</span>
                {desk.guidelines}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Bureaux and Operating Hours */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            GLOBAL LOCATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            Editorial Bureaux and Office Desks
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wider">
            Our permanent presence across international luxury fashion capitals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bureaus.map((bureau, idx) => (
            <div key={idx} className="p-6 bg-noir-card border border-white/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gold font-mono text-xs font-black uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4 text-gold" />
                  <span>{bureau.city} BUREAU</span>
                </div>
                <p className="text-xs font-mono text-white mb-2">
                  {bureau.address}
                </p>
                <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-3">
                  {bureau.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{bureau.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Protocol & Response SLA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            EDITORIAL PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            How We Handle Incoming Dispatches
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wider">
            Transparent submission evaluation and fact-checking protocols
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {submissionSteps.map((step, idx) => (
            <div key={idx} className="p-6 bg-noir-card border-2 border-white/15 relative">
              <span className="text-3xl font-serif font-black text-gold/30 block mb-2">
                {step.step}
              </span>
              <h3 className="text-base font-serif font-bold text-white uppercase mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-zinc-300 leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="p-8 sm:p-12 bg-noir-card border-2 border-white/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-gold font-bold mb-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>COMMUNICATION COMMITMENT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase">
              Rigorous and Accessible Fashion Journalism
            </h3>
            <p className="text-sm font-sans text-zinc-300 mt-2 leading-relaxed font-medium">
              We value thoughtful dialogue with designers, readers, and critics worldwide. All communications are handled with strict journalistic confidentiality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href="mailto:info.fashiongraviti@gmail.com"
              className="px-6 py-3 bg-white text-black hover:bg-gold hover:text-black font-mono text-xs uppercase tracking-widest font-black transition-all text-center no-underline shadow-lg"
            >
              Email Central Desk
            </a>
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="px-6 py-3 border-2 border-white/30 text-white hover:border-gold hover:text-gold font-mono text-xs uppercase tracking-widest font-black transition-all text-center cursor-pointer"
              >
                Front Page
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
