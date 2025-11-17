<script setup lang="ts">
import { ref } from 'vue';
import { useSeoMeta } from "nuxt/app";

useSeoMeta({
  title: "Schedule a meeting to get your quote"
});

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: 'General Inquiry',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  // Add your form submission logic here
};

const openIndex = ref<number | null>(null);

const faqs = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, we offer priority support to our clients with active projects.'
  },
  {
    question: 'What are your business hours?',
    answer: 'Our business hours are Monday through Friday, 9:00 AM to 6:00 PM EST. However, we have team members across different time zones to provide extended coverage for our global clients.'
  },
  {
    question: 'Do you offer phone support?',
    answer: 'Yes, we offer phone support for all active clients. Once you start a project with us, you\'ll receive direct contact information for your dedicated project manager.'
  },
  {
    question: 'Can I schedule a consultation?',
    answer: 'Absolutely! We offer free initial consultations to discuss your project requirements. You can schedule a consultation through our contact form or by calling us directly.'
  },
  {
    question: 'What information should I include in my inquiry?',
    answer: 'Please include details about your project goals, timeline, budget range, and any specific technical requirements. The more information you provide, the better we can understand your needs and provide an accurate quote.'
  },
  {
    question: 'Do you provide support in multiple languages?',
    answer: 'Yes, our diverse team can provide support in multiple languages including English, Spanish, and French. Let us know your language preference when you contact us.'
  }
];

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#F7B94A]">
      <h1 class="text-4xl md:text-5xl font-semibold text-white">
        Get in Touch with Us
      </h1>

      <p class="mt-6 max-w-3xl text-lg text-white/90 leading-relaxed">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
    </section>

    <!-- Contact Section -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Column - Contact Info -->
          <div>
            <h2 class="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Let's Start a Conversation
            </h2>
            
            <p class="text-[#666666] mb-12">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <!-- Visit Us -->
            <div class="mb-8 flex items-start gap-4">
              <div class="w-12 h-12 bg-[#FFF9F1] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#F7B94A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">Visit Us</h3>
                <p class="text-[#666666]">
                  27 Old Gloucester Street, London,<br />
                  United Kingdom, WC1N 3AX
                </p>
              </div>
            </div>

            <!-- Call Us -->
            <div class="mb-8 flex items-start gap-4">
              <div class="w-12 h-12 bg-[#FFF9F1] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#F7B94A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">Call Us</h3>
                <p class="text-[#666666]">+1 (555)</p>
              </div>
            </div>

            <!-- Email Us -->
            <div class="mb-12 flex items-start gap-4">
              <div class="w-12 h-12 bg-[#FFF9F1] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#F7B94A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">Email Us</h3>
                <p class="text-[#666666]">support@trevidia.com</p>
              </div>
            </div>

            <!-- Follow Us -->
            <div>
              <h3 class="text-xl font-semibold text-[#1A1A1A] mb-4">Follow Us</h3>
              <div class="flex gap-4">
                <a href="#" class="text-[#000000] hover:text-[#F7B94A] transition-colors" aria-label="X (Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" class="text-[#0A66C2] hover:text-[#F7B94A] transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="text-[#E4405F] hover:text-[#F7B94A] transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" class="text-[#1877F2] hover:text-[#F7B94A] transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Column - Contact Form -->
          <div class="bg-[#FFF9F1] rounded-2xl p-8">
            <form @submit.prevent="handleSubmit">
              <!-- Name Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-[#1A1A1A] mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    placeholder="Enter First Name"
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7B94A] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7B94A] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter Email"
                  class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7B94A] focus:border-transparent"
                  required
                />
              </div>

              <!-- Phone -->
              <div class="mb-6">
                <label for="phone" class="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="Enter Phone number"
                  class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7B94A] focus:border-transparent"
                />
              </div>

              <!-- Subject Dropdown -->
              <div class="mb-6">
                <label for="subject" class="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7B94A] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Quote">Project Quote</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Career Opportunities">Career Opportunities</option>
                </select>
              </div>

              <!-- Message -->
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Subject
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  placeholder="Tell us how we can help you ..."
                  class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7B94A] focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full py-4 bg-[#F7B94A] text-white font-semibold rounded-lg hover:bg-[#e5a739] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-6 bg-[#FFF9F1]">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-[#666666] text-lg">
            Find answers to common questions about our services and support.
          </p>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200"
          >
            <!-- Question Button -->
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span class="text-[#1A1A1A] font-medium pr-4">
                {{ faq.question }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-[#666666] flex-shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openIndex === index }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <!-- Answer Content -->
            <div
              v-show="openIndex === index"
              class="px-6 pb-5"
            >
              <p class="text-[#666666] leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>

        <!-- Still have questions CTA -->
        <div class="mt-12 text-center">
          <p class="text-[#666666] mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            class="inline-block px-8 py-3 bg-[#F7B94A] text-white font-medium rounded-full hover:bg-[#e5a739] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Custom select arrow */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em;
  padding-right: 2.5rem;
}
</style>