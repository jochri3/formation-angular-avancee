import { getSelectors } from '@ngrx/router-store';

export const { selectRouteParams, selectUrl, selectRouteParam } =
  getSelectors();
