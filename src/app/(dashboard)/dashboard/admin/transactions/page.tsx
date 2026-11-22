import { Receipt } from "@gravity-ui/icons";
import { Chip, EmptyState, Surface } from "@heroui/react";
import PaymentsTable from "@/components/Admin/PaymentsTable";
import { getTransactions } from "@/lib/api/payements";

const AllTransactionPage = async () => {
  const payments = await getTransactions();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#04382f] sm:text-3xl">
            Transactions
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Review every Stripe subscription payment made on the marketplace.
          </p>
        </div>

        <Chip size="lg" variant="soft" color="accent">
          {payments.length} {payments.length === 1 ? "payment" : "payments"}
        </Chip>
      </div>

      {payments.length > 0 ? (
        <PaymentsTable payments={payments} />
      ) : (
        <Surface className="rounded-3xl border border-black/5 bg-white shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)]">
          <EmptyState className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ef] text-[#075144]">
              <Receipt aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[#04382f]">
                No payments yet
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                When someone upgrades to Pro, their payment will show up here.
              </p>
            </div>
          </EmptyState>
        </Surface>
      )}
    </div>
  );
};

export default AllTransactionPage;
