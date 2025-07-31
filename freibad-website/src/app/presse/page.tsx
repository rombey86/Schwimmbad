import { Metadata } from 'next';
import PressPageClient from './PressPageClient';

export const metadata: Metadata = {
  title: 'Presse - Rettet das Freibad Niederkrüchten',
  description: 'Aktuelle Presseberichte und Medienecho zum Freibad Niederkrüchten. Verfolgen Sie die Berichterstattung über unser Projekt.',
};

export default function PressePage() {
  return <PressPageClient />;
}
