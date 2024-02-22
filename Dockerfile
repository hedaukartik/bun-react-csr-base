FROM oven/bun:1
WORKDIR /app
COPY . .
RUN bun install
 
ENV PORT 3001
 
CMD ["bun", "dev"]