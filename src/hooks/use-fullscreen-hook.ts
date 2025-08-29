// 全屏
export function useFullscreenHook() {
  const isFullscreen = ref(false);

  const fullscreenchange = () => {
    isFullscreen.value = document.fullscreenElement !== null;
  };

  const toggleFullscreen = () => {
    if (!isFullscreen.value) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  onMounted(() => {
    document.addEventListener("fullscreenchange", fullscreenchange);
  });

  onUnmounted(() => {
    document.removeEventListener("fullscreenchange", fullscreenchange);
  });

  return {
    isFullscreen,
    toggleFullscreen
  };
}
