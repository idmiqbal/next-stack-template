import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsPage() {
  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using this website, you accept and agree to be bound by the terms
                  and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                <p className="text-muted-foreground">
                  Permission is granted to temporarily download one copy of the materials (information
                  or software) on this website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on this website are provided on an &apos;as is&apos; basis. We make no
                  warranties, expressed or implied, and hereby disclaim and negate all other warranties
                  including, without limitation, implied warranties or conditions of merchantability,
                  fitness for a particular purpose, or non-infringement of intellectual property or
                  other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall we or our suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Revisions and Errata</h2>
                <p className="text-muted-foreground">
                  The materials appearing on our website could include technical, typographical, or
                  photographic errors. We do not warrant that any of the materials on our website are
                  accurate, complete or current.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Links</h2>
                <p className="text-muted-foreground">
                  We have not reviewed all of the sites linked to our website and are not responsible
                  for the contents of any such linked site. The inclusion of any link does not imply
                  endorsement by us of the site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Site Terms of Use Modifications</h2>
                <p className="text-muted-foreground">
                  We may revise these terms of use for our website at any time without notice. By
                  using this website you are agreeing to be bound by the then current version of
                  these Terms and Conditions of Use.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
                <p className="text-muted-foreground">
                  Any claim relating to our website shall be governed by the laws of the jurisdiction
                  in which we operate without regard to its conflict of law provisions.
                </p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}