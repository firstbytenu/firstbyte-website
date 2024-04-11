/** @format */

import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

export default function SliceSimulatorPage({ searchParams }: any) {
  return <SliceZone components={components} />;
}
