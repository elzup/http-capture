const crypto = require("crypto");
const hmacSha256 = (payload, secretKey) => {
  const hmac = crypto.createHmac("sha256", secretKey);

  hmac.update(payload);
  return hmac.digest("hex");
};

const btoa = (s) => Buffer.from(s, "base64").toString("ascii");
const atob = (s) => Buffer.from(s).toString("base64");

const body = `{"userId":"takahashi@planckunits.com","siteName":"現場","deviceId":"TEST_ID","timestamp":1602235649,"mode":"test","data":[]}`;
const secretKey = btoa("ZWdKV3piU2lOTmllSDFIS2x6S2pZVXY4azdPSVN0U3c=");

const digest = hmacSha256(body, secretKey);
const signature = atob(digest);
console.log({ digest, signature });
