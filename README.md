# Virtual Host Redirector

## What is this?
<!-- TODO  -->
<!-- Make mention of that people need to setup these domains to point to the server this is running on -->

## Usage
### Config
<!-- TODO  -->

### Command Line
1. Install NodeJS on your system.
2. Install dependencies by running ``npm install``.
3. Run with ``node server [rules config path] [port (default 80)]``. e.g.: ``node server ~/redirector-config/rules.json 80``

### Docker
#### x86/x64 Systems
**Building**
Use ``docker build -t jordancrawford/virtual-host-redirector docker``

**Running**
Use ``docker run -d -v [local config directory]:/config -p [host port]:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector``

For example, if your config directory is located at ``~/redirector-config``, then use ``docker run -d -v ~/redirector-config:/config -p 80:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector``.

#### ARM systems (e.g.: Raspberry Pi)
**Building**
Use ``docker build -t jordancrawford/virtual-host-redirector:arm docker-arm``

**Running**
Use ``docker run -d -v [local config directory]:/config -p [host port]:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector:arm``

For example, if your config directory is located at ``~/redirector-config``, then use ``docker run -d -v ~/redirector-config:/config -p 80:80 --name virtual-host-redirector jordancrawford/virtual-host-redirector:arm``.
