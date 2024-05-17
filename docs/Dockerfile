FROM nginx

WORKDIR /web
USER root

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./.vitepress/dist/  /web/docs

EXPOSE 5001

CMD ["nginx", "-g", "daemon off;"]