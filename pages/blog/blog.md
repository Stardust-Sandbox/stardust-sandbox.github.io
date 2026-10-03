---
layout: page
title: Blog
permalink: /blog/
---

## Content

<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {% for post in site.posts %}
      <tr>
        <td><a href="{{ post.url }}">{{ post.title }}</a></td>
        <td>{{ post.date | date_to_string }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
