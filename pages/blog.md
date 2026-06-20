---
layout: default
title: Blog
description: "Klinik Psikolog İlknur Çetin'in kaygı, bağlanma stilleri, depresyon ve kişisel gelişim üzerine yazıları."
permalink: /blog/
---

<section class="blog-page">
  <div class="container">

    <header class="blog-page-header">
      <h1 class="blog-page-title">Blog</h1>
      <p class="blog-page-subtitle">Psikoloji, ruh sağlığı ve kişisel gelişim üzerine yazılar.</p>
    </header>

    {% if site.posts.size > 0 %}
    <div class="blog-grid">
      {% for post in site.posts %}
      {% assign month_num = post.date | date: "%m" %}
      {% assign words = post.content | number_of_words %}
      {% assign reading_time = words | divided_by: 200 %}
      {% if reading_time < 1 %}{% assign reading_time = 1 %}{% endif %}

      <article class="post-card">
        <div class="post-card-body">

          {% if post.tags.size > 0 %}
          <div class="post-card-tags" aria-label="Etiketler">
            {% for tag in post.tags limit: 2 %}
            <span class="tag-badge tag-badge--sm">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}

          <h2 class="post-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>

          {% if post.excerpt %}
          <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
          {% endif %}

        </div>

        <footer class="post-card-footer">
          <time class="post-card-date" datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%-d" }} {{ site.data.months[month_num] }} {{ post.date | date: "%Y" }}
          </time>
          <span class="post-card-reading">{{ reading_time }} dk</span>
          <a href="{{ post.url | relative_url }}" class="post-card-link" aria-label="{{ post.title }} yazısını oku">
            Oku
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </a>
        </footer>
      </article>
      {% endfor %}
    </div>

    {% else %}
    <p class="blog-empty">Henüz yazı yok. Yakında görüşmek üzere.</p>
    {% endif %}

  </div>
</section>
