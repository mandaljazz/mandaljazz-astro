Jens: Gå [hit](https://github.com/mandaljazz/mandaljazz-astro/tree/main/src/pages/artist) og trykk på `Add file` ✌️

# Videokonvertering

Bruk noe sånt som denne, og spør ChatGPT om råd hvis du trenger noe mer fancy:

```
ffmpeg -i input.mp4 -an -c:v libx264 -crf 24 -preset medium -vf scale=640:-1 output.mp4
```
