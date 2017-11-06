export default {
  path: 'tooltip',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Tooltip').default);
    });
  }
};