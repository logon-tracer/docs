---
outline: deep
---

# API Reference

We provide many classes to facilitate your customization and extension. Below we will have a general description of this class.

## MessageContext

### DefaultAlarmMessageContext

```java
import logon.tracer.context.AlarmInfoContext;
import logon.tracer.context.DefaultAlarmMessageContext;
import logon.tracer.dto.AlarmLogSimpleConfig;
import logon.tracer.dto.AlarmMailContent;
import org.springframework.stereotype.Component;

@Component
public class CustomAlarmMessageContext extends DefaultAlarmMessageContext {
  @Override
  public AlarmMailContent mailContent(AlarmInfoContext context, Throwable throwable, AlarmLogSimpleConfig config) {
    return super.mailContent(context, throwable, config);
  }
}
```

### AlarmMessageContext

```java
import logon.tracer.context.AlarmInfoContext;
import logon.tracer.context.AlarmMessageContext;
import logon.tracer.dto.AlarmLogSimpleConfig;
import logon.tracer.dto.AlarmMailContent;
import org.springframework.stereotype.Component;

@Component
public class CustomAlarmMessageContext1 implements AlarmMessageContext {
  /**
   * Customize the content sent to mail.
   *
   * @param context   {@link AlarmInfoContext} The alarm log info.
   * @param throwable {@link Throwable} The throwable that was caught.
   * @param config    {@link AlarmLogSimpleConfig}The config context.
   * @return {@link AlarmMailContent} Content sent to mail.
   */
  @Override
  public AlarmMailContent mailContent(AlarmInfoContext context, Throwable throwable, AlarmLogSimpleConfig config) {
    return new AlarmMailContent(context.getMessage(), context.getClassName());
  }
}
```

## AlarmLogHelper

Output log and optionally send mail

```java
// send mail
AlarmLogHelper.getPrintLogInstance().error("123");
AlarmLogHelper.getPrintLogInstance().error("123", new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error("123:{}", 456);
AlarmLogHelper.getPrintLogInstance().error("123:{}", 456, new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error("123:{}:{}", 456, 789);
AlarmLogHelper.getPrintLogInstance().error("123:{}:{}", 456, 789, new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error("123:{}:{}:{}", 456, 789, "111");
AlarmLogHelper.getPrintLogInstance().error("123:{}:{}:{}", 456, 789, "111", new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123");
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123", new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}", 456);
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}", 456, new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}:{}", 456, 789);
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}:{}", 456, 789, new RuntimeException());
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}:{}:{}", 456, 789, "111");
AlarmLogHelper.getPrintLogInstance().error(MarkerFactory.getMarker("test"), "123:{}:{}:{}", 456, 789, "111", new RuntimeException());
// don't send mail
AlarmLogHelper.getPrintLogInstance(false).error("123");
AlarmLogHelper.getPrintLogInstance(false).error("123", new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error("123:{}", 456);
AlarmLogHelper.getPrintLogInstance(false).error("123:{}", 456, new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error("123:{}:{}", 456, 789);
AlarmLogHelper.getPrintLogInstance(false).error("123:{}:{}", 456, 789, new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error("123:{}:{}:{}", 456, 789, "111");
AlarmLogHelper.getPrintLogInstance(false).error("123:{}:{}:{}", 456, 789, "111", new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123");
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123", new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}", 456);
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}", 456, new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}:{}", 456, 789);
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}:{}", 456, 789, new RuntimeException());
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}:{}:{}", 456, 789, "111");
AlarmLogHelper.getPrintLogInstance(false).error(MarkerFactory.getMarker("test"), "123:{}:{}:{}", 456, 789, "111", new RuntimeException());
```
