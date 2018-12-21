FROM tomcat:8-jre8
#FROM node:8-alpine
MAINTAINER Florian JUDITH <florian.judith.b@gmail.com>


ENV HTTP_PROXY='http://lucas.dure:Folio109!!@172.25.254.203:9090'
#RUN npm config set proxy "${HTTP_PROXY}"
#RUN npm config set http-proxy "${HTTP_PROXY}"
#RUN npm config set https-proxy "${HTTP_PROXY}"
#RUN npm config set strict-ssl false
ENV http_proxy "${HTTP_PROXY}"
ENV https_proxy "${HTTP_PROXY}"

ENV TERM='xterm'

ENV SQUASH_TM_VERSION='1.17.0'
ENV SQUASH_TM_URL='http://www.squashtest.org/telechargements/send/13-version-stable/269-stm-1170-targz'
ENV CATALINA_HOME='/usr/local/tomcat'
ENV JAVA_OPTS="-Xmx1024m -XX:MaxPermSize=256m"

#RUN apk add --no-cache curl
#RUN apk add --no-cache bash
RUN apt-get -y update && apt-get -y install \
	postgresql-client \
	mysql-client \
	xmlstarlet \
	nano 
#RUN apk --update add openjdk8-jre
RUN mkdir -p /usr/local/tomcat/conf/Catalina/localhost

COPY conf/squash-tm.xml /usr/local/tomcat/conf/Catalina/localhost/squash-tm.xml

RUN cd /usr/share && \
	curl -L ${SQUASH_TM_URL} | gunzip -c | tar x

# Copy WAR to webapps
RUN mkdir -p ${CATALINA_HOME}/webapps/
RUN cp /usr/share/squash-tm/bundles/squash-tm.war ${CATALINA_HOME}/webapps/

COPY docker-entrypoint.sh /usr/share/squash-tm/bin/docker-entrypoint.sh



COPY conf/log4j2.xml /usr/share/squash-tm/bin/conf/

EXPOSE 8080
#WORKDIR ${CATALINA_HOME}

WORKDIR /usr/share/squash-tm

COPY squash.tm.cfg.properties /usr/share/squash-tm/conf
COPY startup.sh /usr/share/squash-tm/bin
RUN chmod +x /usr/share/squash-tm/bin/startup.sh
WORKDIR /usr/share/squash-tm/bin
ENTRYPOINT ["/usr/share/squash-tm/bin/startup.sh"]

CMD ["startup.sh", "sh"]
