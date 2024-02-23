FROM oven/bun:1
WORKDIR /
COPY . .
RUN rm -rf node_modules && \
    bun install --ci

RUN bun run build

COPY public/ build/
 
ENV PORT 3000
 
CMD ["bun", "run", "prod"]