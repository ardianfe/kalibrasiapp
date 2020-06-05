export default function ({
  $axios,
  store,
  redirect
}) {
  $axios.onRequest(config => {
    config.headers.common['Accept'] = 'application/json';
    config.headers.common['Content-Type'] = 'application/json';
    config.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTEzNTc5MjUsIm5iZiI6MTU5MTM1NzkyNSwianRpIjoiZmRkMjNhNWMtNjQ2NS00NTk0LWExODQtYmY1MjUxNTJiNjIyIiwiZXhwIjoxNTkxOTYyNzI1LCJpZGVudGl0eSI6IjVlZDExYTkwOThjYTdmMWQ3MzhkYzhlZCIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.L4oMkOm9hI8yrJW3EU5mj4_5ZC6p5MEOa8aV6aRH_Hw';
    console.log('Making request to ', config);
  });
}