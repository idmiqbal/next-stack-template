import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Next Stack Template",
  description: "Learn about our modern web application template built with Next.js",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 py-12">
      <section>
        <h1 className="text-4xl font-bold tracking-tighter">About</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Learn about our modern web application template built with Next.js
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            Our mission is to provide developers with a solid foundation for building
            modern, responsive, and accessible web applications. We believe in creating
            tools that help developers focus on solving business problems rather than
            reinventing the wheel.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-muted-foreground">
            We envision a web development ecosystem where best practices are easily
            accessible and implemented. Our templates are designed to be intuitive,
            customizable, and built with the latest technologies to ensure your
            applications are future-proof.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-medium">Quality</h3>
            <p className="mt-2 text-muted-foreground">
              We prioritize code quality, performance, and adherence to best practices
              in all our templates.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-medium">Accessibility</h3>
            <p className="mt-2 text-muted-foreground">
              We believe the web should be accessible to everyone, which is why
              accessibility is a core consideration in our design.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-medium">Innovation</h3>
            <p className="mt-2 text-muted-foreground">
              We stay up-to-date with the latest technologies and practices to ensure
              our templates are modern and innovative.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Our Team</h2>
        <p className="text-muted-foreground">
          Our team consists of passionate developers, designers, and product managers
          who are dedicated to creating high-quality web application templates. We
          believe in collaboration, continuous learning, and sharing knowledge.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-4 h-24 w-24 rounded-full bg-muted"></div>
              <h3 className="font-medium">Team Member {i + 1}</h3>
              <p className="text-sm text-muted-foreground">Position</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}