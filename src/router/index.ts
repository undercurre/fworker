import CodeDelay from "../components/CodeDelay.vue";
import LongTask from "../components/LongTask.vue";
import PostTask from "../components/PostTask.vue";
import Yield2All from "../components/Yield2All.vue";
import Yield2Ness from "../components/Yield2Ness.vue";
import Yield2Time from "../components/Yield2Time.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/longTask" },
    { path: "/codeDelay", component: CodeDelay },
    { path: "/longTask", component: LongTask },
    { path: "/postTask", component: PostTask },
    { path: "/yield2All", component: Yield2All },
    { path: "/yield2Ness", component: Yield2Ness },
    { path: "/yield2Time", component: Yield2Time },
  ],
});

export default router;
