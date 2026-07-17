import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function LandingHero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-105 transition-transform duration-[10s] hover:scale-100">
        <Image
          src="https://lh3.googleusercontent.com/aida/AP1WRLsWlYIbyggO0ij8zMrxd9ggMNw5wfFYt5kHlP-HOdgV0Hg7glElrknOEMhQgwJumdQUTWcaGebOYvln4Wm-bwRDsjvarxefcqe05yU9SnvQ9cYdNxSMI6ZASAcFaWeHrD2ZCFS436BvYJ4jKDOB4u56oFIR4uCe_xpNe_1frHHP-VFd_9MZg2GzNh8uz5FQBxpkcYAre8dD0BGJMX7ivYjiML8KR20kbRGMIpSjg525wQZrYXOqYN1v2Y8"
          alt="Fontaine hero background - premium botanical imagery"
          fill
          priority
          className="object-cover grayscale-[0.3] brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full pb-24">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-on-background mb-8 leading-[1.05]">
            Preserving the{' '}
            <span className="text-primary italic">Alchemy</span> of Herbs
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl">
            A modern apothecary dedicated to the ancestral wisdom of botanical healing. Slow-sourced,
            ritual-grade essences for the contemporary spirit.
          </p>
          <div className="flex gap-6 flex-wrap">
            <Button variant="primary" size="lg" className="flex items-center gap-3 group">
              Explore the Archive
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Button>
            <Button variant="secondary" size="lg">
              Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
