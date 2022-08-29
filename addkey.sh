#!/bin/sh
#
# addkey.sh - Adds an entry to the NGINX key value store
#
# Usage: ./addkey.sh <IP address> <security policy>
# Example: ./addkey.sh 10.0.0.1 medium
#
# Change "localhost" below to the IP of the Docker host if not running on the same machine.

curl -X POST -d "{
     \"$1\": \"$2\" 
}" -s 'http://localhost/api/6/http/keyvals/ip_override'
