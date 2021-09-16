import {
  SampleState,
  SampleActions,
  SAMPLE_ACTION_TYPE,
} from './sampleTypes';

const initialState: SampleState = {
  sample: [],
};

export const sampleReducer = (
  state: SampleState = initialState,
  action: SampleActions,
): SampleState => {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      return {
        ...state,
        sample: action.payload,
      };
    default:
      return state;
  }
};
