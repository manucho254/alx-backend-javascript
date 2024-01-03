#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload]).then((data) => {
    if (data) {
      console.log(data);
    }
  });
}
