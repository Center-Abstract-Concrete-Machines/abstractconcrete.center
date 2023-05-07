---
layout: page.njk
title: events
---

<div class="row" data-masonry='{"percentPosition": true }'>
  {% for e in elements %}
  <div class="col-xs-7 col-sm-5 col-md-4 py-1">
    <h3>{{ e.title }}</h3>

    {% for p in e.text%}

    <p>{{ p }}</p>

    {% endfor %}

  </div>
  {% endfor%}
</div>
