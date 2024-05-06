interface ChartData {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}
export const data: ChartData[] = [
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
