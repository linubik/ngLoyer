export interface SharedState {
  loading: boolean;
  allCounts: any;
  cities: any;
  userType: string[];
}

export const initialState: SharedState = {
  loading: true,
  allCounts: [],
  cities: [],
  userType: ['', ''],
};
