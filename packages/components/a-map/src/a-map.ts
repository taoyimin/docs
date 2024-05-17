import { load } from "@amap/amap-jsapi-loader";

export type AMapLayerType = "default" | "satellite" | "roadNet" | "traffic";

export type AMapLayer =
  | AMapLayerType
  | (AMap.MapOptions["layers"][number] & { map: AMap.Map });

export interface AMapLayerButton {
  name: string;
  image?: string;
  layers: AMapLayer[];
}

export type AMapLayersCreate = (AMap: AMap.NameSpace) => AMapLayer[];

export interface AMapProps {
  layers?: AMapLayer[];
  layersControl?: boolean;
  layersButtons?: AMapLayerButton[];
  loadOptions?: Partial<Parameters<typeof load>[0]>;
  mapOptions?: AMap.MapOptions | { layers: AMapLayer[] | AMapLayersCreate };
}

export interface AMapEmits {
  (e: "loaded", map: AMap.Map, AMap: AMap.NameSpace): void;
}
