/** @constructor */
ScalaJS.c.scala_sys_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_package$.prototype.constructor = ScalaJS.c.scala_sys_package$;
ScalaJS.c.scala_sys_package$.prototype.error__T__Lscala_Nothing = (function(message) {
  throw ScalaJS.unwrapJavaScriptException(new ScalaJS.c.java_lang_RuntimeException().init___T(message))
});
ScalaJS.c.scala_sys_package$.prototype.exit__Lscala_Nothing = (function() {
  return this.exit__I__Lscala_Nothing(0)
});
ScalaJS.c.scala_sys_package$.prototype.exit__I__Lscala_Nothing = (function(status) {
  ScalaJS.modules.java_lang_System().exit__I__V(status);
  throw ScalaJS.unwrapJavaScriptException(new ScalaJS.c.java_lang_Throwable().init___())
});
ScalaJS.c.scala_sys_package$.prototype.runtime__Ljava_lang_Runtime = (function() {
  return ScalaJS.modules.java_lang_Runtime().getRuntime__Ljava_lang_Runtime()
});
ScalaJS.c.scala_sys_package$.prototype.props__Lscala_sys_SystemProperties = (function() {
  return new ScalaJS.c.scala_sys_SystemProperties().init___()
});
ScalaJS.c.scala_sys_package$.prototype.env__Lscala_collection_immutable_Map = (function() {
  return ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_collection_immutable_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.as.scala_collection_MapLike(ScalaJS.modules.scala_collection_JavaConverters().mapAsScalaMapConverter__Ljava_util_Map__Lscala_collection_convert_Decorators$AsScala(ScalaJS.modules.java_lang_System().getenv__Ljava_util_Map()).asScala__O()).toSeq__Lscala_collection_Seq()))
});
ScalaJS.c.scala_sys_package$.prototype.addShutdownHook__Lscala_Function0__Lscala_sys_ShutdownHookThread = (function(body) {
  return ScalaJS.modules.scala_sys_ShutdownHookThread().apply__Lscala_Function0__Lscala_sys_ShutdownHookThread(body)
});
ScalaJS.c.scala_sys_package$.prototype.allThreads__Lscala_collection_IndexedSeq = (function() {
  var num = ScalaJS.modules.java_lang_Thread().activeCount__I();
  var tarray = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Thread.getArrayOf(), [num]);
  var got = ScalaJS.modules.java_lang_Thread().enumerate__ALjava_lang_Thread__I(tarray);
  return ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(tarray, 1)).take__I__O(got), 1))
});
ScalaJS.c.scala_sys_package$.prototype.allThreads__ = (function() {
  return this.allThreads__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_sys_package$.prototype.addShutdownHook__Lscala_Function0__ = (function(body) {
  return this.addShutdownHook__Lscala_Function0__Lscala_sys_ShutdownHookThread(body)
});
ScalaJS.c.scala_sys_package$.prototype.env__ = (function() {
  return this.env__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_sys_package$.prototype.props__ = (function() {
  return this.props__Lscala_sys_SystemProperties()
});
ScalaJS.c.scala_sys_package$.prototype.runtime__ = (function() {
  return this.runtime__Ljava_lang_Runtime()
});
ScalaJS.c.scala_sys_package$.prototype.exit__I__ = (function(status) {
  return this.exit__I__Lscala_Nothing(status)
});
ScalaJS.c.scala_sys_package$.prototype.exit__ = (function() {
  return this.exit__Lscala_Nothing()
});
ScalaJS.c.scala_sys_package$.prototype.error__T__ = (function(message) {
  return this.error__T__Lscala_Nothing(message)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_package$.prototype = ScalaJS.c.scala_sys_package$.prototype;
ScalaJS.is.scala_sys_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_package$)))
});
ScalaJS.as.scala_sys_package$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.package")
  }
});
ScalaJS.isArrayOf.scala_sys_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_package$)))
});
ScalaJS.asArrayOf.scala_sys_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.package;", depth)
  }
});
ScalaJS.data.scala_sys_package$ = new ScalaJS.ClassTypeData({
  scala_sys_package$: 0
}, false, "scala.sys.package$", ScalaJS.data.java_lang_Object, {
  scala_sys_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_package$.prototype.$classData = ScalaJS.data.scala_sys_package$;
ScalaJS.moduleInstances.scala_sys_package = undefined;
ScalaJS.modules.scala_sys_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_package)) {
    ScalaJS.moduleInstances.scala_sys_package = new ScalaJS.c.scala_sys_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_package
});
//@ sourceMappingURL=package$.js.map
