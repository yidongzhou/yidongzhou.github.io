---
layout: page
permalink: /photography/
title: Photography
nav_title: Photography
nav: true
nav_order: 6
wide_content: true
---

<p class="photo-intro">Outside research, I enjoy hiking and landscape photography, usually with my camera.</p>

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
    <p>No albums yet.</p>
  {% endif %}
</section>
