## Use this image

This image is modified by implementing the basic authentication by default. Set the following environment variables to secure the admin API:

```
AUTH_USERNAME=username
AUTH_PASSWORD=password
```

We have published this image on docker-hub. 

```bash
docker pull gerwim/secured-unleash-server
docker run -d -e DATABASE_URL=postgres://user:pass@10.200.221.11:5432/unleash -e AUTH_USERNAME=username -e AUTH_PASSWORD=password gerwim/secured-unleash-server
```


## Work locally with this repo 
Start by cloning this repository. 

We have set up `docker-compose` to start postgres and the unleash server together. This makes it really fast to start up
unleash locally without setting up a database or node.

```bash
$ docker-compose build
$ docker-compose up
```

### Requirements
We are using docker-compose version 3.4 and it requires:

- Docker engine 17.09.0+
- Docker compose 1.17.0+

For more info, check out the compatibility matrix on Docker's website: [compatibility-matrix](
https://docs.docker.com/compose/compose-file/compose-versioning/#compatibility-matrix)



## Upgrade version
When we upgrade the `unleash-version` this project should be tagged with the same version number.

```bash
git tag -a 3.7.0 -m "upgrade to unleash-server 3.7.0"
git push origin master --follow-tags
```

You might also want to update the minor tag:

```bash
git tag -d 3.7
git push origin :3.7
git tag -a 3.7 -m "Update 3.7 tag"
git push origin master --follow-tags
```

This will automatically trigger docker-hub to build the new tag. 
