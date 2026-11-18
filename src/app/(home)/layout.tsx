import Navbar from "@/components/shared/Navbar/Navbar";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
