export type TabsType = {
  title: string;
  link: string;
};

export type TimeLineType = Omit<TabsType, "link"> & {
  value: string;
};
