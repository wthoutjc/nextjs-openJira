interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Esto es un texto de excelente calidad y desempeño",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description:
        "En progreso: Esto es un texto2 de excelente calidad y desempeño",
      createdAt: Date.now() - 1000000,
      status: "in-progress",
    },
    {
      description:
        "Terminado: Esto es un texto3 de excelente calidad y desempeño",
      createdAt: Date.now() - 100000,
      status: "finished",
    },
  ],
};

export { seedData };
