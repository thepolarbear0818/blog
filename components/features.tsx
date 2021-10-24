export default function Features({
  features
}: {
  features: {
    icon: string;
    title: string;
    text: string;
  }[];
}) {
  return (
    <div className="features">
      <div className="grid">
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <img src={feature.icon} alt={`Icon ${feature.title}`} />
            <h5>{feature.title}</h5>
            <p dangerouslySetInnerHTML={{ __html: feature.text }} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .features {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 850px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          width: 250px;
          margin: 10px;
        }

        .card img {
          width: 80px;
          height: 80px;
        }
      `}</style>
    </div>
  );
}
