/** @constructor */
ScalaJS.c.java_lang_StandardOutPrintStream$ = (function() {
  ScalaJS.c.java_io_PrintStream.call(this);
  this.java$lang$JSConsoleBasedPrintStream$$flushed$4 = null;
  this.java$lang$JSConsoleBasedPrintStream$$buffer$4 = null;
  this.java$lang$JSConsoleBasedPrintStream$$lineContEnd$4 = null;
  this.java$lang$JSConsoleBasedPrintStream$$lineContStart$4 = null
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype = new ScalaJS.inheritable.java_io_PrintStream();
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.constructor = ScalaJS.c.java_lang_StandardOutPrintStream$;
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$flushed__Lscala_scalajs_js_Boolean = (function() {
  return this.java$lang$JSConsoleBasedPrintStream$$flushed$4
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$flushed$und$eq__Lscala_scalajs_js_Boolean__V = (function(x$1) {
  this.java$lang$JSConsoleBasedPrintStream$$flushed$4 = x$1
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$buffer__Lscala_scalajs_js_String = (function() {
  return this.java$lang$JSConsoleBasedPrintStream$$buffer$4
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$buffer$und$eq__Lscala_scalajs_js_String__V = (function(x$1) {
  this.java$lang$JSConsoleBasedPrintStream$$buffer$4 = x$1
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$lineContEnd__Lscala_scalajs_js_String = (function() {
  return this.java$lang$JSConsoleBasedPrintStream$$lineContEnd$4
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$lineContStart__Lscala_scalajs_js_String = (function() {
  return this.java$lang$JSConsoleBasedPrintStream$$lineContStart$4
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$undsetter$und$java$lang$JSConsoleBasedPrintStream$$lineContEnd$und$eq__Lscala_scalajs_js_String__V = (function(x$1) {
  this.java$lang$JSConsoleBasedPrintStream$$lineContEnd$4 = x$1
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$undsetter$und$java$lang$JSConsoleBasedPrintStream$$lineContStart$und$eq__Lscala_scalajs_js_String__V = (function(x$1) {
  this.java$lang$JSConsoleBasedPrintStream$$lineContStart$4 = x$1
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.print__T__V = (function(s) {
  ScalaJS.impls.java_lang_JSConsoleBasedPrintStream$class__print__Ljava_lang_JSConsoleBasedPrintStream__T__V(this, s)
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.flush__V = (function() {
  ScalaJS.impls.java_lang_JSConsoleBasedPrintStream$class__flush__Ljava_lang_JSConsoleBasedPrintStream__V(this)
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.doWriteLine__T__V = (function(line) {
  if ((!(!ScalaJS.g["console"]))) {
    ScalaJS.g["console"]["log"](line)
  }
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.init___ = (function() {
  ScalaJS.c.java_io_PrintStream.prototype.init___Ljava_io_OutputStream__Z.call(this, ScalaJS.modules.java_lang_StandardOut(), true);
  ScalaJS.moduleInstances.java_lang_StandardOutPrintStream = this;
  ScalaJS.impls.java_lang_JSConsoleBasedPrintStream$class__$init$__Ljava_lang_JSConsoleBasedPrintStream__V(this);
  return this
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$undsetter$und$java$lang$JSConsoleBasedPrintStream$$lineContStart$und$eq__Lscala_scalajs_js_String__ = (function(x$1) {
  return ScalaJS.bV(this.java$lang$JSConsoleBasedPrintStream$$undsetter$und$java$lang$JSConsoleBasedPrintStream$$lineContStart$und$eq__Lscala_scalajs_js_String__V(x$1))
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$undsetter$und$java$lang$JSConsoleBasedPrintStream$$lineContEnd$und$eq__Lscala_scalajs_js_String__ = (function(x$1$2) {
  return ScalaJS.bV(this.java$lang$JSConsoleBasedPrintStream$$undsetter$und$java$lang$JSConsoleBasedPrintStream$$lineContEnd$und$eq__Lscala_scalajs_js_String__V(x$1$2))
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$lineContStart__ = (function() {
  return this.java$lang$JSConsoleBasedPrintStream$$lineContStart__Lscala_scalajs_js_String()
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$lineContEnd__ = (function() {
  return this.java$lang$JSConsoleBasedPrintStream$$lineContEnd__Lscala_scalajs_js_String()
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$buffer$und$eq__Lscala_scalajs_js_String__ = (function(x$1$3) {
  return ScalaJS.bV(this.java$lang$JSConsoleBasedPrintStream$$buffer$und$eq__Lscala_scalajs_js_String__V(x$1$3))
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$buffer__ = (function() {
  return this.java$lang$JSConsoleBasedPrintStream$$buffer__Lscala_scalajs_js_String()
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$flushed$und$eq__Lscala_scalajs_js_Boolean__ = (function(x$1$4) {
  return ScalaJS.bV(this.java$lang$JSConsoleBasedPrintStream$$flushed$und$eq__Lscala_scalajs_js_Boolean__V(x$1$4))
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.java$lang$JSConsoleBasedPrintStream$$flushed__ = (function() {
  return this.java$lang$JSConsoleBasedPrintStream$$flushed__Lscala_scalajs_js_Boolean()
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.doWriteLine__T__ = (function(line) {
  return ScalaJS.bV(this.doWriteLine__T__V(line))
});
/** @constructor */
ScalaJS.inheritable.java_lang_StandardOutPrintStream$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_StandardOutPrintStream$.prototype = ScalaJS.c.java_lang_StandardOutPrintStream$.prototype;
ScalaJS.is.java_lang_StandardOutPrintStream$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_StandardOutPrintStream$)))
});
ScalaJS.as.java_lang_StandardOutPrintStream$ = (function(obj) {
  if ((ScalaJS.is.java_lang_StandardOutPrintStream$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.StandardOutPrintStream")
  }
});
ScalaJS.isArrayOf.java_lang_StandardOutPrintStream$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_StandardOutPrintStream$)))
});
ScalaJS.asArrayOf.java_lang_StandardOutPrintStream$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_StandardOutPrintStream$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.StandardOutPrintStream;", depth)
  }
});
ScalaJS.data.java_lang_StandardOutPrintStream$ = new ScalaJS.ClassTypeData({
  java_lang_StandardOutPrintStream$: 0
}, false, "java.lang.StandardOutPrintStream$", ScalaJS.data.java_io_PrintStream, {
  java_lang_StandardOutPrintStream$: 1,
  java_lang_JSConsoleBasedPrintStream: 1,
  java_io_PrintStream: 1,
  java_lang_Appendable: 1,
  java_io_FilterOutputStream: 1,
  java_io_OutputStream: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_StandardOutPrintStream$.prototype.$classData = ScalaJS.data.java_lang_StandardOutPrintStream$;
ScalaJS.moduleInstances.java_lang_StandardOutPrintStream = undefined;
ScalaJS.modules.java_lang_StandardOutPrintStream = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_StandardOutPrintStream)) {
    ScalaJS.moduleInstances.java_lang_StandardOutPrintStream = new ScalaJS.c.java_lang_StandardOutPrintStream$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_StandardOutPrintStream
});
//@ sourceMappingURL=StandardOutPrintStream$.js.map
