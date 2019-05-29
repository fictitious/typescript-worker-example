// This file must have worker types, but not DOM types.
// The global should be that of a service worker.
export default null;

const {clients, addEventListener} = self as ServiceWorkerGlobalScope;

addEventListener('fetch', (event) => {
  console.log(event.request);
});
