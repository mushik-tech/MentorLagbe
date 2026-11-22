import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { Lock } from "@gravity-ui/icons";

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center p-4">
      <Card variant="default" className="w-full max-w-md p-6 shadow-none">
        <Card.Header className="flex flex-col items-center text-center gap-3">
          {/* Lock Icon */}
          <div className="flex size-16 items-center justify-center rounded-full bg-danger/10 text-danger">
            <Lock />
          </div>

          <Chip color="danger" variant="soft" size="sm">
            401 • Unauthorized
          </Chip>

          <Card.Title className="text-2xl font-bold tracking-tight">
            Access Denied
          </Card.Title>
        </Card.Header>

        <Card.Content className="text-center">
          <Card.Description>
            You don&apos;t have permission to view this page. Please sign in
            with an authorized account or return to the homepage.
          </Card.Description>
        </Card.Content>

        <Card.Footer className="flex gap-7">
          <Link href="/signin" className="w-1/2">
            <Button variant="primary" fullWidth>
              Sign In
            </Button>
          </Link>

          <Link href="/" className="w-1/2">
            <Button variant="outline" fullWidth>
              Go Home
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </main>
  );
}
