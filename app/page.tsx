import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, Globe, LayoutGrid } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="animate-in fade-in-50 slide-in-from-bottom-5 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Next Stack Template
            </h1>
            <p className="animate-in fade-in-50 slide-in-from-bottom-5 mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed [--animate-delay:200ms]">
              A modern, responsive web application template built with Next.js,
              featuring best practices for layout, styling, and component
              architecture.
            </p>
          </div>
          <div className="animate-in fade-in-50 slide-in-from-bottom-5 flex flex-wrap items-center justify-center gap-4 [--animate-delay:400ms]">
            <Button asChild size="lg">
              <Link
                href="https://github.com/idmiqbal/next-stack-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Everything you need to build modern web applications
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<LayoutGrid className="h-10 w-10" />}
            title="Responsive Design"
            description="Optimized layouts for all device sizes from mobile to desktop with tailored components."
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10" />}
            title="Performance Optimized"
            description="Built with performance in mind, ensuring fast load times and smooth interactions."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10" />}
            title="Accessibility First"
            description="WCAG compliant components and proper semantic markup for all users."
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10" />}
            title="SEO Friendly"
            description="Best practices for search engine optimization to improve visibility."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-primary/5 py-16">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Start building your next project with our modern, responsive
            template.
          </p>
          <Button asChild size="lg">
            <Link href="/features">Explore Features</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
