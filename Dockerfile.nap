# syntax=docker/dockerfile:1
# For Ubuntu 18.04:
FROM lb

RUN apt-get update && apt-get install -y app-protect nginx-plus-module-njs && chown nginx /etc/nginx

# Copy configuration files:
COPY entrypoint.sh /root/

CMD ["sh", "/root/entrypoint.sh"]
