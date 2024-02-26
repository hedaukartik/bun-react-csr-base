FROM oven/bun:1
WORKDIR /
COPY . .
RUN rm -rf node_modules && \
    bun install --ci
    
ENV PORT 3000
 
CMD ["bun", "run", "dev"]