ScalaJS.impls.scala_Application$class__main__Lscala_Application__AT__V = (function($$this, args) {
  if (ScalaJS.modules.scala_util_Properties().propIsSet__T__Z("scala.time")) {
    var total = ScalaJS.modules.scala_compat_Platform().currentTime__J().$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long($$this.executionStart__J());
    ScalaJS.modules.scala_Console().println__O__V((("[total " + ScalaJS.bJ(total)) + "ms]"))
  }
});
ScalaJS.impls.scala_Application$class__$init$__Lscala_Application__V = (function($$this) {
  $$this.scala$Application$$undsetter$und$executionStart$und$eq__J__V(ScalaJS.modules.scala_compat_Platform().currentTime__J())
});
//@ sourceMappingURL=Application$class.js.map
