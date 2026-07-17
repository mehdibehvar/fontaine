import Image from 'next/image';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
  imageAlt: string;
}

interface SmallTestimonial {
  id: string;
  quote: string;
  author: string;
}

const mainTestimonial: Testimonial = {
  id: '1',
  quote:
    '"Fontaine has transformed my relationship with wellness. Their herbs aren\'t just products; they are a bridge to a slower, more intentional way of living."',
  author: 'Elena Varennes',
  role: 'Botanical Curator',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA63MPNrqr5PwggHxdyj3czSJx0sv9rUHLcpVa2g1RmLKh0ptMc5apwgWv-vTv_PODdnz_tY7BndG_yTBP1Yqe4AhEscntuyTyHNqHaFpYnXT5hOXM5p0T9jBV7Gu7vKHWYaIE0HJriNdahsi1N95X9s1tsEp0iPehZ2Y8VWCY2dHUnqU_zwmLHDSkbw_QCVvJA8j8HpYj-8HkUw_e_t9clJrDIN8AQoP9WOeChg-8j86kjnpwzq1F7jx4e-3gsKG51Clxj8v2M73U',
  imageAlt: 'Elena Varennes - Botanical Curator',
};

const smallTestimonials: SmallTestimonial[] = [
  {
    id: '1',
    quote: '"The borage flowers arrive so beautifully preserved, they look like they were plucked moments ago."',
    author: 'Marcus T.',
  },
  {
    id: '2',
    quote: '"A true sanctuary for the senses. Every package is a gift to oneself."',
    author: 'Sophie L.',
  },
  {
    id: '3',
    quote:
      '"The packaging is as considered as the contents. An absolute masterclass in branding and quality."',
    author: 'James R.',
  },
];

export function Testimonials() {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Main Testimonial */}
        <div className="flex flex-col justify-center">
          <span
            className="material-symbols-outlined text-primary text-[64px] mb-8"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_quote
          </span>
          <blockquote className="font-headline-lg text-headline-lg text-on-background mb-10 italic leading-snug">
            {mainTestimonial.quote}
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border border-primary/20">
              <Image
                src={mainTestimonial.image}
                alt={mainTestimonial.imageAlt}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-background">{mainTestimonial.author}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                {mainTestimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Small Testimonials Grid */}
        <div className="grid grid-cols-2 gap-gutter items-center">
          {/* First Column - 2 items */}
          <div className="space-y-gutter">
            {smallTestimonials.slice(0, 2).map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 bg-surface-container rounded-lg border border-outline-variant/10 hover:border-outline-variant/30 transition-all"
              >
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">
                  {testimonial.quote}
                </p>
                <p className="font-label-sm text-label-sm text-primary uppercase">{testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Second Column - 1 large item */}
          <div className="p-8 bg-surface-container-high rounded-lg border border-primary/20 h-full flex flex-col justify-center hover:border-primary/40 transition-all">
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">
              {smallTestimonials[2].quote}
            </p>
            <p className="font-label-sm text-label-sm text-primary uppercase">{smallTestimonials[2].author}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
