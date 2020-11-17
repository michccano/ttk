import TikTokAPI, { getRequestParams } from 'tiktok-api';

// Required - a method that signs the URL with anti-spam parameters
// You must provide an implementation yourself to successfully make
// most requests with this library.
const signURL = async (url, ts, deviceId) => {
  const as = 'anti-spam parameter 1';
  const cp = 'anti-spam parameter 2'
  const mas = 'anti-spam parameter 3';
  return `${url}&as=${as}&cp=${cp}&mas=${mas}`;
}

// Required - device parameters
// You need to source these using a man-in-the-middle proxy such as mitmproxy,
// CharlesProxy or PacketCapture (Android)
const params = getRequestParams({
  device_id: '6848833020142405382',
  fp: '<device_fingerprint>',
  iid: '6848833020142405382',
  openudid: '926b5dfef248c186',
});

console.log("ADASD");
const api = new TikTokAPI(params, { signURL });
