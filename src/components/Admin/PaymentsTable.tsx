import { Chip, Table } from "@heroui/react";
import { IPayment } from "@/types/payments";

type PaymentsTableProps = {
  payments: IPayment[];
};

type RoleMeta = {
  label: string;
  color: "default" | "accent" | "success";
};

const roleMeta: Record<string, RoleMeta> = {
  student: { label: "Student", color: "default" },
  tutor: { label: "Tutor", color: "accent" },
  admin: { label: "Admin", color: "success" },
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function formatDate(value: string) {
  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? "—" : dateFormatter.format(date);
}

function formatAmount(value: number, currency: string) {
  const amount = Number(value);

  if (!Number.isFinite(amount)) return "—";

  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency?.toUpperCase() || "USD",
    }).format(amount);
  } catch {
    return `${currency?.toUpperCase() ?? ""} ${amount}`.trim();
  }
}

function getInitials(name: string) {
  return (name ?? "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function PaymentsTable({ payments }: PaymentsTableProps) {
  return (
    <Table variant="primary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Subscription payments" className="min-w-260">
          <Table.Header>
            <Table.Column isRowHeader>User name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Plan name</Table.Column>
            <Table.Column>Amount</Table.Column>
            <Table.Column>Transaction ID</Table.Column>
            <Table.Column>Payment date</Table.Column>
          </Table.Header>

          <Table.Body>
            {payments.map((payment) => {
              const role = roleMeta[payment.userRole] ?? {
                label: payment.userRole,
                color: "default" as const,
              };

              return (
                <Table.Row key={payment._id} id={payment._id}>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f4ef] text-sm font-bold text-[#075144] ring-1 ring-black/5">
                        {getInitials(payment.userName)}
                      </span>
                      <p className="max-w-56 truncate font-semibold text-[#04382f]">
                        {payment.userName}
                      </p>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="max-w-64 truncate text-sm text-neutral-600">
                      {payment.userEmail}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <Chip variant="soft" color={role.color}>
                      {role.label}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="max-w-56 truncate font-medium text-[#04382f]">
                      {payment.planName}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="font-semibold text-[#04382f]">
                      {formatAmount(payment.amount, payment.currency)}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <code
                      title={payment.transactionId}
                      className="block max-w-48 truncate rounded-md bg-neutral-100 px-2 py-1 font-mono text-xs text-neutral-600"
                    >
                      {payment.transactionId || "—"}
                    </code>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="text-sm text-neutral-600">
                      {formatDate(payment.paidAt)}
                    </p>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
