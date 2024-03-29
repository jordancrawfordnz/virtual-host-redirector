**This repo is archived.** It's not being maintained and may no longer work.

Read more about it in my blog post - [Easy access to my Pi on a local network](https://jc.kiwi/local-address-dns/)

---

# Virtual Host Redirector

## What is this?
Virtual Host Redirector sets up permanent redirects on your domain names. For example, you could configure this to allow visitors to your domain ``service1.example.com`` to be redirected to ``http://example.com:9000``.

Docker is supported, with a Docker image built for both x86/x64 and ARM systems.

## Usage
### Rules Config File
Setup a JSON file where the key is the host and the value is the full path to redirect to. For example (as in ``rules.example.json``):
```
{
  "service1.example.com" : "http://example.com:9000",
  "service2.example.com" : "http://example.com/something"
}
```

If using Docker, this file must be called ``rules.json`` and be within a directory mapped to ``/config`` in the container.

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

#### ARM systems (like Raspberry Pi)
**Building**

Use ``docker build -t jordancrawford/virtual-host-redirector:arm -f Dockerfile.arm .``

**Running**

Use ``docker run -d -v [local config directory]:/config -p [host port]:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector:arm``

For example, if your config directory is located at ``~/redirector-config``, then use ``docker run -d -v ~/redirector-config:/config -p 80:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector:arm``.
