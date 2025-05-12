import { Container } from "@/components/layout/container";
import { SITE_NAME, FOOTER_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 md:py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="space-y-3 md:w-1/3">
            <h3 className="text-lg font-semibold">{SITE_NAME}</h3>
            <p className="text-sm text-muted-foreground">
              A responsive web application template built with Next.js,
              featuring best practices for layout, styling, and component
              architecture.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="space-y-3">
                <h4 className="text-sm font-medium">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/privacy"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </a>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/idmiqbal/next-stack-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repository"
                  aria-label="GitHub Repository"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
