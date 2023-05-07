---
layout: page.njk
title: events
---

<div class="row" data-masonry='{"percentPosition": true }'>
  {% for e in collections.events %}
  <div class="col-xs-7 col-sm-5 col-md-4 p-1 m-1" style = "border-style:solid;border-weight:0.5px">
    <img class="img-fluid" src = "{{e.data.img}}">
    <h3>{{ e.data.title }}</h3>
    <p>{{e.data.type }} | {{ e.data.datetime }}</p>
    <p>{{ e.data.location }}</p>

  </div>
  {% endfor%}
</div>
