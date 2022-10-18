# Getting Started

## Overview

LogonTracer is a lightweight log monitoring framework powered by Spring.

You can learn more about the rationale behind the project in the [Why LogonTracer](./why) section.

## Adding LogonTracer to your Project

You need to set Maven to have GitHub's Package permissions first

1. Create a [new token](https://github.com/settings/tokens) with corresponding permissions.
2. Set read:packages permission.

![GitHub Token](/github_token_read_packages.png)

3. Add `server` and list in ~/.m2/setting.xml

```xml
<server>
  <id>github</id>
  <username>github_username</username>
  <password>github_token</password>
</server>
```

With Maven

Set up the `repository` node in pom.xml

```xml
<repositories>
  <repository>
    <id>github</id>
    <name>The Maven Repository on Github</name>
    <url>https://maven.pkg.github.com/logon-tracer/core/</url>
  </repository>
</repositories>
```

Specific installation

```xml
<dependency>
  <groupId>logon.tracer</groupId>
  <artifactId>source</artifactId>
  <version>latest version</version>
</dependency>
```

:::tip TIP
LogonTracer requires JDK >=v11.0.3 and Maven >= v3.6.3
:::

## Configuring LogonTracer

One of the main advantages of LogonTracer is its unified configuration with Spring.

If present, LogonTracer will read your resource folder application.yml to match with the plugins and setup as your Spring app. For example, your mail format and intercept exception will work out-of-the-box. If you want a different configuration during send log, you can:

- Add `alarm-log.warn.mail`, which will have the higher priority

To configure LogonTracer itself, It can only be configured in `alarm-log.warn.mail` here.

```yaml
spring:
  alarm-log:
    warn:
      mail:
        # ......
```

See the list of config options in the [Config Reference](/config/)

## Examples

| Example | Source |
|---|---|
| `Log4j` | [GitHub](https://github.com/logon-tracer/core/tree/main/example/spring-boot-log4j) |
| `Log4j2` | [GitHub](https://github.com/logon-tracer/core/tree/main/example/spring-boot-log4j2) |
| `Logback` | [GitHub](https://github.com/logon-tracer/core/tree/main/example/spring-boot-logback) |

## Using Unreleased Commits

If you can't wait for a new release to test the latest features, you will need to clone the [LogonTracer repo](https://github.com/logon-tracer/core) to your local machine and then build and link it yourself ([Maven](https://maven.apache.org/index.html) is required):

```sh
git clone https://github.com/logon-tracer/core.git
cd core
mvn clean install -U
mvn install
```

Then go to the project where you are using LogonTracer and Install dependencies (or the package manager that you used to link LogonTracer globally).
