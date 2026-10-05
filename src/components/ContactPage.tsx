import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, Feather, ShieldAlert, Sparkles, MessageSquare, Clock } from 'lucide-react';

interface ContactPageProps {
  onNavigateHome?: () => void;
  onNavigateCategory?: (categoryId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Contact Fashion Graviti — Editorial Desks and Reader Inquiries';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact Fashion Graviti for editorial pitches, seasonal color analysis inquiries, fact-checking, and reader questions.'
      );
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info.fashiongraviti@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const contactSections = [
    {
      icon: <Feather className="w-5 h-5 text-gold" />,
      title: 'Editorial Inquiries And Story Pitches',
      subjectLine: 'Editorial Pitch',
      description:
        'Our editorial desk is always open to well-researched pitches, styling perspectives, and trend critiques. If you are an independent fashion writer, stylist, or textile researcher with a story idea, we want to hear from you.',
      details:
        'When sending a pitch, please include a brief summary of your topic, why it matters to our readers, and links to any previously published work. Please write "Editorial Pitch" in your email subject line so it routes straight to our writing team. We review all pitches carefully and aim to respond to relevant proposals within two to three business days.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-gold" />,
      title: 'Fact Checking And Corrections',
      subjectLine: 'Correction Request',
      description:
        'Accuracy and transparency are foundational to everything we publish. If you spot a factual error in our seasonal color analysis data, an incorrect photo attribution, or an outdated styling recommendation, please bring it to our attention immediately.',
      details:
        'Please put "Correction Request" in your email subject line along with the article title and URL. Include the specific detail that needs review so our editorial staff can cross-check references and make the necessary updates swiftly.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      title: 'Press, Media And Brand Collaborations',
      subjectLine: 'Press Inquiry',
      description:
        'We regularly review collections from clothing labels, textile mills, and independent design ateliers whose values align with our focus on craftsmanship and enduring personal style.',
      details:
        'If you are a public relations representative or brand founder looking to share lookbooks, runway invitations, or interview opportunities with our critics, please email your media materials with the subject line "Press Inquiry".',
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-gold" />,
      title: 'Reader Questions And General Inquiries',
      subjectLine: 'Reader Inquiry',
      description:
        'We welcome questions about styling dilemmas, wardrobe building, and understanding seasonal palettes. Every message sent to our inbox is read and handled personally by our team without automated chatbots or generic canned replies.',
      details:
        'Our desk reviews reader correspondence Monday through Friday between 9:00 AM and 6:00 PM CET. During major fashion weeks, email volume can increase, so please allow 24 to 48 hours for a direct response.',
    },
  ];

  return (
    <div className="w-full bg-noir text-white animate-fadeIn">
      {/* Header Section */}
      <section className="relative border-b-2 border-white/20 bg-noir-pure py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-gold/40 text-gold text-[11px] sm:text-xs font-mono uppercase tracking-widest font-extrabold mb-4">
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>EDITORIAL CONTACT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white uppercase leading-tight">
            Contact Fashion Graviti
          </h1>

          <p className="mt-4 text-base sm:text-lg font-sans text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            At Fashion Graviti, we value direct, thoughtful communication with our readers, independent writers, and fashion industry professionals. Whether you have feedback on our color analysis reports, need clarification on a wardrobe guide, or want to pitch an original story, here is how you can reach our editorial team directly.
          </p>

          {/* Central Direct Email Box */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 bg-black border-2 border-gold/50 shadow-2xl">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-bold block">
                Official Email Address
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
                title="Copy Email"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gold" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href="mailto:info.fashiongraviti@gmail.com"
                className="px-4 py-2 bg-white text-black hover:bg-gold hover:text-black text-xs font-mono uppercase tracking-wider font-black transition-colors inline-flex items-center gap-2 no-underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Write To Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content-Driven Editorial Desks */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        <div className="space-y-12">
          {contactSections.map((section, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-8 bg-noir-card border-2 border-white/15 hover:border-gold/60 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-black border border-white/20">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase tracking-tight">
                  {section.title}
                </h2>
              </div>

              <p className="text-sm sm:text-base font-sans text-zinc-200 leading-relaxed mb-4">
                {section.description}
              </p>

              <p className="text-sm sm:text-base font-sans text-zinc-300 leading-relaxed mb-6">
                {section.details}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400">Subject Line:</span>
                  <span className="px-2 py-0.5 bg-black border border-gold/40 text-gold font-bold">
                    [{section.subjectLine}]
                  </span>
                </div>
                <a
                  href={`mailto:info.fashiongraviti@gmail.com?subject=${encodeURIComponent(section.subjectLine)}`}
                  className="text-gold hover:text-white underline font-bold transition-colors"
                >
                  info.fashiongraviti@gmail.com
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Operating Hours Note */}
        <div className="mt-12 p-6 bg-black border border-white/20 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-gold font-bold mb-2">
            <Clock className="w-4 h-4 text-gold" />
            <span>DESK HOURS</span>
          </div>
          <p className="text-xs sm:text-sm font-sans text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Our editorial desk reviews correspondence Monday through Friday from 9:00 AM to 6:00 PM CET. We do not use automated replies; every message is read directly by our team.
          </p>
          {onNavigateHome && (
            <div className="mt-6">
              <button
                onClick={onNavigateHome}
                className="px-6 py-2.5 border border-white/30 text-white hover:border-gold hover:text-gold font-mono text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
              >
                Back To Homepage
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
