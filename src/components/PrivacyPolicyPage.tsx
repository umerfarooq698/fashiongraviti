import React, { useEffect } from 'react';
import { Shield, Eye, Database, Bell, Link2, Mail, Globe, FileText } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigateHome?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Privacy Policy — Fashion Graviti';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Fashion Graviti privacy policy: how we collect, use, and protect your personal data in compliance with GDPR and Google guidelines.'
      );
    }
  }, []);

  const sections = [
    {
      icon: <Database className="w-5 h-5 text-gold" />,
      title: '1. Information We Collect',
      content: [
        'Fashion Graviti collects only the minimum information necessary to operate and improve our editorial platform. The types of information we may collect include:',
        '• Usage Data: When you visit our site, we automatically collect technical information including your IP address, browser type, operating system, pages visited, time spent on pages, and referring URLs. This data is collected via server logs and analytics tools.',
        '• Cookies and Tracking Technologies: We use first-party cookies to remember your preferences (such as bookmarked articles and display settings). We also use Google Analytics, which may set third-party cookies to measure site traffic.',
        '• Voluntarily Submitted Information: If you contact us via email at info.fashiongraviti@gmail.com, we retain the correspondence including your email address and any content you choose to share.',
        'We do not collect names, payment information, or sensitive personal data through our website.',
      ],
    },
    {
      icon: <Eye className="w-5 h-5 text-gold" />,
      title: '2. How We Use Your Information',
      content: [
        'We use the information we collect for the following legitimate purposes:',
        '• To operate and maintain the Fashion Graviti editorial platform.',
        '• To analyze site performance and improve the quality of our editorial content.',
        '• To understand how readers navigate and use our publication.',
        '• To respond to editorial inquiries, press submissions, and correspondence sent to our newsroom.',
        '• To detect, prevent, and address technical issues or potential abuse.',
        'We do not sell, rent, or trade your personal information to any third parties for marketing purposes.',
      ],
    },
    {
      icon: <Link2 className="w-5 h-5 text-gold" />,
      title: '3. Cookies and Tracking',
      content: [
        'Fashion Graviti uses cookies to provide a better reading experience. You can control cookies through your browser settings at any time.',
        '• Essential Cookies: Necessary for core site functionality such as saving your article bookmarks and display preferences. These cannot be disabled without affecting site performance.',
        '• Analytics Cookies: We use Google Analytics to measure aggregate traffic patterns. These cookies help us understand which articles are most read and how readers discover our content. Google Analytics data is anonymized and not linked to individual identities.',
        'You may opt out of Google Analytics tracking by installing the Google Analytics Opt-Out Browser Add-on available at tools.google.com/dlpage/gaoptout.',
      ],
    },
    {
      icon: <Globe className="w-5 h-5 text-gold" />,
      title: '4. Third-Party Services',
      content: [
        'Our platform integrates with the following third-party services, each governed by their own privacy policies:',
        '• Google Analytics (Google LLC): Traffic measurement and audience analytics.',
        '• Unsplash: Editorial photography. Images are served from Unsplash CDN under their license.',
        '• Vercel: Hosting and content delivery network. Vercel may collect standard server logs.',
        'We encourage you to review the privacy policies of these services directly. Fashion Graviti is not responsible for the data practices of third-party providers.',
      ],
    },
    {
      icon: <Shield className="w-5 h-5 text-gold" />,
      title: '5. Data Security',
      content: [
        'We take reasonable technical and organizational measures to protect the information we hold against unauthorized access, alteration, disclosure, or destruction.',
        'Our site is served over HTTPS (SSL/TLS encryption) to protect data in transit. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute data security.',
        'We retain usage data only as long as necessary for the purposes described in this policy and as required by applicable law.',
      ],
    },
    {
      icon: <Bell className="w-5 h-5 text-gold" />,
      title: '6. Your Rights (GDPR and Data Privacy)',
      content: [
        'Depending on your location and applicable law (including GDPR for European residents), you may have the following rights regarding your personal data:',
        '• Right of Access: Request a copy of the personal data we hold about you.',
        '• Right to Rectification: Request correction of inaccurate data.',
        '• Right to Erasure: Request deletion of your personal data under certain conditions.',
        '• Right to Restriction: Request that we limit how we process your data.',
        '• Right to Object: Object to our processing of your personal data.',
        'To exercise any of these rights, please contact us at info.fashiongraviti@gmail.com. We will respond within 30 days.',
      ],
    },
    {
      icon: <FileText className="w-5 h-5 text-gold" />,
      title: '7. Changes to This Policy',
      content: [
        'Fashion Graviti may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or platform features.',
        'We will post the revised policy on this page with an updated effective date. Your continued use of Fashion Graviti after any changes constitutes your acceptance of the updated policy.',
        'We encourage you to review this page periodically to stay informed about how we protect your information.',
      ],
    },
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      title: '8. Contact Us',
      content: [
        'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact the Fashion Graviti editorial team:',
        '• Email: info.fashiongraviti@gmail.com',
        '• Response Time: We aim to respond to all privacy-related inquiries within 2 to 5 business days.',
      ],
    },
  ];

  return (
    <div className="w-full bg-noir text-white animate-fadeIn">
      {/* Hero Header */}
      <section className="relative border-b-2 border-white/20 bg-noir-pure py-16 md:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black border border-gold/40 text-gold text-xs font-mono uppercase tracking-widest font-extrabold mb-6">
            <Shield className="w-4 h-4 text-gold" />
            <span>LEGAL AND PRIVACY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-black tracking-tight text-white uppercase leading-[1.1]">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm font-mono text-zinc-400 uppercase tracking-wider">
            Effective Date: September 20, 2026 — Last Updated: September 20, 2026
          </p>

          <p className="mt-6 text-sm font-mono text-zinc-300 max-w-2xl leading-relaxed">
            Fashion Graviti ("we", "our", or "us") operates the fashion editorial publication at fashiongraviti.vercel.app. This Privacy Policy explains what data we collect, why we collect it, and how we protect it. We are committed to full transparency and your right to privacy.
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="border-b border-white/10 pb-12 last:border-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-black border border-white/20 flex-shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-mono font-black text-white uppercase tracking-wide">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3">
                {section.content.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm font-mono text-zinc-300 leading-relaxed">
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
              QUESTIONS ABOUT THIS POLICY?
            </p>
            <p className="text-sm font-mono text-zinc-300">
              Contact our editorial team at{' '}
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
