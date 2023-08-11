'use strict';

new TypeIt('.home__title__strong', {
  loop: true,
  speed: 110
}) // Dream Developer
    .move(-15)
    .type('Amazing ') // Amazing |Front-End Developer
    .pause(1000)
    .move(null, {to: 'END'}) // Amazing Front-End Developer|
    .delete() 
    .type('Front-End Developer ') // Front-End Developer|
    .pause(1500)
    .delete()
    .go();