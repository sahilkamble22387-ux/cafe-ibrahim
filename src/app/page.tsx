'use client';

import CCTNavbar from '@/components/CCTNavbar';
import CCTHero from '@/components/CCTHero';
import CCTAbout from '@/components/CCTAbout';
import CCTMenu from '@/components/CCTMenu';
import CCTServices from '@/components/CCTServices';
import CCTWhyWebsite from '@/components/CCTWhyWebsite';
import CCTContact from '@/components/CCTContact';
import CCTFooter from '@/components/CCTFooter';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <CCTNavbar />
      <main className="flex-1">
        <CCTHero />
        <CCTAbout />
        <CCTMenu />
        <CCTServices />
        <CCTWhyWebsite />
        <CCTContact />
      </main>
      <CCTFooter />
    </div>
  );
}
