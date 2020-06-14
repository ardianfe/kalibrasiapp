export default function ({
  $axios,
  store,
  redirect
}) {
  $axios.onRequest(config => {
    config.headers.common['Accept'] = 'application/json';
    config.headers.common['Content-Type'] = 'application/json';
    console.log('Making request to ', config);
  });
}