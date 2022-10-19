---
outline: deep
---

# Configuring LogonTracer

## SpringBoot Configuring

### System global configuration

```yaml
spring:
  spring:
  alarm-log:
    warn:
      mail:
        enabled: true
        smtpHost: xxxxxxxxx # smtp host
        smtpPort: xxx # smtp port
        to: xxx # who to send to
        from: xxx # who sent
        username: xxx # smtp account
        password: xxx # smtp password
      warn-exception-extend: false # Obtain whether the specified exception information in the log starts inheritance judgment
      simple-warn-info: false
      print-stack-trace: true
      max-retry-times: 1 # maximum number of retries
      retry-sleep-millis: 3000 # The waiting interval for each retry, the final effect [retrySleepMillis * ( 1 << maxRetryTimes )]
      do-warn-exception: # Get the full path information of the exception class specified in the log
        - java.lang.Throwable
        - java.lang.Exception
```

## Log Framework

### Log4j

- log4j.xml
```xml
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration>
  <appender name="Console" class="org.apache.log4j.ConsoleAppender">
    <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss,SSS} [%p] %m  >> %c:%L%n"/>
    </layout>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.log4j.AlarmLogLog4jAsyncAppender">
    <param name="warnExceptionExtend" value="false"/>
    <param name="doWarnException" value="java.lang.Exception,java.lang.RuntimeException"/>
  </appender>

  <appender name="AsyncConsole" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="Console"/>
  </appender>

  <appender name="AsyncAlarmLog" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="AlarmLog"/>
  </appender>

  <root>
    <priority value="info" />
    <appender-ref ref="AsyncConsole"/>
    <appender-ref ref="AsyncAlarmLog"/>
  </root>
</log4j:configuration>
```

- log4j-sync.xml

```xml
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration>
  <appender name="Console" class="org.apache.log4j.ConsoleAppender">
    <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss,SSS} [%p] %m  >> %c:%L%n"/>
    </layout>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.log4j.AlarmLogLog4jAsyncAppender">
    <param name="warnExceptionExtend" value="false"/>
    <param name="doWarnException" value="java.lang.Exception,java.lang.RuntimeException"/>
  </appender>

  <root>
    <priority value="info" />
    <appender-ref ref="Console"/>
    <appender-ref ref="AlarmLog"/>
  </root>
</log4j:configuration>
```

- log4j-async.xml

```xml
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration>
  <appender name="Console" class="org.apache.log4j.ConsoleAppender">
    <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss,SSS} [%p] %m  >> %c:%L%n"/>
    </layout>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.log4j.AlarmLogLog4jAsyncAppender">
    <param name="warnExceptionExtend" value="false"/>
    <param name="doWarnException" value="java.lang.Exception,java.lang.RuntimeException"/>
  </appender>

  <appender name="AsyncConsole" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="Console"/>
  </appender>

  <appender name="AsyncAlarmLog" class="org.apache.log4j.AsyncAppender">
    <appender-ref ref="AlarmLog"/>
  </appender>

  <root>
    <priority value="info" />
    <appender-ref ref="AsyncConsole"/>
    <appender-ref ref="AsyncAlarmLog"/>
  </root>
</log4j:configuration>
```

### Log4j2

- log4j2-spring.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
  <appenders>
    <Console name="Console" target="SYSTEM_OUT">
      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
    </Console>

    <AlarmLog name="AlarmLog">
      <warnExceptionExtend>false</warnExceptionExtend>
      <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    </AlarmLog>

    <Async name="AsyncConsole">
      <AppenderRef ref="Console"/>
    </Async>

    <Async name="AsyncAlarmLog">
      <AppenderRef ref="AlarmLog"/>
    </Async>

  </appenders>
  <loggers>
    <root level="INFO">
      <appender-ref ref="AsyncConsole"/>
      <appender-ref ref="AsyncAlarmLog" level="ERROR" />
    </root>
  </loggers>
</configuration>
```

- log4j2-spring-sync.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
  <appenders>
    <Console name="Console" target="SYSTEM_OUT">
      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
    </Console>

    <AlarmLog name="AlarmLog">
      <warnExceptionExtend>false</warnExceptionExtend>
      <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    </AlarmLog>

  </appenders>
  <loggers>
    <root level="INFO">
      <appender-ref ref="Console"/>
      <appender-ref ref="AlarmLog" level="ERROR" />
    </root>
  </loggers>
</configuration>
```

- log4j2-spring-async.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
  <appenders>
    <Console name="Console" target="SYSTEM_OUT">
      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
    </Console>

    <AlarmLog name="AlarmLog">
      <warnExceptionExtend>false</warnExceptionExtend>
      <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    </AlarmLog>

    <Async name="AsyncConsole">
      <AppenderRef ref="Console"/>
    </Async>

    <Async name="AsyncAlarmLog">
      <AppenderRef ref="AlarmLog"/>
    </Async>

  </appenders>
  <loggers>
    <root level="INFO">
      <appender-ref ref="AsyncConsole"/>
      <appender-ref ref="AsyncAlarmLog" level="ERROR" />
    </root>
  </loggers>
</configuration>
```

### Logback

- logback-spring.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">

  <appender name="Console" class="ch.qos.logback.core.ConsoleAppender">
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
    </encoder>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.logback.AlarmLogLogbackAsyncAppender">
    <warnExceptionExtend>false</warnExceptionExtend>
    <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    <appender-ref ref="Console"/>
  </appender>

  <appender name="AsyncAlarmLog" class="ch.qos.logback.classic.AsyncAppender">
    <discardingThreshold>0</discardingThreshold>
    <appender-ref ref="AlarmLog"/>
  </appender>

  <root level="INFO">
    <appender-ref ref="AsyncAlarmLog" level="ERROR" />
  </root>
</configuration>
```

- logback-spring-sync.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">

  <appender name="Console" class="ch.qos.logback.core.ConsoleAppender">
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
    </encoder>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.logback.AlarmLogLogbackAsyncAppender">
    <warnExceptionExtend>false</warnExceptionExtend>
    <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    <includeCallerData>true</includeCallerData>
    <appender-ref ref="Console"/>
  </appender>

  <root level="INFO">
    <appender-ref ref="AlarmLog" level="ERROR" />
  </root>
</configuration>
```

- logback-spring-async.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">

  <appender name="Console" class="ch.qos.logback.core.ConsoleAppender">
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
    </encoder>
  </appender>

  <appender name="AlarmLog" class="logon.tracer.logback.AlarmLogLogbackAsyncAppender">
    <warnExceptionExtend>false</warnExceptionExtend>
    <doWarnException>java.lang.Exception,java.lang.RuntimeException</doWarnException>
    <appender-ref ref="Console"/>
  </appender>

  <appender name="AsyncAlarmLog" class="ch.qos.logback.classic.AsyncAppender">
    <discardingThreshold>0</discardingThreshold>
    <appender-ref ref="AlarmLog"/>
  </appender>

  <root level="INFO">
    <appender-ref ref="AsyncAlarmLog" level="ERROR" />
  </root>
</configuration>
```