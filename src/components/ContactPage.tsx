import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Building2, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onNavigateHome?: () => void;
  onNavigateCategory?: (categoryId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('Editorial Pitch & Features');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitted(true);

    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8f121d', '#c59d54', '#ffffff'],
    });

    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 4000);
  };

  const contactDesks = [
    {
      title: 'Editorial & Story Pitches',
      email: 'editorial@fashiongraviti.com',
      description: 'Runway pitches, essays, designer monographs, and photo submissions.',
    },
    {
      title: 'Press & Media Relations',
      email: 'press@fashiongraviti.com',
      description: 'Lookbooks, accreditation inquiries, and official house press releases.',
    },
    {
      title: 'Luxury Partnerships',
      email: 'partnerships@fashiongraviti.com',
      description: 'Bespoke editorial campaigns, brand sponsorships, and curated events.',
    },
    {
      title: 'General Inquiries & Letters',
      email: 'letters@fashiongraviti.com',
      description: 'Reader feedback, corrections, and inquiries to the editor-in-chief.',
    },
  ];

  const bureaus = [
    {
      city: 'PARIS',
      address: 'Place Vendôme, 75001 Paris, France',
      focus: 'Haute Couture & Heritage Houses',
    },
    {
      city: 'MILAN',
      address: 'Via Montenapoleone, 20121 Milano, Italy',
      focus: 'Leathercraft, Tailoring & Luxury Goods',
    },
    {
      city: 'NEW YORK',
      address: 'Madison Avenue, New York, NY 10022, USA',
      focus: 'Contemporary Luxury & Celebrity Styling',
    },
    {
      city: 'TOKYO',
      address: 'Shibuya-ku, Tokyo 150-0001, Japan',
      focus: 'Avant-Garde & Textile Innovation',
    },
  ];

  return (
    <div className="w-full bg-noir text-white animate-fadeIn">
      {/* Hero Header */}
      <section className="relative border-b-2 border-white/20 bg-noir-pure py-16 md:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black border border-gold/40 text-gold text-xs font-mono uppercase tracking-widest font-extrabold mb-6">
            <Mail className="w-4 h-4 text-gold" />
            <span>CONTACT FASHION GRAVITI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white uppercase leading-[1.1]">
            Contact The Newsroom & Atelier
          </h1>

          <p className="mt-4 text-base sm:text-lg font-sans text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Have an editorial tip, collection pitch, press release, or partnership inquiry? Reach out directly to our dedicated desks.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Form + Desks */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inquiries Form (7 cols) */}
          <div className="lg:col-span-7 bg-noir-card border-2 border-white/20 p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-gold font-bold mb-2">
              <MessageSquare className="w-4 h-4 text-gold" />
              <span>TRANSMIT DISPATCH</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white uppercase mb-6">
              Send a Direct Message
            </h2>

            {isSubmitted ? (
              <div className="py-12 px-6 bg-black border-2 border-gold/40 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-white uppercase">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm font-sans text-zinc-300 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Our editorial desk will review your inquiry and respond within 24 to 48 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-black hover:bg-gold transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-noir border border-white/20 p-3 text-white focus:outline-none focus:border-gold text-sm font-mono placeholder-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@atelier.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-noir border border-white/20 p-3 text-white focus:outline-none focus:border-gold text-sm font-mono placeholder-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                    Target Department / Desk *
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-noir border border-white/20 p-3 text-white focus:outline-none focus:border-gold text-xs font-mono uppercase cursor-pointer"
                  >
                    <option value="Editorial Pitch & Features">Editorial Pitch & Features</option>
                    <option value="Press & Media Relations">Press & Media Relations</option>
                    <option value="Luxury Partnerships & Advertising">Luxury Partnerships & Advertising</option>
                    <option value="Corrections & Letters to Editor">Corrections & Letters to Editor</option>
                    <option value="General Inquiries">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Haute Couture AW26 Lookbook Submission"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-noir border border-white/20 p-3 text-white focus:outline-none focus:border-gold text-sm font-mono placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                    Detailed Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide details of your pitch, press inquiry, or collaboration proposal..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-noir border border-white/20 p-3 text-white focus:outline-none focus:border-gold text-sm font-sans placeholder-zinc-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-white text-black hover:bg-gold hover:text-black font-mono text-xs uppercase tracking-widest font-black transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-lg active:scale-98"
                >
                  <span>Submit Editorial Dispatch</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Desks & Bureau Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-noir-card border-2 border-white/20 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-gold font-bold mb-4">
                <Mail className="w-4 h-4 text-gold" />
                <span>DIRECT EDITORIAL DESKS</span>
              </div>

              <div className="space-y-4 divide-y divide-white/10">
                {contactDesks.map((desk, idx) => (
                  <div key={idx} className={idx > 0 ? 'pt-4' : ''}>
                    <h4 className="text-sm font-serif font-bold text-white uppercase">
                      {desk.title}
                    </h4>
                    <a
                      href={`mailto:${desk.email}`}
                      className="text-xs font-mono text-gold hover:text-white font-bold transition-colors block mt-0.5"
                    >
                      {desk.email}
                    </a>
                    <p className="text-xs text-zinc-400 font-sans mt-1">
                      {desk.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Bureaus */}
            <div className="bg-noir-card border-2 border-white/20 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-gold font-bold mb-4">
                <Building2 className="w-4 h-4 text-gold" />
                <span>GLOBAL EDITORIAL BUREAUS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                {bureaus.map((b, idx) => (
                  <div key={idx} className="p-3 bg-black border border-white/10">
                    <span className="text-gold font-black block">{b.city} BUREAU</span>
                    <p className="text-zinc-300 mt-1 font-sans text-[11px]">{b.address}</p>
                    <span className="text-[10px] text-zinc-500 block mt-1 uppercase">{b.focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines & FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-12 border-t border-white/10">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-gold uppercase font-bold mb-1">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span>SUBMISSION GUIDELINES</span>
          </div>
          <h3 className="text-2xl font-serif font-bold uppercase text-white">
            Pitching to Fashion Graviti
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="p-5 bg-noir-card border border-white/15">
            <span className="text-gold font-black uppercase block mb-1">1. HIGH-RES ASSETS</span>
            <p className="text-zinc-300 font-sans leading-relaxed">
              Ensure all runway imagery and atelier photography is minimum 300 DPI with full styling and photographer credits included.
            </p>
          </div>
          <div className="p-5 bg-noir-card border border-white/15">
            <span className="text-gold font-black uppercase block mb-1">2. EMBARGO TIMELINES</span>
            <p className="text-zinc-300 font-sans leading-relaxed">
              For exclusive collection unveils, specify exact embargo date and time in Paris time (CET) in your subject line.
            </p>
          </div>
          <div className="p-5 bg-noir-card border border-white/15">
            <span className="text-gold font-black uppercase block mb-1">3. RESPONSE WINDOW</span>
            <p className="text-zinc-300 font-sans leading-relaxed">
              Due to high volume during Fashion Week seasons, please allow 48 hours before sending a follow-up inquiry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
