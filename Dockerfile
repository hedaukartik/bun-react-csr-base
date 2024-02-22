FROM oven/bun:1
WORKDIR /
COPY . .
RUN bun install

RUN bun run build

COPY public/ build/
 
ENV PORT 3000
 
CMD ["bun", "dev"]