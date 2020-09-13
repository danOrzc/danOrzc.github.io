---
layout: page
title: Esferanza
permalink: /esferanza/

category: 2D Art and Animation.
description: Short Animated Film sent to EcoFilm festival.

image_path: /images/portfolio/esferanza/
main_image: Esferanza.png
alt: Poster of the short film Esferanza.

gallery: [[CasasLuces.png,],
          [CiudadBonita.png,],
          [CiudadFea.png,],
          [CiudadNormal.png,],
          [FondoAgua.png,],
          [FondoBosque.png,],
          [FondoHeroes.png,],
          [FondoLavadora.png,],
          [Inundacion.png,]]
---

2D short film made in collaboration with a friend for the Eco Film Festival.

The short tells the story of a group of people who started caring about the planet when a bunch of bubbles created by "unconcious actions" menaced with destroying it.

Esferanza was chosen to be part of the Official Selection of the festival.

## Gallery

<div class="portfolio-container">
{% for image in page.gallery %}
  <div class="gallery">
    <a target="_blank" href="{{ page.image_path }}{{ image[0] }}">
      <img class="gallery-image" src="{{ page.image_path }}{{ image[0] }}">
    </a>
    <div class="desc">{{ image[1] }}</div>
  </div>
{% endfor %}
</div>

## Watch the film here!

<div class="video-widget">
  <div class="video-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/KsxvSRcPVlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
  </div>
</div>