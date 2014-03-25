/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMap$Tip$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMap$Tip$;
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype.toString__T = (function() {
  return "Tip"
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype.apply__J__O__Lscala_collection_immutable_LongMap$Tip = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value)
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype.unapply__Lscala_collection_immutable_LongMap$Tip__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bJ(x$0.key__J()), x$0.value__O()))
  }
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_LongMap$Tip()
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype.unapply__Lscala_collection_immutable_LongMap$Tip__ = (function(x$0) {
  return this.unapply__Lscala_collection_immutable_LongMap$Tip__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype.apply__J__O__ = (function(key, value) {
  return this.apply__J__O__Lscala_collection_immutable_LongMap$Tip(key, value)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMap$Tip$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMap$Tip$.prototype = ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype;
ScalaJS.is.scala_collection_immutable_LongMap$Tip$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMap$Tip$)))
});
ScalaJS.as.scala_collection_immutable_LongMap$Tip$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMap$Tip$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMap$Tip")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Tip$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMap$Tip$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMap$Tip$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Tip$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMap$Tip;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMap$Tip$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMap$Tip$: 0
}, false, "scala.collection.immutable.LongMap$Tip$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_LongMap$Tip$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip$.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMap$Tip$;
ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Tip = undefined;
ScalaJS.modules.scala_collection_immutable_LongMap$Tip = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Tip)) {
    ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Tip = new ScalaJS.c.scala_collection_immutable_LongMap$Tip$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Tip
});
//@ sourceMappingURL=LongMap$Tip$.js.map
