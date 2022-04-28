# syntax=docker/dockerfile:1.0.0-experimental

# Build command: 
#       sudo DOCKER_BUILDKIT=1 docker build --no-cache --ssh default=${SSH_AUTH_SOCK} -t <name> .

# Run command:
#       sudo docker run -ti --rm -p 3000:3000 <name>

# Installs
FROM node:16

# ----------shared_autonomy: Fetch code, catkin_make it---------
RUN mkdir -p -m 0600 /root/.ssh/ && ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts

WORKDIR /home

RUN --mount=type=ssh  git clone git@github.com:raunakbh92/nextjs-metacog.git

WORKDIR /home/nextjs-metacog
RUN npm install

# ----------entrypoint--------------
RUN chmod +x nextjs-metacog-entrypoint.sh
ENTRYPOINT ["/home/nextjs-metacog/nextjs-metacog-entrypoint.sh"]
