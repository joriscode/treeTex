/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.call(this);
  this.p$2 = null
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$AbstractBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process = (function(io) {
  var process = this.p$2.start__Ljava_lang_Process();
  var inThread = ScalaJS.modules.scala_sys_process_Process().Spawn__Lscala_sys_process_ProcessImpl$Spawn$().apply__Lscala_Function0__Z__Ljava_lang_Thread(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(io$2, process$1) {
    return (function() {
      io$2.writeInput__Lscala_Function1().apply__O__O(process$1.getOutputStream__Ljava_io_OutputStream());
      return ScalaJS.bV(undefined)
    })
  })(io, process)), true);
  var outThread = ScalaJS.modules.scala_sys_process_Process().Spawn__Lscala_sys_process_ProcessImpl$Spawn$().apply__Lscala_Function0__Z__Ljava_lang_Thread(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(io$2, process$1) {
    return (function() {
      io$2.processOutput__Lscala_Function1().apply__O__O(process$1.getInputStream__Ljava_io_InputStream());
      return ScalaJS.bV(undefined)
    })
  })(io, process)), io.daemonizeThreads__Z());
  if (this.p$2.redirectErrorStream__Z()) {
    var errorThread = ScalaJS.modules.scala_collection_immutable_Nil()
  } else {
    var errorThread = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Thread.getArrayOf(), [ScalaJS.modules.scala_sys_process_Process().Spawn__Lscala_sys_process_ProcessImpl$Spawn$().apply__Lscala_Function0__Z__Ljava_lang_Thread(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(io$2, process$1) {
      return (function() {
        io$2.processError__Lscala_Function1().apply__O__O(process$1.getErrorStream__Ljava_io_InputStream());
        return ScalaJS.bV(undefined)
      })
    })(io, process)), io.daemonizeThreads__Z())]), 1)))
  };
  var jsx$5 = new ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess();
  var jsx$4 = ScalaJS.modules.scala_sys_process_Process();
  var jsx$3 = process;
  var jsx$2 = inThread;
  var x$3 = outThread;
  var jsx$1 = errorThread.$$colon$colon__O__Lscala_collection_immutable_List(x$3);
  return jsx$5.init___Lscala_sys_process_Process$__Ljava_lang_Process__Ljava_lang_Thread__Lscala_collection_immutable_List(jsx$4, jsx$3, jsx$2, jsx$1)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype.toString__T = (function() {
  return ScalaJS.objectToString(this.p$2.command__Ljava_util_List())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype.canPipeTo__Z = (function() {
  return true
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype.scala$sys$process$ProcessBuilderImpl$Simple$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype.init___Lscala_sys_process_ProcessBuilder$__Ljava_lang_ProcessBuilder = (function($$outer, p) {
  this.p$2 = p;
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$.call(this, $$outer);
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype.scala$sys$process$ProcessBuilderImpl$Simple$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$Simple$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$Simple = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$Simple.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$Simple = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$Simple)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$Simple = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$Simple(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$Simple")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$Simple = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$Simple)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$Simple = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$Simple(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$Simple;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$Simple = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$Simple: 0
}, false, "scala.sys.process.ProcessBuilderImpl$Simple", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$AbstractBuilder, {
  scala_sys_process_ProcessBuilderImpl$Simple: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$Simple;
//@ sourceMappingURL=ProcessBuilderImpl$Simple.js.map
