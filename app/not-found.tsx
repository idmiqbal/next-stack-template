import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="animate-in fade-in-50 slide-in-from-bottom-5 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        404
      </h1>
      <p className="animate-in fade-in-50 slide-in-from-bottom-5 mt-4 text-xl text-muted-foreground [--animate-delay:200ms]">
        Page not found
      </p>
      <p className="animate-in fade-in-50 slide-in-from-bottom-5 mt-2 max-w-[600px] text-muted-foreground [--animate-delay:400ms]">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Button 
        asChild 
        className="animate-in fade-in-50 slide-in-from-bottom-5 mt-8 [--animate-delay:600ms]"
      >
        <Link href="/">
          Back to home
        </Link>
      </Button>
    </Container>
  );
}