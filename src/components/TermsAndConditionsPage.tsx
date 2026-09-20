import React, { useEffect } from 'react';
import { ScrollText, BookOpen, AlertTriangle, Copyright, Link2, Scale, Mail, FileText } from 'lucide-react';

interface TermsPageProps {
  onNavigateHome?: () => void;
}

export const TermsAndConditionsPage: React.FC<TermsPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Terms and Conditions — Fashion Graviti';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Fashion Graviti terms and conditions: usage rules, intellectual property, editorial standards, and legal disclaimers for our fashion publication.'
      );
    }
  }, []);

  const sections = [
    {
      icon: <BookOpen className="w-5 h-5 text-gold" />,
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using fashiongraviti.vercel.app ("the Site"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all of these Terms, you must not use or access this Site.',
        'Fashion Graviti ("we", "our", or "us") reserves the right to modify these Terms at any time. Continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.',
        'These Terms apply to all visitors, readers, contributors, and others who access or use the Site.',
      ],
    },
    {
      icon: <Copyright className="w-5 h-5 text-gold" />,
      title: '2. Intellectual Property and Copyright',
      content: [
        'All original editorial content published on Fashion Graviti — including articles, headlines, subtitles, pull quotes, author biographies, editorial commentary, and layout design — is protected by copyright and is the exclusive intellectual property of Fashion Graviti Publishing Group.',
        'You may not reproduce, distribute, modify, transmit, display, publish, or create derivative works from any content on this Site without explicit prior written permission from Fashion Graviti.',
        '• Linking: You may link to our articles from other websites, provided you do not frame our content or imply editorial endorsement without permission.',
        '• Attribution: If you quote short excerpts (under 50 words) for editorial commentary or review, proper attribution to Fashion Graviti with a direct URL link is required.',
        'Photography displayed on this Site may be sourced from licensed third-party providers (including Unsplash). These images remain the intellectual property of their respective photographers and licensors.',
      ],
    },
    {
      icon: <ScrollText className="w-5 h-5 text-gold" />,
      title: '3. Use of the Site',
      content: [
        'You agree to use Fashion Graviti solely for lawful, personal, and non-commercial purposes. You must not:',
        '• Use the Site in any way that violates any applicable local, national, or international law or regulation.',
        '• Scrape, crawl, or systematically copy editorial content using automated tools without prior written consent.',
        '• Attempt to gain unauthorized access to our server infrastructure, backend systems, or editorial databases.',
        '• Transmit spam, unsolicited communications, or harmful code via any contact channels on this Site.',
        '• Impersonate Fashion Graviti, its editors, or authors in any public or private communication.',
        'Violation of these terms may result in your access being blocked and appropriate legal action being taken.',
      ],
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-gold" />,
      title: '4. Disclaimers and Limitation of Liability',
      content: [
        'Fashion Graviti is an independent digital editorial publication. The content we publish is provided for informational and editorial purposes only.',
        '• Editorial Accuracy: While we strive for accuracy in all reporting, editorial commentary and trend analysis represent the professional opinions of our editors and critics. Fashion Graviti does not warrant that all information is error-free, complete, or current.',
        '• No Commercial Advice: Nothing on this Site constitutes professional purchasing advice, investment advice, or endorsement of any brand, product, or service.',
        '• No Warranty: This Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.',
        '• Limitation of Liability: To the maximum extent permitted by applicable law, Fashion Graviti shall not be liable for any indirect, incidental, special, or consequential damages arising from your use or inability to use this Site.',
      ],
    },
    {
      icon: <Link2 className="w-5 h-5 text-gold" />,
      title: '5. Third-Party Links and External Content',
      content: [
        'Our editorial content may contain links to third-party websites, brands, designer platforms, or external publications. These links are provided for informational context only.',
        'Fashion Graviti has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites. Linking to a website does not constitute an editorial endorsement or commercial partnership.',
        'We encourage you to review the terms and privacy policies of any third-party site you visit via links on this platform.',
      ],
    },
    {
      icon: <FileText className="w-5 h-5 text-gold" />,
      title: '6. Submitted Content and Editorial Pitches',
      content: [
        'When you submit editorial pitches, press releases, lookbooks, or correspondence to info.fashiongraviti@gmail.com, you grant Fashion Graviti a non-exclusive, royalty-free license to review, reference, and respond to your submission.',
        'Submissions do not guarantee publication. Fashion Graviti retains full editorial discretion over all published content.',
        'You must not submit content that is defamatory, plagiarized, misleading, or violates any applicable law or third-party intellectual property rights.',
        'By submitting content, you confirm that you hold all necessary rights to the material you provide and that your submission does not infringe on any third-party rights.',
      ],
    },
    {
      icon: <Scale className="w-5 h-5 text-gold" />,
      title: '7. Governing Law',
      content: [
        'These Terms and Conditions shall be governed by and construed in accordance with applicable law. Any dispute arising from your use of this Site that cannot be resolved through good-faith negotiation will be subject to the exclusive jurisdiction of applicable courts.',
        'Fashion Graviti operates as a globally accessible digital publication. Readers in different jurisdictions are responsible for ensuring their use of this Site complies with local regulations.',
      ],
    },
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      title: '8. Contact and Corrections',
      content: [
        'If you believe any content on Fashion Graviti infringes your intellectual property, contains factual errors, or violates these Terms, please contact us immediately:',
        '• Email: info.fashiongraviti@gmail.com',
        '• Subject Line Format: "[LEGAL]" or "[CORRECTION]" followed by the article title and specific concern.',
        '• Response Time: We aim to review and respond to all legal and correction requests within 5 business days.',
        'Fashion Graviti is committed to editorial transparency, factual accuracy, and responsible journalism.',
      ],
    },
  ];

  return (
    <div className="w-full bg-noir text-white animate-fadeIn">
      {/* Hero Header */}
      <section className="relative border-b-2 border-white/20 bg-noir-pure py-16 md:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black border border-gold/40 text-gold text-xs font-mono uppercase tracking-widest font-extrabold mb-6">
            <ScrollText className="w-4 h-4 text-gold" />
            <span>LEGAL AND TERMS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white uppercase leading-[1.1]">
            Terms and Conditions
          </h1>

          <p className="mt-4 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Effective Date: September 20, 2026 — Last Updated: September 20, 2026
          </p>

          <p className="mt-6 text-base sm:text-lg font-sans text-zinc-200 max-w-3xl leading-relaxed font-medium">
            These Terms and Conditions govern your access to and use of the Fashion Graviti editorial platform. Please read them carefully before using the Site. By continuing to use Fashion Graviti, you confirm that you accept and agree to be bound by these Terms.
          </p>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="border-b border-white/10 pb-12 last:border-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-black border border-white/20 flex-shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase tracking-tight">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3">
                {section.content.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base font-sans text-zinc-300 leading-relaxed font-normal">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 pb-16">
        <div className="p-8 bg-noir-card border-2 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono text-gold uppercase tracking-widest font-bold mb-1">
              LEGAL INQUIRIES
            </p>
            <p className="text-sm sm:text-base font-sans text-zinc-300 font-medium">
              For legal matters, contact us at{' '}
              <a href="mailto:info.fashiongraviti@gmail.com" className="text-gold underline hover:text-white transition-colors">
                info.fashiongraviti@gmail.com
              </a>
            </p>
          </div>
          {onNavigateHome && (
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 border-2 border-white/30 text-white hover:border-gold hover:text-gold font-mono text-xs uppercase tracking-widest font-black transition-all cursor-pointer flex-shrink-0"
            >
              Back to Front Page
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
