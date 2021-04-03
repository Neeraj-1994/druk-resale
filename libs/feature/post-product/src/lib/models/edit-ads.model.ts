export interface FirstLevelCategory {
  label: string;
  value: string;
  sub_category?: SecondLevelCategory[];
}

export interface SecondLevelCategory {
  label: string;
  value: string;
  item_category?: ThirdLevelCategory[];
}

export interface ThirdLevelCategory {
  label: string;
  value: string;
}
