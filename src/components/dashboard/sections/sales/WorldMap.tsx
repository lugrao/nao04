import { useState, useEffect } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import worldCountries from "./worldCountries.json";
import { SalesByCountryTableData } from "./SalesByCountryTable";

export interface WorldMapProps {
  data: SalesByCountryTableData;
}

export const WorldMap = ({ data }: WorldMapProps) => {
  const [mapData, setMapData] = useState<
    { id: string; value: number }[] | undefined
  >(undefined);

  console.log(mapData);

  useEffect(() => {
    const mData: { id: string; value: number }[] = [];

    data.forEach((item) =>
      mData.push({
        id: item.countryCode,
        value: item.totalIncome,
      }),
    );
    setMapData(mData);
  }, [data]);

  if (mapData === undefined)
    return (
      <div className="rounded-2xl bg-white px-10 shadow-md  md:w-[75rem] lg:h-[50rem] lg:w-[75rem] 2xl:h-[40rem] 2xl:w-[65rem]"></div>
    );

  return (
    <div className="rounded-2xl bg-white px-10 shadow-md  md:w-[75rem] lg:h-[50rem] lg:w-[75rem] 2xl:h-[40rem] 2xl:w-[65rem]">
      <ResponsiveChoropleth
        data={mapData}
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
};
