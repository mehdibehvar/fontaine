import Image from 'next/image';

interface EssentialItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
}

const essentials: EssentialItem[] = [
  {
    id: '1',
    title: 'The Morning Ritual',
    description: 'Three curated essences for dawn.',
    price: 115.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9E7PKk6sSrYsyivHRpCnL8dUpydLfTDu6iZY4KJ1ZgT3YjhM2rumnQBPWMjKnxENodi1z-z-it72yaYcx-qF09PaMHs9K_mZ1EcwkUH8R5Zwz4WbQAelM9uEtcPpcnvfGPQPXCWY4VFkeb6B4T1ICXm1rlv5DUIbUpWIGLdwKezlXE67wCt-afwOL3T7mCzfcHoIbmnHOCSMhq88VPDw2hY-GkOoUDgKjvUiPQoDzmxCLXq805lseL4Fao7DVv38RDYH4sXv9wsE',
    imageAlt: 'The Morning Ritual - apothecary kit',
  },
  {
    id: '2',
    title: 'Stone Apothecary Tools',
    description: 'Hand-carved basalt grinding kit.',
    price: 85.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdlDGtxFg2pMDULrwPICgiiC_fiVjKphehLwiAhKuCpeGi_QFlE4T_3bCcdl3mA7tBeDInT_KE0RvFTuFF3QV3QJMVQqDVBxqVrOixuzNEvD0wEx30OFpmT3pDFMzJ_XAc9ErrWCxoH0EXmCifx26r78BmJdWGovRErCb-5iDEJ8gqNMzBGDIEoqJE_ekwMctdvps_fVJ4ecuNcF2A5Kck1_eb9TyujehTBTPHcsgFV4EqmZF4nQsE7ybxjTA7ojEdUm0yApvjgZE',
    imageAlt: 'Stone apothecary tools - mortar and pestle',
  },
  {
    id: '3',
    title: 'Concentrated Spirits',
    description: 'A set of 5 botanical extracts.',
    price: 140.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyFH7F1LH-Hkqsi2ESWOjK6AIU_EFu5aDKZEN2tP-ci_i869IUWNcY3VR48JdWUz1GVjdjSCxnlrHXIg3mdDTmjUui_HZ5XtE4xaXvyT5um5heMUabq2jd-xuB2Vb4qGwDMoEWtThS1C8e6PvhKHfDCGFvNlFSglWOFlzUUahdIK0AwtuoP8uVjZwZxbYOgRcldvO_jdddtidMEXLe9D_2B-s4Sn0oVPqX6qoo_MVnYp6X7WiWgf899pjEedKYu_YTQ185xCWOTEFk',
    imageAlt: 'Concentrated spirits - botanical extracts',
  },
  {
    id: '4',
    title: 'Sanctuary Candles',
    description: 'Scented with ritual grade oils.',
    price: 48.0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVSCOrYBu6GrFDQaKqr4ccyT9upRhpe6-oPKjg-Kca3zlku9tILJSA2scdE0idM1vATRSJaOQTcW7DAozHAHB6-EuvpYo7oXrwEXL1uPj2VZcNQqrEGVseUeHAFRXJ7FJN_IbDXIM9zLub5YGDPWMB4Kh-1nUT06fwZ-YFOou_STbpJ6JLPWEGZT6UZjhb3rpMOUb8u0pX7AV_OFRXJzag_fe1KDIEhitl3iug7YX1qQ8lSBp4iEgG6lk_VFXV2IhJQqIqsAJDFngP8',
    imageAlt: 'Sanctuary candles - hand-poured botanical',
  },
];

export function RitualEssentials() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
              Essentials
            </p>
            <h2 className="font-headline-lg text-headline-lg">Ritual Essentials</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-gutter overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {essentials.map((item) => (
            <div key={item.id} className="min-w-[320px] lg:min-w-[400px] snap-start flex-shrink-0">
              {/* Image */}
              <div className="aspect-square rounded-lg overflow-hidden mb-6 relative">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <h3 className="font-headline-md text-headline-md mb-2">{item.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                {item.description}
              </p>
              <p className="font-label-md text-label-md text-primary">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
