<script setup lang="ts">
const socialLinks = [
  {
    title: "facebook",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" class="fill-current hover:fill-white" viewBox="0 0 24 24">
    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
    </svg>
    `,
    href: "https://web.facebook.com/trevidia.uk"
},
{
  title: "instagram",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" class="fill-current hover:fill-white" viewBox="0 0 24 24">
    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
    </svg>
      `,
  href: "https://www.instagram.com/trevidia_",
},
{
  title: "twitter",
  icon: `
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" class="fill-current hover:fill-white" viewBox="0 0 24 24">
      <path d="M 3.59375 3 C 3.38675 3.406 3.348625 3.4807187 3.140625 3.8867188 L 9.3339844 12.462891 L 2.3984375 21 L 4.9765625 21 L 10.548828 14.142578 L 15.5 21 L 20.40625 21 C 20.61325 20.594 20.651375 20.519281 20.859375 20.113281 L 13.724609 10.232422 L 19.601562 3 L 17.023438 3 L 12.511719 8.5546875 L 8.5 3 L 3.59375 3 z M 6.4101562 5 L 7.4765625 5 L 17.587891 19 L 16.523438 19 L 6.4101562 5 z"></path>
      </svg>
      `,
  href: "https://x.com/trevidia_/",
},
{
  title: "tiktok",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" class="fill-current hover:fill-white" viewBox="0 0 64 64">
        <path d="M40.227,12C51.146,12,52,12.854,52,23.773v16.453C52,51.145,51.146,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227\tV23.773C12,12.854,12.855,12,23.773,12H40.227z M42.732,29.737v-4.196c0,0-2.218,0.011-4.091-1.705\tc-1.574-1.442-1.705-4.143-1.705-4.143h-4.196c0,0,0,14.318,0,16.6c0,2.281-1.985,3.462-3.409,3.462\tc-1.073,0-3.514-0.841-3.514-3.488c0-2.778,2.806-3.488,3.54-3.488c0.734,0,1.023,0.157,1.023,0.157v-4.429\tc0,0-0.682-0.065-1.18-0.082c-4.235-0.143-7.736,3.657-7.736,7.841c0,3.535,2.765,7.815,7.815,7.815\tc5.379,0,7.841-4.486,7.841-7.789c0-2.413,0-8.234,0-8.234s1.547,0.865,2.806,1.259C41.185,29.711,42.732,29.737,42.732,29.737z"></path>
    </svg>
    `,
  href: "https://www.tiktok.com/@trevidia",
},
{
  title: "youtube",
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" class="fill-current hover:fill-white" viewBox="0 0 24 24">
    <path d="M18.672,3.442C16.712,3.149,14.468,3,12,3S7.288,3.149,5.328,3.442C3.399,3.732,2,5.354,2,7.298v9.404\tc0,1.944,1.399,3.566,3.328,3.855C7.288,20.851,9.532,21,12,21s4.712-0.149,6.672-0.442C20.601,20.268,22,18.646,22,16.702V7.298\tC22,5.354,20.601,3.732,18.672,3.442z M15.658,12.532l-4.724,2.798c-0.416-0.237-0.517-0.295-0.934-0.532V9.202\tc0.416-0.237,0.517-0.295,0.934-0.532l4.724,2.798C15.658,11.938,15.658,12.062,15.658,12.532z"></path>
    </svg>
    `,
  href: "https://youtube.com/@trevidia",
}
]
const siteLinks = [
  {
    category: "company",
    links: [
      {
        to: "/about-us",
        title: "About us"
      },
      {
        to: "/team",
        title: "Our Team"
      },
      {
        to: "/contact",
        title: "Contact us"
      },
      {
        to: "/privacy-policy",
        title: "Privacy policy"
      },
      {
        to: "/terms-of-service",
        title: "Terms of Service"
      },
    ]
  },
  {
    category: "resources",
    links: [
      {
        to: "/industries",
        title: "Industries"
      },
      {
        to: "/technologies",
        title: "Technologies"
      },
      {
        to: "/blog",
        title: "Blog"
      },
      {
        to: "/portfolio",
        title: "Portfolio"
      },
    ]
  },
  {
    category: "services",
    links: [
      {
        to: "/",
        title: "Web development"
      },
      {
        to: "/",
        title: "Ai Powered Solutions"
      },
      {
        to: "/",
        title: "Software development"
      },
      {
        to: "/",
        title: "Automation and integration"
      },
      {
        to: "/",
        title: "UI / UX Design"
      },
      {
        to: "/",
        title: "Saas Design"
      },
      {
        to: "/",
        title: "Saas Development"
      },
      {
        to: "/",
        title: "Mobile App Development"
      },
      {
        to: "/",
        title: "Maintenance and Support"
      },
      {
        to: "/",
        title: "Payment integration"
      },
    ]
  },
]
</script>

<template>
  <footer class="py-9 px-4 md:px-10 lg:px-16 bg-[#494949] text-[#D1D5DB]">
    <div>
      <div class="space-y-4">
        <img src="/assets/img/logo-transparent-horizontal-darkmode.png" alt="footer logo" class="w-[110px] h-[50px] object-contain"/>
        <div class="space-y-1">
          <p class="text-balance text-sm/6 text-white">
            Trusted by startups and enterprises to build what's next
          </p>
          <p class="text-balance text-sm/6 hover:underline">
            <NuxtLink to="mailto:contact@trevidia.co.uk">
              contact@trevidia.co.uk
            </NuxtLink>
          </p>
          <p class="text-balance text-sm/6 hover:underline">
            <NuxtLink to="tel:+442080400214">
              +44 208-0400-214
            </NuxtLink>
          </p>
          <p class="text-balance text-sm/6 hover:underline">
            <NuxtLink to="tel:+13692086805">
              +1(369)208-6805
            </NuxtLink>
          </p>
          <p class="text-balance text-sm/6">
            27 Old Gloucester Street, Greater London, United Kingdom, WNCX 3AX
          </p>
        </div>
        <div class="flex gap-x-6 items-center">
          <NuxtLink v-for="link in socialLinks" :to="link.href" :key="link.title" rel="noopener noreferrer nofollow">
            <span class="social-link-label">{{link.title}}</span>
            <span v-html="link.icon"></span>
          </NuxtLink>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 w-full text-sm/6">
        <div v-for="group in siteLinks" :key="group.category">
          <h3 class="font-semibold capitalize text-white">{{group.category}}</h3>
          <ul class="space-y-4 mt-6">
            <li v-for="link in group.links" class="capitalize">
              <NuxtLink :to="link.to">
                {{link.title}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <div class="mt-16 sm:mt-20 pt-8 border-t border-white/10">
        &copy; {{ new Date().getFullYear()}} Trevidia Ltd, All rights reserved
      </div>
    </div>
  </footer>
</template>
