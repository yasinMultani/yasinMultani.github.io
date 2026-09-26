import './globals.css';

export const metadata = {
  title: 'Yasin Multani — Senior iOS Engineer',
  description: 'Senior iOS Engineer and Solution Architect specializing in Swift, SwiftUI, UIKit and scalable iOS applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
