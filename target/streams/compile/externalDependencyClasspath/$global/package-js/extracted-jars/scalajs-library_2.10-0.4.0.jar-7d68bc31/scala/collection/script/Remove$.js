/** @constructor */
ScalaJS.c.scala_collection_script_Remove$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_script_Remove$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_script_Remove$.prototype.constructor = ScalaJS.c.scala_collection_script_Remove$;
ScalaJS.c.scala_collection_script_Remove$.prototype.toString__T = (function() {
  return "Remove"
});
ScalaJS.c.scala_collection_script_Remove$.prototype.apply__Lscala_collection_script_Location__O__Lscala_collection_script_Remove = (function(location, elem) {
  return new ScalaJS.c.scala_collection_script_Remove().init___Lscala_collection_script_Location__O(location, elem)
});
ScalaJS.c.scala_collection_script_Remove$.prototype.unapply__Lscala_collection_script_Remove__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.location__Lscala_collection_script_Location(), x$0.elem__O()))
  }
});
ScalaJS.c.scala_collection_script_Remove$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_script_Remove()
});
ScalaJS.c.scala_collection_script_Remove$.prototype.unapply__Lscala_collection_script_Remove__ = (function(x$0) {
  return this.unapply__Lscala_collection_script_Remove__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_script_Remove$.prototype.apply__Lscala_collection_script_Location__O__ = (function(location, elem) {
  return this.apply__Lscala_collection_script_Location__O__Lscala_collection_script_Remove(location, elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Remove$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Remove$.prototype = ScalaJS.c.scala_collection_script_Remove$.prototype;
ScalaJS.is.scala_collection_script_Remove$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Remove$)))
});
ScalaJS.as.scala_collection_script_Remove$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Remove$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Remove")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Remove$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Remove$)))
});
ScalaJS.asArrayOf.scala_collection_script_Remove$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Remove$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Remove;", depth)
  }
});
ScalaJS.data.scala_collection_script_Remove$ = new ScalaJS.ClassTypeData({
  scala_collection_script_Remove$: 0
}, false, "scala.collection.script.Remove$", ScalaJS.data.java_lang_Object, {
  scala_collection_script_Remove$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Remove$.prototype.$classData = ScalaJS.data.scala_collection_script_Remove$;
ScalaJS.moduleInstances.scala_collection_script_Remove = undefined;
ScalaJS.modules.scala_collection_script_Remove = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_script_Remove)) {
    ScalaJS.moduleInstances.scala_collection_script_Remove = new ScalaJS.c.scala_collection_script_Remove$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_script_Remove
});
//@ sourceMappingURL=Remove$.js.map
