from flask import Flask
import redis
import os

app = Flask(__name__)

# Kết nối Redis (tên service trong docker-compose)
redis_client = redis.Redis(
    host="redis",
    port=6379,
    decode_responses=True
)

@app.route("/")
def index():
    count = redis_client.incr("counter")
    return f"Page refresh count: {count}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)