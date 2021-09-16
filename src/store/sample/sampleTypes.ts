/**
 * You can use literal types or TS enums for action type
 */

export const SAMPLE_ACTION_TYPE = 'SAMPLE_ACTION_TYPE';

export interface SampleState {
  sample: any[];
}

interface SampleAction {
  type: typeof SAMPLE_ACTION_TYPE;
  payload: any;
}

export type SampleActions = SampleAction;
