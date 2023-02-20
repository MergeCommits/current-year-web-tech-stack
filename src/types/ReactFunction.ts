import type { ReactElement } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export type ReactFunction<P = {}> = (props: P) => ReactElement;
