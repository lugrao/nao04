import { data } from "./chartData";
import { ResponsiveLine } from "@nivo/line";
import { formatUSDAmount } from "utils/formatUSDAmount";

export const LineChart = () => {
  return (
    <div className="flex h-[26rem] w-5/12 flex-col justify-center rounded-2xl bg-white p-6">
      <div className="flex items-end justify-between pt-4">
        <h2 className="text-lg font-bold leading-none">Ventas 2024</h2>
        <h3 className="text-2xl font-semibold leading-none text-purple-500">
          {formatUSDAmount(12434.52)}
        </h3>
        <span className="text-sm leading-none text-gray-400">27 Abr 2024</span>
      </div>
      <ResponsiveLine
        data={data}
        colors="#c084fc"
        margin={{ top: 30, right: 20, bottom: 30, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: 200000,
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
        pointColor="#c084fc"
        pointBorderColor="#c084fc"
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
};
