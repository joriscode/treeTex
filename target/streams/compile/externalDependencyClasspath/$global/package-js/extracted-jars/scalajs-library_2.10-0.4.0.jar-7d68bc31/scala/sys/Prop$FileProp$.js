/** @constructor */
ScalaJS.c.scala_sys_Prop$FileProp$ = (function() {
  ScalaJS.c.scala_sys_CreatorImpl.call(this)
});
ScalaJS.c.scala_sys_Prop$FileProp$.prototype = new ScalaJS.inheritable.scala_sys_CreatorImpl();
ScalaJS.c.scala_sys_Prop$FileProp$.prototype.constructor = ScalaJS.c.scala_sys_Prop$FileProp$;
ScalaJS.c.scala_sys_Prop$FileProp$.prototype.init___ = (function() {
  ScalaJS.c.scala_sys_CreatorImpl.prototype.init___Lscala_Function1.call(this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(s) {
      return new ScalaJS.c.java_io_File().init___T(s)
    })
  })()));
  ScalaJS.moduleInstances.scala_sys_Prop$FileProp = this;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_sys_Prop$FileProp$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_Prop$FileProp$.prototype = ScalaJS.c.scala_sys_Prop$FileProp$.prototype;
ScalaJS.is.scala_sys_Prop$FileProp$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_Prop$FileProp$)))
});
ScalaJS.as.scala_sys_Prop$FileProp$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_Prop$FileProp$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.Prop$FileProp")
  }
});
ScalaJS.isArrayOf.scala_sys_Prop$FileProp$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_Prop$FileProp$)))
});
ScalaJS.asArrayOf.scala_sys_Prop$FileProp$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_Prop$FileProp$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.Prop$FileProp;", depth)
  }
});
ScalaJS.data.scala_sys_Prop$FileProp$ = new ScalaJS.ClassTypeData({
  scala_sys_Prop$FileProp$: 0
}, false, "scala.sys.Prop$FileProp$", ScalaJS.data.scala_sys_CreatorImpl, {
  scala_sys_Prop$FileProp$: 1,
  scala_sys_CreatorImpl: 1,
  scala_sys_Prop$Creator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_Prop$FileProp$.prototype.$classData = ScalaJS.data.scala_sys_Prop$FileProp$;
ScalaJS.moduleInstances.scala_sys_Prop$FileProp = undefined;
ScalaJS.modules.scala_sys_Prop$FileProp = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_Prop$FileProp)) {
    ScalaJS.moduleInstances.scala_sys_Prop$FileProp = new ScalaJS.c.scala_sys_Prop$FileProp$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_Prop$FileProp
});
//@ sourceMappingURL=Prop$FileProp$.js.map
