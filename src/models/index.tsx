export type TabsType = {
  title: string;
  link: string;
};

export type TimeLineType = Omit<TabsType, "link"> & {
  value: string;
};

export type ResumeType = {
  icons: React.ReactNode;
  title: string;
  date: string;
  description: string;
};
