export default {
  path: 'slick',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Slick').default);
    });
  }
};