# Content of email

Sometimes the default format of the email may not meet our needs, we want to customize the content of the configuration email.

Just follow the steps below to create your own email format

## Create a `CustomAlarmMessageContext` class

- Implement `CustomAlarmMessageContext` to `CustomAlarmMessageContext`

```java
import logon.tracer.context.AlarmInfoContext;
import logon.tracer.context.AlarmMessageContext;
import logon.tracer.dto.AlarmLogSimpleConfig;
import logon.tracer.dto.AlarmMailContent;
import org.springframework.stereotype.Component;

@Component
public class CustomAlarmMessageContext implements AlarmMessageContext {
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

This allows us to send custom emails.
