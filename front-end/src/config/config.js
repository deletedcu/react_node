const config = {
  //apiBaseUrl: 'http://ec2-54-173-96-184.compute-1.amazonaws.com:8080/api',
  apiBaseUrl: window.location.href.includes('localhost') ? 'http://localhost:8080/api' : 'http://ec2-54-173-96-184.compute-1.amazonaws.com:8080/api',
}

export default config
