import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({ base: "/seovyn-fw-remix/", plugins: [reactRouter()] });
