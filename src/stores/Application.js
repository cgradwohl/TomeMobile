/* eslint-disable no-param-reassign */
import {
  types,
  flow,
} from 'mobx-state-tree';

const Application = types.model(
  'Application',
  {
    loading: types.boolean,
  },
)
  .actions((self) => ({
    load: flow(function* load() {
      yield new Promise((resolve) => {
        setTimeout(() => {
          self.setLoading(true);
          resolve(true);
        }, 2000);
      });
    }),
    setLoading(bool) {
      self.loading = bool;
    },
  }));

const application = Application.create({
  loading: false,
});

export default application;
