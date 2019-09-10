# altertaste
AlterTaste: lightweight database health-checker proxy, with HTTP URL Interface

## Concept
* [x] docker container
* [x] single endpoint
* [x] simple HTTP interface
* [x] interoperability
* [x] public cloud support(currently: only for GCP)

## What is this
* `HTTP-to-SELECT SQL` proxy server for simplify health check for DBs
* Don't have setting interface itself.
  * Configure by GCP-Project-ServiceAccount & Request query URL strings.

## health-check URL example

### request from monitoring service
```
http://service-account-name@altertaste-host-ip/target-db-host/target-db-table/req?select=(...)
```

### response from altertaste
```
HTTP 200
```

```
HTTP 500
```

## why `altertaste` ?
* from Yu-Gi-Oh VRAINS: `altergeist`
