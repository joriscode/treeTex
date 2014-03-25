/** @constructor */
ScalaJS.c.scala_collection_script_Reset$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_script_Reset$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_script_Reset$.prototype.constructor = ScalaJS.c.scala_collection_script_Reset$;
ScalaJS.c.scala_collection_script_Reset$.prototype.toString__T = (function() {
  return "Reset"
});
ScalaJS.c.scala_collection_script_Reset$.prototype.apply__Lscala_collection_script_Reset = (function() {
  return new ScalaJS.c.scala_collection_script_Reset().init___()
});
ScalaJS.c.scala_collection_script_Reset$.prototype.unapply__Lscala_collection_script_Reset__Z = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return false
  } else {
    return true
  }
});
ScalaJS.c.scala_collection_script_Reset$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_script_Reset()
});
ScalaJS.c.scala_collection_script_Reset$.prototype.unapply__Lscala_collection_script_Reset__ = (function(x$0) {
  return ScalaJS.bZ(this.unapply__Lscala_collection_script_Reset__Z(x$0))
});
ScalaJS.c.scala_collection_script_Reset$.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_script_Reset()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Reset$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Reset$.prototype = ScalaJS.c.scala_collection_script_Reset$.prototype;
ScalaJS.is.scala_collection_script_Reset$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Reset$)))
});
ScalaJS.as.scala_collection_script_Reset$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Reset$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Reset")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Reset$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Reset$)))
});
ScalaJS.asArrayOf.scala_collection_script_Reset$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Reset$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Reset;", depth)
  }
});
ScalaJS.data.scala_collection_script_Reset$ = new ScalaJS.ClassTypeData({
  scala_collection_script_Reset$: 0
}, false, "scala.collection.script.Reset$", ScalaJS.data.java_lang_Object, {
  scala_collection_script_Reset$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Reset$.prototype.$classData = ScalaJS.data.scala_collection_script_Reset$;
ScalaJS.moduleInstances.scala_collection_script_Reset = undefined;
ScalaJS.modules.scala_collection_script_Reset = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_script_Reset)) {
    ScalaJS.moduleInstances.scala_collection_script_Reset = new ScalaJS.c.scala_collection_script_Reset$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_script_Reset
});
//@ sourceMappingURL=Reset$.js.map
