/** @constructor */
ScalaJS.c.scala_collection_script_Include$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_script_Include$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_script_Include$.prototype.constructor = ScalaJS.c.scala_collection_script_Include$;
ScalaJS.c.scala_collection_script_Include$.prototype.toString__T = (function() {
  return "Include"
});
ScalaJS.c.scala_collection_script_Include$.prototype.apply__Lscala_collection_script_Location__O__Lscala_collection_script_Include = (function(location, elem) {
  return new ScalaJS.c.scala_collection_script_Include().init___Lscala_collection_script_Location__O(location, elem)
});
ScalaJS.c.scala_collection_script_Include$.prototype.unapply__Lscala_collection_script_Include__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.location__Lscala_collection_script_Location(), x$0.elem__O()))
  }
});
ScalaJS.c.scala_collection_script_Include$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_script_Include()
});
ScalaJS.c.scala_collection_script_Include$.prototype.unapply__Lscala_collection_script_Include__ = (function(x$0) {
  return this.unapply__Lscala_collection_script_Include__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_script_Include$.prototype.apply__Lscala_collection_script_Location__O__ = (function(location, elem) {
  return this.apply__Lscala_collection_script_Location__O__Lscala_collection_script_Include(location, elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Include$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Include$.prototype = ScalaJS.c.scala_collection_script_Include$.prototype;
ScalaJS.is.scala_collection_script_Include$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Include$)))
});
ScalaJS.as.scala_collection_script_Include$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Include$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Include")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Include$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Include$)))
});
ScalaJS.asArrayOf.scala_collection_script_Include$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Include$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Include;", depth)
  }
});
ScalaJS.data.scala_collection_script_Include$ = new ScalaJS.ClassTypeData({
  scala_collection_script_Include$: 0
}, false, "scala.collection.script.Include$", ScalaJS.data.java_lang_Object, {
  scala_collection_script_Include$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Include$.prototype.$classData = ScalaJS.data.scala_collection_script_Include$;
ScalaJS.moduleInstances.scala_collection_script_Include = undefined;
ScalaJS.modules.scala_collection_script_Include = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_script_Include)) {
    ScalaJS.moduleInstances.scala_collection_script_Include = new ScalaJS.c.scala_collection_script_Include$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_script_Include
});
//@ sourceMappingURL=Include$.js.map
