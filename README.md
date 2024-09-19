# Design

https://www.figma.com/proto/UTSHnl4GI0wUIGowlzN1bw/Mandaljazz?page-id=1%3A4&type=design&node-id=25-44&viewport=-4445%2C-4371%2C1.02&t=MV6D43DmeedciQjP-1&scaling=min-zoom

# Redaktører

Gå [hit](https://github.com/mandaljazz/mandaljazz-astro/tree/main/src/pages/artist) og trykk på `Add file` for å legge til nye artister.

# Videokonvertering

Bruk noe sånt som denne, og spør ChatGPT om råd hvis du trenger noe mer fancy:

```
ffmpeg -i input.mp4 -an -c:v libx264 -crf 24 -preset medium -vf scale=640:-1 output.mp4
```
