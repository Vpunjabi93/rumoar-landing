import React, { Suspense } from 'react';
import Hero from '~components/Hero';
import Philosophy from '~components/Philosophy';
import VoiceOfCustomer from '~components/VoiceOfCustomer';
import Traction from '~components/Traction';
import VideoSubmissions from '~components/VideoSubmissions';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-brand-dark text-brand-light font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
        <Hero />
        <Philosophy />
        <VoiceOfCustomer />
        <Traction />
        <VideoSubmissions />
      </Suspense>
    </main>
  );
};

export default App;
