import PlatformPage from '@/components/landing/PlatformPage';
import { PLATFORM } from '@/lib/platform';
import { createPageMetadata } from '@/lib/seo';

const product = PLATFORM[1];
export const metadata = createPageMetadata('/backend', product.title, product.description);
export default function Page() { return <PlatformPage product={product} />; }
