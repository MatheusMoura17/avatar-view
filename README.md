# avatar-view
Biblioteca simples de renderização de avatares 3D para React Native e Web
![Alt text](images/image.png)

## Exemplo de uso:

```tsx
import { WebView } from 'react-native-webview';

const MacarenaDancer = () => {
  const webViewRef = useRef<WebViewRefType>(null);

  const handleMessage  = (e) => {
    if(e.nativeEvent.data === "ready"){
      const js = `
        playMacarena()
      `
      webViewRef.current?.injectJavaScript(js);
    }
  }

  return (
    <WebView 
      source={{ uri: 'https://github.com/MatheusMoura17/avatar-view' }} 
      style={{ flex: 1 }}
      onMessage={handleMessage}
      ref={webViewRef}
    />
  );
}
```

## Como usar

1. Crie um webview de `https://github.com/MatheusMoura17/avatar-view`.
2. Aguarde a mensagem `ready` ser recebida.
3. Injete um javascript no webview com os metodos disponíveis abaixo.

## Métodos disponíveis

- `toggleGlasses(boolean)`: Ativa ou desativa o acessório óculos
- `toggleMask(boolean)`: Ativa ou desativa o acessório óculos
- `playMacarena()`: O avatar começa a dançar macarena loucamente