---
layout: page.njk
title: events
---

<div class="row masonry" data-masonry='{"percentPosition": true }'>
  {% for e in collections.events %}

  <div class="item col-xs-7 col-sm-5 col-md-4 p-1 m-2 filter-overlay" style = "border-style:solid;border-width:0.1px">

{% if e.data.url%}

<a href = {{e.data.url}} class = "event">
  
{% else %}
    <a href = {{e.url}} class = "event">
{% endif %}
    <img class="img-fluid event filter" src = "{{e.data.img}}">
    <h3>{{ e.data.title }}</h3>
    <h5>{{ e.data.subtitle }}</h5>
    <p>{{e.data.type }} | {{ e.data.datetime }}</p>
    <p>{{ e.data.location }}</p>

  </a>
  </div>
  
  {% endfor%}
</div>
