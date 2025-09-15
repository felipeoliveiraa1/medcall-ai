import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulta Presencial - MedCall AI',
  description: 'Sistema de consulta presencial com transcrição em tempo real',
};

export default function PresentialConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="presential-layout">
      {children}
    </div>
  );
}
