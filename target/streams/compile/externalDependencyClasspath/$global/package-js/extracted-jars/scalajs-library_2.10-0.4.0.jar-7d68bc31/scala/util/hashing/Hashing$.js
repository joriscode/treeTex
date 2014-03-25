/** @constructor */
ScalaJS.c.scala_util_hashing_Hashing$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_hashing_Hashing$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_Hashing$.prototype.constructor = ScalaJS.c.scala_util_hashing_Hashing$;
ScalaJS.c.scala_util_hashing_Hashing$.prototype.$default__Lscala_util_hashing_Hashing$Default = (function() {
  return new ScalaJS.c.scala_util_hashing_Hashing$Default().init___()
});
ScalaJS.c.scala_util_hashing_Hashing$.prototype.fromFunction__Lscala_Function1__Lscala_util_hashing_Hashing = (function(f) {
  return new ScalaJS.c.scala_util_hashing_Hashing$$anon$1().init___Lscala_Function1(f)
});
ScalaJS.c.scala_util_hashing_Hashing$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_hashing_Hashing()
});
ScalaJS.c.scala_util_hashing_Hashing$.prototype.fromFunction__Lscala_Function1__ = (function(f) {
  return this.fromFunction__Lscala_Function1__Lscala_util_hashing_Hashing(f)
});
ScalaJS.c.scala_util_hashing_Hashing$.prototype.$default__ = (function() {
  return this.$default__Lscala_util_hashing_Hashing$Default()
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_Hashing$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_Hashing$.prototype = ScalaJS.c.scala_util_hashing_Hashing$.prototype;
ScalaJS.is.scala_util_hashing_Hashing$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_Hashing$)))
});
ScalaJS.as.scala_util_hashing_Hashing$ = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_Hashing$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.Hashing")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_Hashing$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_Hashing$)))
});
ScalaJS.asArrayOf.scala_util_hashing_Hashing$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_Hashing$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.Hashing;", depth)
  }
});
ScalaJS.data.scala_util_hashing_Hashing$ = new ScalaJS.ClassTypeData({
  scala_util_hashing_Hashing$: 0
}, false, "scala.util.hashing.Hashing$", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_Hashing$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_Hashing$.prototype.$classData = ScalaJS.data.scala_util_hashing_Hashing$;
ScalaJS.moduleInstances.scala_util_hashing_Hashing = undefined;
ScalaJS.modules.scala_util_hashing_Hashing = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_hashing_Hashing)) {
    ScalaJS.moduleInstances.scala_util_hashing_Hashing = new ScalaJS.c.scala_util_hashing_Hashing$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_hashing_Hashing
});
//@ sourceMappingURL=Hashing$.js.map
