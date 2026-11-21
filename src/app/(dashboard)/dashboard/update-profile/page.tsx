import UpdateProfileForm from "@/components/Dashboard/UpdateProfileForm";

export default async function DashboardSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl">
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#04382f] sm:text-3xl">
            My applications
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Track the tuitions you have applied for and their current status.
          </p>
      </div>

      <UpdateProfileForm />
    </div>
  );
}
