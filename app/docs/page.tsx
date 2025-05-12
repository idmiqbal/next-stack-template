"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Code, FileText, Lightbulb } from "lucide-react";

export default function DocsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
          <p className="text-lg text-muted-foreground">
            Welcome to our comprehensive documentation. Here you'll find everything you need to get started.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Getting Started</h2>
                <p className="text-muted-foreground mt-1">
                  Learn the basics and get up and running quickly
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">API Reference</h2>
                <p className="text-muted-foreground mt-1">
                  Detailed API documentation and examples
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Guides</h2>
                <p className="text-muted-foreground mt-1">
                  Step-by-step tutorials and how-to guides
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Best Practices</h2>
                <p className="text-muted-foreground mt-1">
                  Tips and recommendations for optimal usage
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}