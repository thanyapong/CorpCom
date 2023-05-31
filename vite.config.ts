import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { writeFile } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const {
    VITE_APP_NAME,
    VITE_APP_VERSION,
    VITE_APP_DESCRIPTION,
    VITE_BASE_URL,
  } = env;

  let defaultConfig = {
    plugins: [react()],
  };

  let APP_INFO = {
    name: VITE_APP_NAME,
    version: VITE_APP_VERSION,
    since: "2023",
    description: VITE_APP_DESCRIPTION,
    contactUrl: "https://www.siamsmile.co.th",
  };


  if (command === "serve") {
    // const viteEnv = Object.keys(env)
    //   .filter((key) => key.startsWith("VITE_"))
    //   .reduce((acc, key) => {
    //     acc[key] = env[key];
    //     return acc;
    //   }, {});
    // console.log("Configuration :", viteEnv);

    console.log("\nEnvirontment :", "local");
    APP_INFO.name += " [Local]";

    createConfig(writeFile, APP_INFO);

    let config = {
      ...defaultConfig,
      base: VITE_BASE_URL,
      server: {
        port: 3000,
        open: true,
      },
    };

    console.log("\nConfiguration :", config);

    return config;
  }

  console.log("\nEnvirontment :", mode);
  if (mode !== "") {
    APP_INFO.name += " [" + mode + "]";
  }

  createConfig(writeFile, APP_INFO);

  return {
    ...defaultConfig,
    base: VITE_BASE_URL,
    build: {
      outDir: mode,
      emptyOutDir: true,
    },
  };
});

function createConfig(writeFile, appInfo) {
   console.log("\nApp Info :", appInfo);

   writeFile("./public/config.json", JSON.stringify(appInfo), function (err) {
     if (err) throw err;
     console.log("\n./public/config.json created!\n");
   });
}