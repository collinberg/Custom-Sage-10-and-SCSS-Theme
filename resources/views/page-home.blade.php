{{--
  Template Name: Home Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile
<section class='home-section'>
  <div class='fluid-container'>
    <h1>Section Title</h1>
  </div>
</section>
<section class='home-section'>
  <div class='fluid-container'>
    <h2>Section Title</h2>
  </div>
</section>
<section class='home-section'>
  <div class='fluid-container'>
    <h2>Section Title</h2>
  </div>
</section>
@endsection
