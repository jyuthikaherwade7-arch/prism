/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, EventItem } from './types';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { HomePage } from './components/pages/HomePage';
import { ExploreEventsPage } from './components/pages/ExploreEventsPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { ScrollPromptSticker } from './components/stickers/ScrollPromptSticker';
import { EventDetailModal } from './components/modals/EventDetailModal';
import { RegistrationModal } from './components/modals/RegistrationModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeEventDetail, setActiveEventDetail] = useState<EventItem | null>(null);
  const [activeEventRegister, setActiveEventRegister] = useState<EventItem | null>(null);

  // Sync initial URL path
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/register' || path === '/register/') {
        setCurrentPage('register');
      } else if (path === '/events' || path === '/events/') {
        setCurrentPage('events');
      } else if (path === '/gallery' || path === '/gallery/') {
        setCurrentPage('gallery');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080D1A] text-slate-100 selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Strict 3-zone Top Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEventDetail={(event) => setActiveEventDetail(event)}
          />
        )}
        {currentPage === 'events' && (
          <ExploreEventsPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'register' && (
          <RegisterPage />
        )}
      </main>

      {/* Micro-interaction: Scrolling prompt ("Still scrolling?" -> "Good. There's more.") */}
      <ScrollPromptSticker />

      {/* Event Detailed Specification Modal */}
      {activeEventDetail && (
        <EventDetailModal
          event={activeEventDetail}
          onClose={() => setActiveEventDetail(null)}
          onGoToRegister={(event) => {
            setActiveEventDetail(null);
            handleNavigate('register');
          }}
        />
      )}

      {/* Dedicated Registration Modal */}
      {activeEventRegister && (
        <RegistrationModal
          event={activeEventRegister}
          onClose={() => setActiveEventRegister(null)}
        />
      )}

      {/* Quiet Architectural Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
