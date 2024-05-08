import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./worldMapData";
import worldCountries from "./worldCountries.json";

export const WorldMap = () => (
  <div className="w-[65rem] rounded-2xl  bg-white px-10 lg:h-[45rem] 2xl:h-[40rem]">
    <ResponsiveChoropleth
      data={data}
      features={worldCountries.features}
      margin={{ top: 50, right: 0, bottom: 0, left: 20 }}
      colors="purples"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#444444",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);
