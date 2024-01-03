#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((data) => data);
}
