import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Zones } from './pages/Zones';
import { Programs } from './pages/Programs';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'zones', Component: Zones },
      { path: 'programs', Component: Programs },
      { path: 'gallery', Component: Gallery },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 pt-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#123458] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          404
        </h1>
        <p className="text-xl text-[#123458]/70 mb-8">Page not found</p>
        <a
          href="/"
          className="inline-block bg-[#D9A20E] text-[#123458] px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
