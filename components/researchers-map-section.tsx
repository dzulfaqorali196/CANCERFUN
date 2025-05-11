"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Data lokasi peneliti dengan tambahan link dan kota
const researcherLocations = [
  {
    id: 1,
    name: "Dana-Farber Cancer Institute",
    country: "USA",
    coordinates: [42.3376, -71.1037] as [number, number],
    countryCode: "US",
    website: "https://www.dana-farber.org",
    city: "Boston, Massachusetts, USA"
  },
  {
    id: 2,
    name: "MD Anderson Cancer Center",
    country: "USA",
    coordinates: [29.7604, -95.3698] as [number, number],
    countryCode: "US",
    website: "https://www.mdanderson.org",
    city: "Houston, Texas, USA"
  },
  {
    id: 3,
    name: "National Cancer Institute – NIH",
    country: "USA",
    coordinates: [39.0029, -77.1043] as [number, number],
    countryCode: "US",
    website: "https://www.cancer.gov",
    city: "Bethesda, Maryland, USA"
  },
  {
    id: 4,
    name: "Memorial Sloan Kettering Cancer Center",
    country: "USA",
    coordinates: [40.7645, -73.9565] as [number, number],
    countryCode: "US",
    website: "https://www.mskcc.org",
    city: "New York City, New York, USA"
  },
  {
    id: 5,
    name: "Cancer Research UK",
    country: "United Kingdom",
    coordinates: [51.5259, -0.1289] as [number, number],
    countryCode: "GB",
    website: "https://www.cancerresearchuk.org",
    city: "London, England, United Kingdom"
  },
  {
    id: 6,
    name: "German Cancer Research Center – DKFZ",
    country: "Germany",
    coordinates: [49.4142, 8.6750] as [number, number],
    countryCode: "DE",
    website: "https://www.dkfz.de",
    city: "Heidelberg, Germany"
  },
  {
    id: 7,
    name: "Institut Curie",
    country: "France",
    coordinates: [48.8453, 2.3434] as [number, number],
    countryCode: "FR",
    website: "https://institut-curie.org",
    city: "Paris, France"
  },
  {
    id: 8,
    name: "Peter MacCallum Cancer Centre",
    country: "Australia",
    coordinates: [-37.8136, 144.9631] as [number, number],
    countryCode: "AU",
    website: "https://www.petermac.org",
    city: "Melbourne, Victoria, Australia"
  },
  {
    id: 9,
    name: "RIKEN Center for Integrative Medical Sciences",
    country: "Japan",
    coordinates: [35.2288, 139.1027] as [number, number],
    countryCode: "JP",
    website: "https://www.riken.jp/en/research/labs/ims",
    city: "Yokohama, Kanagawa, Japan"
  },
  {
    id: 10,
    name: "A*STAR Institute of Molecular and Cell Biology",
    country: "Singapore",
    coordinates: [1.2956, 103.7877] as [number, number],
    countryCode: "SG",
    website: "https://www.a-star.edu.sg/imcb",
    city: "Singapore, Singapore"
  }
];

// Membuat set unik kode negara yang memiliki peneliti
const researcherCountryCodes = new Set(researcherLocations.map(location => location.countryCode));

// Interface untuk TypeScript
interface ResearcherLocation {
  id: number;
  name: string;
  country: string;
  coordinates: [number, number];
  countryCode: string;
  website: string;
  city: string;
}

// Kita menggunakan dynamic import untuk Leaflet karena ia bergantung pada window
const MapComponent = dynamic(() => import('./map/researcher-map'), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-muted/20 flex items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="inline-block w-8 h-8 rounded-full border-4 border-purple-500 border-t-transparent animate-spin mb-2"></div>
        <p className="text-muted-foreground">Loading Map...</p>
      </div>
    </div>
  )
});

export function ResearchersMapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Deteksi device mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check saat pertama kali load
    checkMobile();
    
    // Listen untuk resize window
    window.addEventListener('resize', checkMobile);

    // Tambahkan animasi entrance dengan sedikit delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Tambahkan Intersection Observer untuk animasi saat section terlihat
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Hentikan observasi setelah section terlihat
        }
      });
    }, {
      threshold: 0.1 // Trigger ketika 10% section terlihat - lebih rendah untuk mobile
    });

    // Temukan elemen section untuk di-observe
    const sectionElement = document.getElementById('researchers-map-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // CSS untuk animasi entrance - disesuaikan untuk mobile
  const fadeInUpStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  };

  const mapFadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
    transition: `opacity ${isMobile ? '0.8s' : '1.2s'} ease-out, transform ${isMobile ? '0.8s' : '1.2s'} cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: isMobile ? '0.1s' : '0.2s'
  };

  return (
    <section id="researchers-map-section" className="py-8 sm:py-12 md:py-20 lg:py-32 px-4 sm:px-6 md:container relative">
      {/* Background effects dengan animasi */}
      <div 
        className="absolute -bottom-8 sm:-bottom-16 md:-bottom-32 left-0 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] rounded-full bg-[#a857ff]/3 blur-[40px] sm:blur-[60px] md:blur-[120px] pointer-events-none z-0"
        style={{
          opacity: isVisible ? (isMobile ? 0.5 : 0.7) : 0,
          transition: 'opacity 2s ease-out',
          transitionDelay: '0.5s'
        }}
      ></div>
      <div 
        className="absolute -top-8 sm:-top-16 md:-top-32 right-0 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] rounded-full bg-[#a857ff]/3 blur-[40px] sm:blur-[60px] md:blur-[120px] pointer-events-none z-0"
        style={{
          opacity: isVisible ? (isMobile ? 0.5 : 0.7) : 0,
          transition: 'opacity 2s ease-out',
          transitionDelay: '0.5s'
        }}
      ></div>
      
      <div className="text-center max-w-5xl mx-auto mb-6 sm:mb-10 relative z-10" style={fadeInUpStyle}>
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal mb-4 sm:mb-6 text-center">
          <span className="text-white">Global </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] to-[#E9D5FF]">
            Research Network
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center px-4 sm:px-6 md:px-0">
          CancerFun collaborates with researchers from leading cancer research institutions worldwide to develop breakthrough technologies and therapies.
        </p>
      </div>
      
      <div 
        className="mt-6 sm:mt-10 rounded-xl overflow-hidden relative z-10" 
        style={{ 
          background: 'linear-gradient(180deg, rgba(25,25,25,0.7) 0%, rgba(20,20,20,0.5) 100%)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 0 30px rgba(138, 61, 217, 0.1)',
          border: '2px solid #6C30A9',
          borderRadius: '12px',
          ...mapFadeInStyle
        }}
      >
        <MapComponent 
          researcherLocations={researcherLocations as ResearcherLocation[]} 
          researcherCountryCodes={Array.from(researcherCountryCodes)} 
        />
      </div>
    </section>
  );
} 