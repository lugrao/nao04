import { ResponsiveLine } from "@nivo/line";
import { formatUSDAmount } from "utils/formatUSDAmount";
import { getSpanishDate } from "utils/getSpanishDate";

/**
 * Represents the category of the chart.
 */
export type ChartCategory = "sales" | "customers";

/**
 * Represents the data structure for chart data.
 */
export interface ChartData {
  // The identifier for the data set.
  id: string;
  // The color associated with the data set.
  color: string;
  // The array of data points.
  data: { x: string; y: number }[];
}

/**
 * Props for the {@link LineChart} component.
 */
export interface LineChartProps {
  // The category of the chart.
  category: ChartCategory;
  // The title of the chart.
  title: string;
  // The total amount to be displayed, formatted if sales.
  totalAmount: number;
  // The data to be plotted on the chart.
  data: ChartData[];
}

const chart = {
  sales: { color: { amount: "text-purple-500", lines: "#c084fc" } },
  customers: { color: { amount: "text-sky-400", lines: "#7dd3fc" } },
};

/**
 * Displays sales or customer data.
 *
 * @component
 * @param {LineChartProps} props - See {@link LineChartProps}.
 * @returns {JSX.Element} The rendered LineChart component.
 */
export const LineChart = ({
  category,
  title,
  totalAmount,
  data,
}: LineChartProps): JSX.Element => (
  <div className="flex h-[36rem] w-full max-w-[45rem] flex-col justify-center rounded-2xl bg-white p-6 shadow-md">
    <div className="flex items-end justify-between pt-4">
      <h2 className="text-lg font-bold leading-none">{title}</h2>
      <h3
        className={`text-2xl font-semibold leading-none ${chart[category].color.amount}`}
      >
        {category === "sales" ? formatUSDAmount(totalAmount) : totalAmount}
      </h3>
      <span className="text-sm leading-none text-gray-400">
        {getSpanishDate()}
      </span>
    </div>
    <ResponsiveLine
      data={data}
      colors={chart[category].color.lines}
      margin={{ top: 30, right: 20, bottom: 30, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: category === "sales" ? 200000 : 2000,
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      lineWidth={2}
      pointSize={6}
      pointColor={chart[category].color.lines}
      pointBorderColor={chart[category].color.lines}
      pointBorderWidth={2}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[]}
      gridYValues={5}
      theme={{
        axis: {
          ticks: { text: { fill: "#9ca3af" }, line: { stroke: "" } },
        },
      }}
      layers={[
        "grid",
        "markers",
        "axes",
        "areas",
        "crosshair",
        "lines",
        "points",
        "slices",
        "mesh",
        "legends",
      ]}
      curve="linear"
      enableGridX={true}
      enableGridY={true}
      enablePoints={true}
      enablePointLabel={false}
      enableArea={false}
      areaOpacity={0}
      areaBlendMode="normal"
      areaBaselineValue={0}
      isInteractive={true}
      debugMesh={false}
    />
  </div>
);
