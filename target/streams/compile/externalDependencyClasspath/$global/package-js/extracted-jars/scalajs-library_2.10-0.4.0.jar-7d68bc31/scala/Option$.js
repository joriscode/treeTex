/** @constructor */
ScalaJS.c.scala_Option$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Option$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Option$.prototype.constructor = ScalaJS.c.scala_Option$;
ScalaJS.c.scala_Option$.prototype.option2Iterable__Lscala_Option__Lscala_collection_Iterable = (function(xo) {
  return xo.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_Option$.prototype.apply__O__Lscala_Option = (function(x) {
  if (ScalaJS.anyRefEqEq(x, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x)
  }
});
ScalaJS.c.scala_Option$.prototype.empty__Lscala_Option = (function() {
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_Option$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Option()
});
ScalaJS.c.scala_Option$.prototype.empty__ = (function() {
  return this.empty__Lscala_Option()
});
ScalaJS.c.scala_Option$.prototype.apply__O__ = (function(x) {
  return this.apply__O__Lscala_Option(x)
});
ScalaJS.c.scala_Option$.prototype.option2Iterable__Lscala_Option__ = (function(xo) {
  return this.option2Iterable__Lscala_Option__Lscala_collection_Iterable(xo)
});
/** @constructor */
ScalaJS.inheritable.scala_Option$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Option$.prototype = ScalaJS.c.scala_Option$.prototype;
ScalaJS.is.scala_Option$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Option$)))
});
ScalaJS.as.scala_Option$ = (function(obj) {
  if ((ScalaJS.is.scala_Option$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Option")
  }
});
ScalaJS.isArrayOf.scala_Option$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Option$)))
});
ScalaJS.asArrayOf.scala_Option$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Option$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Option;", depth)
  }
});
ScalaJS.data.scala_Option$ = new ScalaJS.ClassTypeData({
  scala_Option$: 0
}, false, "scala.Option$", ScalaJS.data.java_lang_Object, {
  scala_Option$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Option$.prototype.$classData = ScalaJS.data.scala_Option$;
ScalaJS.moduleInstances.scala_Option = undefined;
ScalaJS.modules.scala_Option = (function() {
  if ((!ScalaJS.moduleInstances.scala_Option)) {
    ScalaJS.moduleInstances.scala_Option = new ScalaJS.c.scala_Option$().init___()
  };
  return ScalaJS.moduleInstances.scala_Option
});
//@ sourceMappingURL=Option$.js.map
