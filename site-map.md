---
layout: default 
title: "Sitemap"
permalink: /site-map/
---
# Site Map
<br>

## __The Main Pages__ 
- <b><a href="{{ '/pennings/' | relative_url }}">Pennings</a></b> My thoughts and musings 

- <b><a href="{{ '/perusals/' | relative_url }}">Perusals</a></b> Bookshelf and antilibrary

- <b><a href="{{ '/pearls/' | relative_url }}">Pearls</a></b> Collection of quotes and poems

- <b><a href="{{ '/projects/' | relative_url }}">Projects</a></b> Design portfolio

- <b><a href="{{ '/persona/' | relative_url }}">Persona</a></b> About me


<br>
## __<a href="{{ '/wiki-index/' | relative_url }}">Personal Wiki </a>__ <span style="font-size: 1.1rem;">A digital garden of my own</span>

{% assign grouped_by_category = site.articles | group_by_exp: "item", "item.categories[0]" %}
<ul>
{% for category in grouped_by_category %}
  <li>
    <b><a href="{{ '/' | append: category.name | append: '/' | relative_url }}">{{ category.name | capitalize }}</a></b>

  </li>
{% endfor %}
</ul>

<br>
## <b> <a href="{{ '/glossary/' | relative_url }}">Glossary</a> </b> <span style="font-size: 1.1rem;">A personal dictionary</span>

<br>
## <b> <a href="{{ '/tags/' | relative_url }}">All Nodes</a> </b> <span style="font-size: 1.1rem;">The tags of my site</span>