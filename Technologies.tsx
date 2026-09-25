import { useEffect, useState } from "react";

import type { Technology } from "../types";

import TechnologyCard from "./TechnologyCard";

type Props = {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
};

export default function Technologies({
  stack,
  onAdd,
}: Props) {

  const [technologies, setTechnologies] =
    useState<Technology[]>([]);

  const [category, setCategory] =
    useState("All");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch("/data/technologies.json")

      .then((response) => {

        if (!response.ok) {
          throw new Error(
            "Could not load technology data."
          );
        }

        return response.json() as Promise<
          Technology[]
        >;
      })

      .then(setTechnologies)

      .catch((error: Error) =>
        console.error(error)
      )

      .finally(() =>
        setLoading(false)
      );

  }, []);

  const categories = [
    "All",
    ...new Set(
      technologies.map(
        (item) => item.category
      )
    ),
  ];

  const filtered =
    category === "All"
      ? technologies
      : technologies.filter(
          (item) =>
            item.category === category
        );

  return (
    <section>

      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

        <div>

          <p className="mb-2 text-xs font-black tracking-widest text-pink-500">
            TECHNOLOGY LIBRARY
          </p>

          <h2 className="text-3xl font-black">
            Explore Technologies
          </h2>

        </div>

        <span className="text-xs text-base-content/55">
          {filtered.length} technologies
        </span>

      </div>

      <div className="my-5 flex flex-wrap gap-2">

        {categories.map((item) => (

          <button
            key={item}
            type="button"
            className={`btn btn-sm ${
              category === item
                ? "btn-primary"
                : "btn-outline"
            }`}
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>

        ))}

      </div>

      {loading ? (

        <div className="flex min-h-80 items-center justify-center gap-3">

          <span className="loading loading-spinner loading-md text-primary" />

          Loading technologies...

        </div>

      ) : (

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

          {filtered.map((technology) => (

            <TechnologyCard
              key={technology.id}
              technology={technology}
              added={stack.some(
                (item) =>
                  item.id === technology.id
              )}
              onAdd={onAdd}
            />

          ))}

        </div>

      )}

    </section>
  );
}