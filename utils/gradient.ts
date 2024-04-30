import color from "tinycolor2";

// Async function to generate a SHA-256 hash of a string and return as an integer
async function sha256ToHue(username: string) {
  const salted = username + "-salt4";
  const encoder = new TextEncoder();
  const data = encoder.encode(salted);
  const hashBuffer = await crypto.subtle.digest("SHA-512", data);
  const hashArray = new Uint8Array(hashBuffer);

  let hashBigInt = BigInt(0);
  for (let i = 0; i < hashArray.length; i++) {
    hashBigInt = (hashBigInt << BigInt(8)) | BigInt(hashArray[i]);
  }

  const normalizedValue = Number(hashBigInt % BigInt(360));
  return normalizedValue;
}

// Async function to generate a gradient from a username
export async function generateGradient(username: string) {
  const hue = await sha256ToHue(username);
  const c1 = color({ h: hue, s: 0.95, l: 0.5 });
  const second = c1.triad()[1].toHexString();

  return {
    fromColor: c1.toHexString(),
    toColor: second,
  };
}
