import Navbar from "@/components/shared/Navbar/Navbar";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
