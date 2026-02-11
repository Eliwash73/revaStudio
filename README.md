##  Running the PostgreSQL Chinook Database (Docker)

Install Docker

From the folder containing docker-compose.yml run:

```bash
docker-compose down -v
```
This resets the database and forces the init scripts to run again.

Start the DB container

You can run either:

```bash
docker-compose up
```
or (detached mode):

```bash
docker-compose up -d
```

(Optional) Watch logs to confirm initialization completes

```bash
docker logs -f chinook-db
```
To stop the DB container
```bash
docker-compose down
```