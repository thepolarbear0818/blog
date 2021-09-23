import { useRouter } from "next/router";
import Image from "next/image";

export default function Logo() {
  const router = useRouter();

  return (
    <div className="logo">
      <Image src="/icon.svg" height={30} width={30} alt="Logo" />
      <div className="title">
        <h5>LibreWolf</h5>
        {router.pathname.startsWith("/docs") && (
          <span className="text-gray-600">Docs</span>
        )}
      </div>
      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
        }

        .title {
          display: flex;
          align-items: flex-end;
        }

        h5,
        span {
          line-height: 1;
        }

        h5 {
          margin: 0;
          margin-left: 12px;
        }

        span {
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
}
