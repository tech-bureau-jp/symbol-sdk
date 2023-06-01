FROM node:18-buster

LABEL "com.vendor"="Techbureau, Corp." \
      version="1.0" \
      description="This container is Node js"

RUN apt update -y && apt install python3 cmake g++ git -y

ARG WORK_DIR=/myapps

RUN mkdir -p ${WORK_DIR}
WORKDIR ${WORK_DIR}


COPY ./dockerd-entrypoint.sh /
RUN chmod 777 /dockerd-entrypoint.sh
ENTRYPOINT ["sh", "/dockerd-entrypoint.sh"]