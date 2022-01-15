import Element from 'element-plus'
import locale from 'element-plus/lib/locale/lang/ja'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Element, {locale});
});
