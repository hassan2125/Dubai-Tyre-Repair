import { navigate } from '@/lib/navigate';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <button className={light ? 'logo logo-light' : 'logo'} onClick={() => navigate('/')} aria-label="Tyre Rescue Dubai home">
      <span className="logo-mark"><img src={light ? '/images/Logo%20White.png' : '/images/Logo%20Black.png'} alt="Tyre Rescue Dubai logo" /></span>
    </button>
  );
}
