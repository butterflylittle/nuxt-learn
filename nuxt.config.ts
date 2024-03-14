// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //源文件
  srcDir: 'src',
  //模块
  modules: ['@nuxtjs/tailwindcss'],
  //配置
  runtimeConfig:{
    public:{
      appName: 'My App'
    },
    //surrealDB
    surreal:{
      rootUser: 'root',
      rootPass:'258369'
    }
  }
})
