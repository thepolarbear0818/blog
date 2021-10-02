export default function Error({
  code,
  message,
}: {
  code: number;
  message: string;
}) {
  return (
    <div className="error">
      <h1>{code}</h1>
      <h3>{message}</h3>
      <style jsx>{`
        .error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 200px;
        }

        h1 {
          font-size: 60px;
        }

        h3 {
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
