"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <UserCircle className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-2xl">Account Settings</CardTitle>
          <CardDescription>
            Manage your account preferences and settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Profile Information</h3>
              <p className="text-sm text-muted-foreground">
                Your account details and preferences will be displayed here once you&apos;re logged in.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Account Security</h3>
              <p className="text-sm text-muted-foreground">
                Manage your password and security settings to keep your account safe.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}