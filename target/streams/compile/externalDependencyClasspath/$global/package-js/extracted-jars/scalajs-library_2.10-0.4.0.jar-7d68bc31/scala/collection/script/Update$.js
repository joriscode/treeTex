/** @constructor */
ScalaJS.c.scala_collection_script_Update$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_script_Update$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_script_Update$.prototype.constructor = ScalaJS.c.scala_collection_script_Update$;
ScalaJS.c.scala_collection_script_Update$.prototype.toString__T = (function() {
  return "Update"
});
ScalaJS.c.scala_collection_script_Update$.prototype.apply__Lscala_collection_script_Location__O__Lscala_collection_script_Update = (function(location, elem) {
  return new ScalaJS.c.scala_collection_script_Update().init___Lscala_collection_script_Location__O(location, elem)
});
ScalaJS.c.scala_collection_script_Update$.prototype.unapply__Lscala_collection_script_Update__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.location__Lscala_collection_script_Location(), x$0.elem__O()))
  }
});
ScalaJS.c.scala_collection_script_Update$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_script_Update()
});
ScalaJS.c.scala_collection_script_Update$.prototype.unapply__Lscala_collection_script_Update__ = (function(x$0) {
  return this.unapply__Lscala_collection_script_Update__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_script_Update$.prototype.apply__Lscala_collection_script_Location__O__ = (function(location, elem) {
  return this.apply__Lscala_collection_script_Location__O__Lscala_collection_script_Update(location, elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Update$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Update$.prototype = ScalaJS.c.scala_collection_script_Update$.prototype;
ScalaJS.is.scala_collection_script_Update$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Update$)))
});
ScalaJS.as.scala_collection_script_Update$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Update$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Update")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Update$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Update$)))
});
ScalaJS.asArrayOf.scala_collection_script_Update$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Update$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Update;", depth)
  }
});
ScalaJS.data.scala_collection_script_Update$ = new ScalaJS.ClassTypeData({
  scala_collection_script_Update$: 0
}, false, "scala.collection.script.Update$", ScalaJS.data.java_lang_Object, {
  scala_collection_script_Update$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Update$.prototype.$classData = ScalaJS.data.scala_collection_script_Update$;
ScalaJS.moduleInstances.scala_collection_script_Update = undefined;
ScalaJS.modules.scala_collection_script_Update = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_script_Update)) {
    ScalaJS.moduleInstances.scala_collection_script_Update = new ScalaJS.c.scala_collection_script_Update$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_script_Update
});
//@ sourceMappingURL=Update$.js.map
