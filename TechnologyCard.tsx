import type { Technology } from "./types";

type Props = {
  technology: Technology;
};

export default function TechnologyCard({ technology }: Props) {
  return (
    <article>
      <img
        src={technology.icon}
        alt={technology.name}
      />

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>
    </article>
  );
}