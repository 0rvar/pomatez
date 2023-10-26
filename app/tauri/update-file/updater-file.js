const fs = require("fs");

const github_url =
  "https://github.com/zidoro/pomatez/releases/download/v1.0.0/";

const data = {
  version: "v1.0.0",
  notes: "Test version",
  pub_date: "2020-06-22T19:25:57Z",
  platforms: {
    "darwin-x86_64": {
      signature: "Content of app.tar.gz.sig",
      url: `${github_url}app-x86_64.app.tar.gz`,
    },
    "darwin-aarch64": {
      signature: "Content of app.tar.gz.sig",
      url: `${github_url}app-aarch64.app.tar.gz`,
    },
    "linux-x86_64": {
      signature: "Content of app.AppImage.tar.gz.sig",
      url: `${github_url}app-amd64.AppImage.tar.gz`,
    },
    "linux-aarch64": {
      signature: "Content of app.AppImage.tar.gz.sig",
      url: `${github_url}app-amd64.AppImage.tar.gz`,
    },
    "windows-x86_64": {
      signature:
        "Content of app-setup.nsis.sig or app.msi.sig, depending on the chosen format",
      url: `${github_url}app-x64-setup.nsis.zip`,
    },
    "windows-aarch64": {
      signature:
        "Content of app-setup.nsis.sig or app.msi.sig, depending on the chosen format",
      url: `${github_url}app-x64-setup.nsis.zip`,
    },
  },
};

fs.writeFile("output.json", JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log("Data written to file");
});
