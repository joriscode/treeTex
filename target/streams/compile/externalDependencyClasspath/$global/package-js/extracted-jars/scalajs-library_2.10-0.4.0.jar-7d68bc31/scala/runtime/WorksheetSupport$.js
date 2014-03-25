/** @constructor */
ScalaJS.c.scala_runtime_WorksheetSupport$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$runtime$WorksheetSupport$$currentOffset$1 = 0;
  this.flushedOut$1 = null;
  this.printOut$1 = null
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.constructor = ScalaJS.c.scala_runtime_WorksheetSupport$;
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.scala$runtime$WorksheetSupport$$currentOffset__I = (function() {
  return this.scala$runtime$WorksheetSupport$$currentOffset$1
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.scala$runtime$WorksheetSupport$$currentOffset$und$eq__p1__I__V = (function(x$1) {
  this.scala$runtime$WorksheetSupport$$currentOffset$1 = x$1
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.flushedOut__p1__Lscala_runtime_WorksheetSupport$FlushedOutputStream = (function() {
  return this.flushedOut$1
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.printOut__p1__Ljava_io_PrintStream = (function() {
  return this.printOut$1
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.redirected__p1__Lscala_Function0__V = (function(op) {
  var oldSysOut = ScalaJS.modules.java_lang_System().out__Ljava_io_PrintStream();
  var oldSysErr = ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream();
  var oldConsOut = ScalaJS.modules.scala_Console().out__Ljava_io_PrintStream();
  var oldConsErr = ScalaJS.modules.scala_Console().err__Ljava_io_PrintStream();
  ScalaJS.modules.java_lang_System().setOut__Ljava_io_PrintStream__V(this.printOut__p1__Ljava_io_PrintStream());
  ScalaJS.modules.java_lang_System().setErr__Ljava_io_PrintStream__V(this.printOut__p1__Ljava_io_PrintStream());
  ScalaJS.modules.scala_Console().setOut__Ljava_io_PrintStream__V(this.printOut__p1__Ljava_io_PrintStream());
  ScalaJS.modules.scala_Console().setErr__Ljava_io_PrintStream__V(this.printOut__p1__Ljava_io_PrintStream());
  try {
    op.apply$mcV$sp__V()
  } finally {
    this.printOut__p1__Ljava_io_PrintStream().close__V();
    ScalaJS.modules.java_lang_System().setOut__Ljava_io_PrintStream__V(oldSysOut);
    ScalaJS.modules.java_lang_System().setErr__Ljava_io_PrintStream__V(oldSysErr);
    ScalaJS.modules.scala_Console().setOut__Ljava_io_PrintStream__V(oldConsOut);
    ScalaJS.modules.scala_Console().setErr__Ljava_io_PrintStream__V(oldConsErr)
  }
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$$execute__Lscala_Function0__V = (function(op) {
  this.redirected__p1__Lscala_Function0__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(op$1) {
    return (function() {
      try {
        op$1.apply$mcV$sp__V()
      } catch ($jsexc$) {
        $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
        if (ScalaJS.is.scala_runtime_StopException($jsexc$)) {
          var ex$2 = $jsexc$
        } else {
          var ex = $jsexc$;
          ex.printStackTrace__V()
        }
      };
      return ScalaJS.bV(undefined)
    })
  })(op)))
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$$skip__I__V = (function(n) {
  this.flushedOut__p1__Lscala_runtime_WorksheetSupport$FlushedOutputStream().ensureNewLine__V();
  this.scala$runtime$WorksheetSupport$$currentOffset$und$eq__p1__I__V((this.scala$runtime$WorksheetSupport$$currentOffset__I() + n))
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$$stop__Lscala_Nothing = (function() {
  throw new ScalaJS.c.scala_runtime_StopException().init___()
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$$show__O__T = (function(x) {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().stringOf__O__T(x)
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_runtime_WorksheetSupport = this;
  this.scala$runtime$WorksheetSupport$$currentOffset$1 = 0;
  this.flushedOut$1 = new ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream().init___Ljava_io_OutputStream(ScalaJS.modules.java_lang_System().out__Ljava_io_PrintStream());
  this.printOut$1 = new ScalaJS.c.java_io_PrintStream().init___Ljava_io_OutputStream(this.flushedOut__p1__Lscala_runtime_WorksheetSupport$FlushedOutputStream());
  return this
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$$show__O__ = (function(x) {
  return this.$$show__O__T(x)
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$$stop__ = (function() {
  return this.$$stop__Lscala_Nothing()
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$$skip__I__ = (function(n) {
  return ScalaJS.bV(this.$$skip__I__V(n))
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$$execute__Lscala_Function0__ = (function(op) {
  return ScalaJS.bV(this.$$execute__Lscala_Function0__V(op))
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.scala$runtime$WorksheetSupport$$currentOffset__ = (function() {
  return ScalaJS.bI(this.scala$runtime$WorksheetSupport$$currentOffset__I())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_WorksheetSupport$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_WorksheetSupport$.prototype = ScalaJS.c.scala_runtime_WorksheetSupport$.prototype;
ScalaJS.is.scala_runtime_WorksheetSupport$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_WorksheetSupport$)))
});
ScalaJS.as.scala_runtime_WorksheetSupport$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_WorksheetSupport$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.WorksheetSupport")
  }
});
ScalaJS.isArrayOf.scala_runtime_WorksheetSupport$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_WorksheetSupport$)))
});
ScalaJS.asArrayOf.scala_runtime_WorksheetSupport$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_WorksheetSupport$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.WorksheetSupport;", depth)
  }
});
ScalaJS.data.scala_runtime_WorksheetSupport$ = new ScalaJS.ClassTypeData({
  scala_runtime_WorksheetSupport$: 0
}, false, "scala.runtime.WorksheetSupport$", ScalaJS.data.java_lang_Object, {
  scala_runtime_WorksheetSupport$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_WorksheetSupport$.prototype.$classData = ScalaJS.data.scala_runtime_WorksheetSupport$;
ScalaJS.moduleInstances.scala_runtime_WorksheetSupport = undefined;
ScalaJS.modules.scala_runtime_WorksheetSupport = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_WorksheetSupport)) {
    ScalaJS.moduleInstances.scala_runtime_WorksheetSupport = new ScalaJS.c.scala_runtime_WorksheetSupport$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_WorksheetSupport
});
//@ sourceMappingURL=WorksheetSupport$.js.map
