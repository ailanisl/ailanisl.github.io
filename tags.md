---
layout: default-2
title: All Tags
permalink: /tags/
---
<style>
  .all-nodes {
    display: flex;
    flex-direction: wrap;
    flex-wrap: wrap;
  }

  .tag {
    width: fit-content;
    margin: 5px 2px;
    padding: 2px 6px;
  }
</style>

<nav class="breadcrumbs">
  <a href="/">Home</a>
  › <span>All Nodes</span>
</nav>

<h1>All Nodes</h1>
<div class= "all-nodes" >
  {% assign tag_pages = site.tags | sort: "title" %}
  {% for tag_page in tag_pages %}
      <a href="{{ tag_page.url | relative_url }}" class="tag">{{ tag_page.title }} ({% include tag-post-count.html tag=tag_page.tag %})
      </a>

  {% endfor %}
</div>