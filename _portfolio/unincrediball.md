---
layout: page
title: Unincrediball
permalink: /unincrediball/

category: Environment, VFX and Technical Art.
description: 3v3 sports video game developed in Unreal Engine.

image_path: /images/portfolio/unincrediball/
main_image: UnincrediBall_Banner_02.png
alt: A digital soccer field that was used in the game.

gallery: [AerialField.png, BallShader.jpg, CharacterShaders.jpg, FieldAndMaterial.jpg, HUD_Design.jpg]
descriptions: [Aerial view of the field used in the game., Disappearing shader made with Unreal's material editor., Toon shader used for the characters., Grass shader with parallax occlusion., HUD UI design.]
---

UnincrediBall is a 3 v 3 brawler/sports game where the player takes control of one out of six unique super heroes.

The game was made in Unreal Engine by a six person core team and fourteen collaborators, including writers, voice actors, music producers and mocap actors.

My tasks on the project included modelling the game arena and its props, designing and implementing the different particle effects found on the game, developing the materials, making the art for the UI and facilitating the implementation of character animations through the Animation Graph.

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

## Watch the game's trailer!

<div class="video-widget">
  <div class="video-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/8p0cg7yDg8s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
  </div>
</div>

{: .center-div}
[See the game](http://community.vfs.com/arcade/game/unincrediball/){: .btn}