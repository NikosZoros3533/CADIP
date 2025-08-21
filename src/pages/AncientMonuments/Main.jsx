import GridLayout from "../../components/grid-layout";

// Mock shadcn Card component (replace with your actual import if you have it)
function Card({ title, description }) {
  return (
    <div className="bg-card rounded-lg shadow p-10 border">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/50">{description}</p>
    </div>
  );
}

export default function AncientMonuments() {
  // Mock data
  const cards = [
    { title: "Parthenon", description: "An ancient temple on the Athenian Acropolis." },
    { title: "Colosseum", description: "A large amphitheatre in Rome." },
    { title: "Stonehenge", description: "A prehistoric monument in England." },
    { title: "Pyramids of Giza", description: "Ancient pyramids in Egypt." },
    { title: "Machu Picchu", description: "An Incan citadel in Peru." },
    { title: "Petra", description: "A historical city in Jordan." },
  ];

  return (
    <GridLayout>
      {cards.map((card, idx) => (
        <Card key={idx} title={card.title} description={card.description} />
      ))}
    </GridLayout>
  );
}