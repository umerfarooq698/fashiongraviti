import React, { useEffect } from 'react';

interface ContactPageProps {
  onNavigateHome?: () => void;
  onNavigateCategory?: (categoryId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Contact Fashion Graviti — Editorial Desk and Reader Inquiries';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact Fashion Graviti for editorial pitches, seasonal color analysis inquiries, fact-checking, and reader questions.'
      );
    }
  }, []);

  return (
    <div className="w-full bg-noir text-white animate-fadeIn min-h-screen">
      {/* Editorial Page Container */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20 font-sans">
        
        {/* Page Title */}
        <header className="border-b border-white/20 pb-8 mb-10">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-3">
            EDITORIAL DESK
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white uppercase leading-tight mb-6">
            Contact Fashion Graviti
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            At Fashion Graviti, we value direct, thoughtful communication with our readers, independent writers, and fashion industry professionals. Whether you have feedback on our color analysis reports, need clarification on a wardrobe guide, or want to pitch an original story, here is how you can reach our editorial team directly.
          </p>
        </header>

        {/* Content Body - Pure Editorial Article Style */}
        <div className="space-y-12 text-zinc-200 leading-relaxed">
          
          {/* Section 1 */}
          <section className="border-b border-white/10 pb-10">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase tracking-tight mb-4">
              Editorial Inquiries And Story Pitches
            </h2>
            <p className="text-base text-zinc-300 mb-4 leading-relaxed">
              Our editorial desk is always open to well-researched pitches, styling perspectives, and trend critiques. If you are an independent fashion writer, stylist, or textile researcher with a story idea, we want to hear from you.
            </p>
            <p className="text-base text-zinc-300 mb-4 leading-relaxed">
              When sending a pitch, please include a brief summary of your topic, why it matters to our readers, and links to any previously published work. Please write <strong className="text-white font-semibold">"Editorial Pitch"</strong> in your email subject line so it routes straight to our writing team. We review all pitches carefully and aim to respond to relevant proposals within two to three business days.
            </p>
            <p className="text-sm font-mono text-gold pt-2">
              Email:{' '}
              <a
                href="mailto:info.fashiongraviti@gmail.com?subject=Editorial%20Pitch"
                className="underline hover:text-white transition-colors"
              >
                info.fashiongraviti@gmail.com
              </a>
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-b border-white/10 pb-10">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase tracking-tight mb-4">
              Fact Checking And Corrections
            </h2>
            <p className="text-base text-zinc-300 mb-4 leading-relaxed">
              Accuracy and transparency are foundational to everything we publish. If you spot a factual error in our seasonal color analysis data, an incorrect photo attribution, or an outdated styling recommendation, please bring it to our attention immediately.
            </p>
            <p className="text-base text-zinc-300 mb-4 leading-relaxed">
              Please put <strong className="text-white font-semibold">"Correction Request"</strong> in your email subject line along with the article title and URL. Include the specific detail that needs review so our editorial staff can cross-check references and make the necessary updates swiftly.
            </p>
            <p className="text-sm font-mono text-gold pt-2">
              Email:{' '}
              <a
                href="mailto:info.fashiongraviti@gmail.com?subject=Correction%20Request"
                className="underline hover:text-white transition-colors"
              >
                info.fashiongraviti@gmail.com
              </a>
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-b border-white/10 pb-10">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase tracking-tight mb-4">
              Press, Media And Brand Collaborations
            </h2>
            <p className="text-base text-zinc-300 mb-4 leading-relaxed">
              We regularly review collections from clothing labels, textile mills, and independent design ateliers whose values align with our focus on craftsmanship and enduring personal style.
            </p>
            <p className="text-base text-zinc-300 mb-4 leading-relaxed">
              If you are a public relations representative or brand founder looking to share lookbooks, runway invitations, or interview opportunities with our critics, please email your media materials with the subject line <strong className="text-white font-semibold">"Press Inquiry"</strong>.
            </p>
            <p className="text-sm font-mono text-gold pt-2">
              Email:{' '}
              <a
                href="mailto:info.fashiongraviti@gmail.com?subject=Press%20Inquiry"
                className="underline hover:text-white transition-colors"
              >
                info.fashiongraviti@gmail.com
              </a>
            </p>
          </section>

          {/* Section 4 */}
          <section className="pb-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase tracking-tight mb-4">
              Reader Questions And Response Times
            </h2>
            <p className="text-base text-zinc-300 mb-4 leading-relaxed">
              We welcome questions about styling dilemmas, wardrobe building, and understanding seasonal palettes. Every message sent to our inbox is read and handled personally by our team without automated chatbots or generic canned replies.
            </p>
            <p className="text-base text-zinc-300 mb-4 leading-relaxed">
              Our desk reviews reader correspondence Monday through Friday between 9:00 AM and 6:00 PM CET. During major fashion weeks, email volume can increase, so please allow 24 to 48 hours for a direct response.
            </p>
            <p className="text-sm font-mono text-gold pt-2">
              Email:{' '}
              <a
                href="mailto:info.fashiongraviti@gmail.com?subject=Reader%20Inquiry"
                className="underline hover:text-white transition-colors"
              >
                info.fashiongraviti@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
