interface Window {
  toggleGlasses: (value: boolean) => void
  toggleMask: (value: boolean) => void
  playMacarena: () => void
  ReactNativeWebView?: {
    postMessage: (message: any) => void
  }
}
