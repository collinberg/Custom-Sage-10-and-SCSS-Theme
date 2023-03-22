<section class='footer-cta py-4 lg:py-10'>
  <div class='mx-auto px-5'>
    <div class="w-1/2">
      <p>We’d love to hear about your brand and business challenges, even if you’re not sure what your next step is. </p>
      <a href="">Let's Chat</a>
    </div>
  </div>
</section>
<footer class="content-info pt-4 lg:pt-10">
  <div class="flex py-3 mx-5 lg:mx-10">
    <div class="w-full">
       @php(dynamic_sidebar('sidebar-footer'))
    </div>
  </div>
  <div class='footer-utility flex justify-between border-top-2 py-3 mx-5 lg:mx-10'>
    <div class='social-wrap'>
      
      <x-fab-facebook-square class="w-6 h-6" />
      <x-fab-instagram-square class="w-6 h-6" />
      <x-fab-twitter-square class="w-6 h-6" />
      <x-fab-linkedin class="w-6 h-6" />
    </div>
    <div class='copyright-wrap font-sm'>
      <span class='mr-3 '>Women Owned Enterprise</span>
      <span class="copyright">&copy;{!! date("Y") !!}
       {!! $siteName !!}</span>
    </div>
  </div>
</footer>
