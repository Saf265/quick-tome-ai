import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Verify your email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center">
            We&apos;ve sent a verification email to your address. Please check
            your inbox and click the link to activate your account.
          </p>
          <div className="flex justify-center">
            <Button asChild>
              <Link
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" /> Go to my email
              </Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center">
            If you don&apos;t receive the email, please check your spam folder
            or{" "}
            <Link
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              email me
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
