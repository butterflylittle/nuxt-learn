import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  //安全
  safelist: [],
  //主题
  theme: {
    extend: {
        //定义比例
        aspectRatio: {
            '4/3':'4 / 3',
            '1/1':'1 / 1',
        }
    },
  },
}
