FROM hayd/deno:alpine-1.10.2

WORKDIR /app

RUN deno install -qA -n vr https://deno.land/x/velociraptor@1.0.0-beta.18/cli.ts

COPY . .

CMD ["vr", "prod"]
