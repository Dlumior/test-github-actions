import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
//   base: "/vite-config"
// })


export default ({ command, mode }) => {
  if (mode === 'production') {
    return {
      plugins: [reactRefresh()],
      base: "/vite-config/"
    }
  } else {
    return {
      plugins: [reactRefresh()],
    }
  }
}
