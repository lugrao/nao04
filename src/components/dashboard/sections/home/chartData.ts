export interface ChartData {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}

export const salesData: ChartData[] = [
  {
    id: "2024",
    color: "hsl(177, 70%, 50%)",
    data: [
      {
        x: "Enero",
        y: 55458,
      },
      {
        x: "Febrero",
        y: 128514,
      },
      {
        x: "Marzo",
        y: 164321,
      },
      {
        x: "Abril",
        y: 113002,
      },
      {
        x: "Mayo",
        y: 152321,
      },
    ],
  },
];

export const customersData: ChartData[] = [
  {
    id: "2024",
    color: "hsl(177, 70%, 50%)",
    data: [
      {
        x: "2020",
        y: 10,
      },
      {
        x: "2021",
        y: 423,
      },
      {
        x: "2022",
        y: 1042,
      },
      {
        x: "2023",
        y: 1329,
      },
      {
        x: "2024",
        y: 1407,
      },
    ],
  },
];
