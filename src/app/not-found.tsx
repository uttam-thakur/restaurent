import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#fbf5f5] px-4">
      <Image
        src="/images/logo-dark.png"
        alt="Rolanda"
        width={200}
        height={50}
        className="mb-8"
      />
      <h1 className="elegant-heading text-4xl md:text-5xl mb-6 text-center">Page Not Found</h1>
      <p className="text-gray-700 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button className="bg-black hover:bg-black/80 text-white px-8">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
