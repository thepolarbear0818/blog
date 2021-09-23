import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AutoInstallation() {
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.toLowerCase().includes("windows")) {
      router.push("/install/windows");
    }
  }, [router]);

  return <></>;
}
