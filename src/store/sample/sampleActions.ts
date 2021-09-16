import {
  SampleActions,
  SAMPLE_ACTION_TYPE,
} from './sampleTypes';

export const sampleAction = (payload: any): SampleActions => ({
  type: SAMPLE_ACTION_TYPE,
  payload,
});
