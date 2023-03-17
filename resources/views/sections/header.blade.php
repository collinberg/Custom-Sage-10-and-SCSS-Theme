<header class="banner bg-primary  bg-gray-800">
  <div class='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    <div class='relative flex h-16 items-center justify-between'>
    <a class="brand" href="{{ home_url('/') }}">
      {!! $siteName !!}
    </a>
  
    @if (has_nav_menu('primary_navigation'))
      <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav flex space-x-4', 'echo' => false]) !!}
      </nav>
    @endif
    </div>
  </div>
</header>
