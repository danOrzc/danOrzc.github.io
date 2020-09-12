---
layout: page
title: Materials
permalink: /materials/

category: Textures, Materials and Shaders.
description: Created on different softwares.

image_path: /images/portfolio/materials/
main_image: UnityShaders.jpg
alt: Example of a material.

gallery: [UnityShaders.jpg, CirclePavement.png]
descriptions: [Different Shaders made in Unity's shaderlab., Circular pavement procedurally built in Substance Designer.]
---

These are different works I have put together using different tools.

I include shaders and textures I have used for my different projects and some others I have made for the sole purpose of practicing.

## Gallery

<div class="portfolio-container">
{% for image in page.gallery %}
  <div class="gallery">
    <a target="_blank" href="{{ page.image_path }}{{ image }}">
      <img class="gallery-image" src="{{ page.image_path }}{{ image }}">
    </a>
    <div class="desc">{{ page.descriptions[ forloop.index0 ] }}</div>
  </div>

{% endfor %}
</div>