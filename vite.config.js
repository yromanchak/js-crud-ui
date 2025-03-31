import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop();
        
          if (["png", "jpg", "jpeg", "svg", "webp"].includes(ext)) {
            return "assets/images/[name]-[hash][extname]";
          } else if (ext === "css") {
            return "assets/css/[name]-[hash][extname]";
          } 
        },
      }
    },
    manifest: true,
  }
});