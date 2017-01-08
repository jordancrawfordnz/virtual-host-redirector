[View on Docker Hub](https://hub.docker.com/r/jordancrawford/virtual-host-redirector)

[View on GitHub](https://github.com/jordancrawfordnz/virtual-host-redirector)

---

# Virtual Host Redirector

## What is this?
Virtual Host Redirector sets up permanent redirects on your domain names. For example, you could configure this to allow visitors to your domain ``service1.example.com`` to be redirected to ``http://example.com:9000``.

## Usage
### Rules Config File
Setup a ``rules.json`` file where the key is the host and the value is the full path to redirect to. For example (as in ``rules.example.json``):
```
{
  "service1.example.com" : "http://example.com:9000",
  "service2.example.com" : "http://example.com/something"
}
```

### DNS Setup
Setup DNS records for the hostnames setup above to point to the server running ``virtual-host-redirector``.

### Command Line
1. Install NodeJS on your system.
2. Install dependencies by running ``npm install``.
3. Run with ``node server [rules config path] [port (default 80)]``. e.g.: ``node server ~/redirector-config/rules.json 80``

### Docker
#### x86/x64 Systems
**Building**

Use ``docker build -t jordancrawford/virtual-host-redirector .``

**Running**

Use ``docker run -d -v [local config directory]:/config -p [host port]:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector``

For example, if your config directory is located at ``~/redirector-config``, then use ``docker run -d -v ~/redirector-config:/config -p 80:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector``.

#### ARM systems (e.g.: Raspberry Pi)
**Building**

Use ``docker build -t jordancrawford/virtual-host-redirector:arm -f Dockerfile.arm .``

**Running**

Use ``docker run -d -v [local config directory]:/config -p [host port]:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector:arm``

For example, if your config directory is located at ``~/redirector-config``, then use ``docker run -d -v ~/redirector-config:/config -p 80:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector:arm``.
