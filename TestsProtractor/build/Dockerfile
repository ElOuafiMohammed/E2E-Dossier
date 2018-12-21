FROM node:8-alpine

#ARG HTTP_PROXY 

RUN npm config set proxy "http://172.25.254.203:9090"
RUN npm config set http-proxy "http://172.25.254.203:9090"
RUN npm config set https-proxy "http://172.25.254.203:9090"
RUN npm config set strict-ssl false
ENV http_proxy "http://172.25.254.203:9090"
ENV https_proxy "http://172.25.254.203:9090"

COPY dossierPackage/ /frontend
WORKDIR /frontend

RUN echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories \
    && apk add --no-cache \
    curl \
    bash 


RUN npm install
RUN npm install -g protractor
WORKDIR /frontend/conf




#CMD ["protractor"]
