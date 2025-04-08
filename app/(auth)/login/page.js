import MagicLinkForm from "@/components/authentification/magic-link";
import OAuthButtons from "@/components/authentification/oauth-buttons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-2">
      <Card className="w-full text-center flex flex-col items-center justify-center max-w-[450px]">
        <CardHeader className="flex flex-col items-center justify-center w-full">
          <Image
            src="/logo.svg"
            width={43}
            height={43}
            alt="habitleaf logo"
            className="mb-2"
          />
          <CardTitle>Log in</CardTitle>
          <CardDescription>Log in to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-7 flex flex-col items-center justify-center w-full">
          <OAuthButtons />
          <div className="flex items-center gap-2 justify-center w-full">
            <div className="w-full h-[2px] bg-card-foreground"></div>
            <span className="text-card-foreground">or</span>
            <div className="w-full h-[2px] bg-card-foreground"></div>
          </div>
          <MagicLinkForm />
        </CardContent>
      </Card>
    </section>
  );
}
