import { ArrowLeft } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { heroImages } from '@/data/site';
import BgHero from '@/components/BgHero';

export default function NotFound() {
  return (
    <BgHero
      image={heroImages.home}
      eyebrow="404 - Page not found"
      title="That page"
      titleEm="doesn't exist."
      subtitle="The address may be incorrect, or the page may have moved. You can return home or contact our team for help."
      showButtons
    >
      <button className="button button-ghost" onClick={() => navigate('/')}>
        <ArrowLeft size={16} /> Back to home
      </button>
    </BgHero>
  );
}