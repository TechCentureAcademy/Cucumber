$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 81\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-NMSPRPDQ\u0027, ip: \u0027172.16.194.48\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: Driver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00865D53+2448723]\n\tOrdinal0 [0x00798131+1605937]\n\tOrdinal0 [0x0068F879+522361]\n\tOrdinal0 [0x006205F3+67059]\n\tOrdinal0 [0x0061CD92+52626]\n\tOrdinal0 [0x0063C127+180519]\n\tOrdinal0 [0x0063BF2D+180013]\n\tOrdinal0 [0x00639E5B+171611]\n\tOrdinal0 [0x00621DD8+73176]\n\tOrdinal0 [0x00622E50+77392]\n\tOrdinal0 [0x00622DE9+77289]\n\tOrdinal0 [0x007AD6A7+1693351]\n\tGetHandleVerifier [0x00903E16+522726]\n\tGetHandleVerifier [0x00903B54+522020]\n\tGetHandleVerifier [0x00918F67+609079]\n\tGetHandleVerifier [0x00904686+524886]\n\tOrdinal0 [0x007A5A8C+1661580]\n\tOrdinal0 [0x007AF00B+1699851]\n\tOrdinal0 [0x007AF173+1700211]\n\tOrdinal0 [0x007C4FE5+1789925]\n\tBaseThreadInitThunk [0x77766359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77A77B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77A77B44+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:207)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utilities.Driver.getDriver(Driver.java:26)\r\n\tat step_definitions.Hooks.setUp(Hooks.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters text \"\" into search",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should navigate to page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});