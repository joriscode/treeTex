/** @constructor */
ScalaJS.c.scala_sys_Prop$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_Prop$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_Prop$.prototype.constructor = ScalaJS.c.scala_sys_Prop$;
ScalaJS.c.scala_sys_Prop$.prototype.apply__T__Lscala_sys_Prop$Creator__Lscala_sys_Prop = (function(key, evidence$1) {
  return ScalaJS.as.scala_sys_Prop$Creator(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$1)).apply__T__Lscala_sys_Prop(key)
});
ScalaJS.c.scala_sys_Prop$.prototype.apply__T__Lscala_sys_Prop$Creator__ = (function(key, evidence$1) {
  return this.apply__T__Lscala_sys_Prop$Creator__Lscala_sys_Prop(key, evidence$1)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_Prop$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_Prop$.prototype = ScalaJS.c.scala_sys_Prop$.prototype;
ScalaJS.is.scala_sys_Prop$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_Prop$)))
});
ScalaJS.as.scala_sys_Prop$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_Prop$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.Prop")
  }
});
ScalaJS.isArrayOf.scala_sys_Prop$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_Prop$)))
});
ScalaJS.asArrayOf.scala_sys_Prop$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_Prop$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.Prop;", depth)
  }
});
ScalaJS.data.scala_sys_Prop$ = new ScalaJS.ClassTypeData({
  scala_sys_Prop$: 0
}, false, "scala.sys.Prop$", ScalaJS.data.java_lang_Object, {
  scala_sys_Prop$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_Prop$.prototype.$classData = ScalaJS.data.scala_sys_Prop$;
ScalaJS.moduleInstances.scala_sys_Prop = undefined;
ScalaJS.modules.scala_sys_Prop = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_Prop)) {
    ScalaJS.moduleInstances.scala_sys_Prop = new ScalaJS.c.scala_sys_Prop$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_Prop
});
//@ sourceMappingURL=Prop$.js.map
