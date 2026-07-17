import Image from 'next/image';

export function BrandStory() {
  return (
    <section className="py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 items-center gap-24">
        {/* Image Side */}
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
            <Image
               src="/herbs/brand-story.jpg"
              alt="Artisan hands carefully sorting dried herbs"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Quote Card */}
          <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square bg-surface-container p-6 rounded-lg z-20 hidden md:flex flex-col justify-center border border-outline-variant/10">
            <p className="font-headline-md text-headline-md text-primary italic leading-relaxed">
              "The plant knows more than the paper."
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6">
            Our Philosophy
          </p>
          <h2 className="font-display-lg text-headline-lg text-on-background mb-8">
            The Purity of <br /> Raw Sourcing
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            We believe that the healing potential of a plant is a delicate vibration. To preserve it, we
            eschew industrial processing in favor of slow, traditional methods. Each leaf, petal, and root is
            harvested at its peak and dried in temperature-controlled darkness to maintain the integrity of
            its essential alchemy.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-12">
            Our archive is a testament to the belief that true luxury is found in the untouched brilliance
            of nature. By honoring the raw source, we offer you a connection to the Earth that is both
            profound and pure.
          </p>
          <button className="group inline-flex items-center gap-4 text-primary font-label-md text-label-md hover:text-primary/80 transition-colors">
            <span className="p-4 rounded-full border border-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">menu_book</span>
            </span>
            Read Our Full Story
          </button>
        </div>
      </div>
    </section>
  );
}
