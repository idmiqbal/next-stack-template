import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy | Next Stack Template",
  description: "Privacy policy and data handling practices for Next Stack Template",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 py-12">
      <section>
        <h1 className="text-4xl font-bold tracking-tighter">Privacy Policy</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Learn about how we collect, use, and protect your personal information
        </p>
      </section>

      <Card className="overflow-hidden">
        <ScrollArea className="h-full max-h-[600px] p-6">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p className="text-muted-foreground">
                This Privacy Policy explains how Next Stack Template ("we", "our", or "us") collects, uses, and protects your personal information when you use our website and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Personal Information</h3>
                <p className="text-muted-foreground">
                  We may collect the following personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Account credentials</li>
                  <li>Usage data and preferences</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Providing and improving our services</li>
                <li>Communicating with you about updates and changes</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Ensuring security and preventing fraud</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Data Protection</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand where our visitors come from.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use third-party services that collect, monitor, and analyze user data to improve our service. These third parties have access to your personal information only to perform specific tasks on our behalf.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Email: privacy@nextstacktemplate.com</li>
                <li>Address: 123 Template Street, Suite 456, San Francisco, CA 94103</li>
              </ul>
            </section>

            <div className="pt-4 text-sm text-muted-foreground">
              Last updated: April 1, 2024
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}