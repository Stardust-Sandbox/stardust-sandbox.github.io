---
layout: page
title: Legacy Edition | Changelog
permalink: /legacy/changelog/
---

## Version History

<table>
    <thead>
        <tr>
            <th>Version</th>
            <th>Release Date</th>
            <th>Highlights and Notes</th>
        </tr>
    </thead>
    <tbody>
    {% for changelog in site.changelogs %}
        <tr>
            <td><a href="{{ changelog.url }}">{{ changelog.version }}</a></td>
            <td>{{ changelog.date | date_to_string }}</td>
            <td>{{ changelog.highlights }}</td>
        </tr>
    {% endfor %}
    </tbody>
</table>
