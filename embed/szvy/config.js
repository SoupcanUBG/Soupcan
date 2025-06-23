// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/embed/szvy/szvy/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.base64.encode,
  decodeUrl: Ultraviolet.codec.base64.decode,
  handler: "handler.js",
  client: "client.js",
  bundle: "bundle.js",
  config: "config.js",
  sw: "rizz.sw.js",
};
