type ImageOptimizeOptions = {
  widths?: number[];
  quality?: number;
};

export function optimize(src: string, options?: ImageOptimizeOptions): string {
  const widths = options?.widths ?? [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,];
  const quality = options?.quality ?? 75;
  const isContentful = /^(https?:\/\/|\/\/)images\.ctfassets\.net/.test(src);
  const baseUrl = isContentful ? `${src}?fm=webp` : `/_vercel/image?type=webp&url=${encodeURIComponent(src)}`;

  if (!isContentful && process.env.NODE_ENV === 'development') return src;

  return widths
    .slice()
    .sort((a, b) => a - b)
    .map((width, i) => {
      const url = `${baseUrl}&w=${width}&q=${quality}`;
      const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
      return url + descriptor;
    })
    .join(', ');
}
