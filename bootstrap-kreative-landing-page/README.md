Bootstrap multi-row-columns layout can be accomplished using to different approaches:

```html
<!-- First -->
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
  <div class="col">content</div>
  <div class="col">content</div>
  <div class="col">content</div>
</div>

<!-- Second -->
<div class="row">
  <div class="col-12 col-sm-6 col-lg-4">content</div>
  <div class="col-12 col-sm-6 col-lg-4">content</div>
  <div class="col-12 col-sm-6 col-lg-4">content</div>
</div>
```

In order to make all these columns same height tall, `height: 100%` must be applied in the `content`'s wrapper, not in the `col`.

It is not a good idea to use the same `div.col` for `div.wrapper` purposes because of the earlier has some builtin spacing configuration. Do this instead:

```css
<div class="col">
  <div class="wrapper">
    content
  </div>
</div>
```

The best way I know of to implement the overlay effect seen in the `projects` section is by writing:

```css
.projects-image {
  transition: var(--transition);
}

.projects-image img {
  mix-blend-mode: overlay;
}

.projects-image:hover {
  background-color: var(--overlay);
}
```

But unfortunately there is a Firefox bug<sup>1</sup> that completely hides the image, showing it only when it is hovered. So, I had to implement it using `pseudo-elements`. The result is exactly the same effect.

<sup>1</sup> I tried some workaround but they didn't work.

a porra da grid nao pega a altura inteira do container
ai o align-self nao funciona
pensei na solucao depois de 1h parado
poderia tentar usar o .card header, ou .border-bottom
