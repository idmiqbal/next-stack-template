import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutGrid,
  Code,
  Layers,
  Shield,
  Zap,
  Workflow,
  PenTool,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features | Next Stack Template",
  description: "Explore the features of our modern web application template",
};

export default function FeaturesPage() {
  return (
    <div className="space-y-12 py-12">
      <section>
        <h1 className="text-4xl font-bold tracking-tighter">Features</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Explore the powerful features of our modern web application template
        </p>
      </section>

      <Tabs defaultValue="design" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>

        <TabsContent value="design" className="space-y-8">
          <h2 className="text-2xl font-bold">Design Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<LayoutGrid />}
              title="Responsive Layout"
              description="Optimized layouts for all device sizes from mobile to desktop with tailored components."
            />
            <FeatureCard
              icon={<PenTool />}
              title="Modern Aesthetics"
              description="Clean, professional design with attention to typography, spacing, and visual hierarchy."
            />
            <FeatureCard
              icon={<Smartphone />}
              title="Mobile-First Approach"
              description="Designed for mobile devices first, ensuring great experiences on all screen sizes."
            />
          </div>
        </TabsContent>

        <TabsContent value="development" className="space-y-8">
          <h2 className="text-2xl font-bold">Development Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Code />}
              title="TypeScript Support"
              description="Full TypeScript integration for type safety and improved developer experience."
            />
            <FeatureCard
              icon={<Layers />}
              title="Component Architecture"
              description="Modular component design for better code organization and reusability."
            />
            <FeatureCard
              icon={<Workflow />}
              title="Development Workflow"
              description="Optimized development environment with ESLint, Prettier, and Git hooks."
            />
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-8">
          <h2 className="text-2xl font-bold">Performance Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap />}
              title="Fast Loading"
              description="Optimized for speed with code splitting, lazy loading, and minimal bundle sizes."
            />
            <FeatureCard
              icon={<Zap />}
              title="Efficient Rendering"
              description="Server-side rendering and static generation options for optimal performance."
            />
            <FeatureCard
              icon={<Zap />}
              title="Image Optimization"
              description="Automatic image optimization for reduced page load times and bandwidth usage."
            />
          </div>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-8">
          <h2 className="text-2xl font-bold">Accessibility Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Shield />}
              title="WCAG Compliance"
              description="Built with accessibility in mind, following WCAG guidelines for inclusive design."
            />
            <FeatureCard
              icon={<Shield />}
              title="Keyboard Navigation"
              description="Fully navigable with keyboard for users who cannot use a mouse or touchscreen."
            />
            <FeatureCard
              icon={<Shield />}
              title="Screen Reader Support"
              description="Semantic HTML and ARIA attributes for better screen reader compatibility."
            />
          </div>
        </TabsContent>
      </Tabs>

      <section className="rounded-lg bg-primary/5 p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to get started?</h2>
        <p className="mx-auto mt-2 max-w-[600px] text-muted-foreground">
          Start building your next project with our modern, responsive template.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button asChild size="lg">
            <Link
              href="https://github.com/idmiqbal/next-stack-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/docs">View Documentation</Link>
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
    <Card>
      <CardHeader>
        <div className="text-primary">{icon}</div>
        <CardTitle className="mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
