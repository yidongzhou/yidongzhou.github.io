---
layout: page
permalink: /photography/
title: Photography
nav_title: Photography
eyebrow: Places
description: Landscape photographs organized by location, with short notes from the trail.
nav: true
nav_order: 6
wide_content: true
---

<section class="photo-intro photo-intro--single">
  <p>Outside research, I enjoy hiking and landscape photography, usually with my camera. This is a collection of mountains, weather, and light, organized by place.</p>
</section>

<section class="photo-journal" aria-labelledby="journal-heading">
  <div class="section-heading">
    <h2 id="journal-heading">Locations</h2>
  </div>
  {% assign albums = site.photography | where_exp: 'album', 'album.published != false' | sort: 'title' %}
  {% if albums.size > 0 %}
    <div class="photo-card-grid">
      {% for album in albums %}{% include photo_card.liquid album=album %}{% endfor %}
    </div>
  {% else %}
    <div class="photo-empty">
      <span class="photo-empty-mark" aria-hidden="true">↗</span>
      <div><h3>The first essays are on the way.</h3><p>The publishing system is ready; future albums will appear here automatically.</p></div>
    </div>
  {% endif %}
</section>
