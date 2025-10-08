export default defineNuxtPlugin({
    name: 'gtm',
    async setup (){
        if (!import.meta.dev){
            const config = useRuntimeConfig();
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',config.public.gtmId);
        }
        if (import.meta.prod){
            console.log("yayyy I'm a dev")
        } else {
            console.log(import.meta.prod)
        }
        return {
            provide: {
                gtag: (data) => {
                    const dataLayer = 'dataLayer';
                    window[dataLayer] = window[dataLayer]
                    window[dataLayer].push(data)
                }
            }
        }
    },
})