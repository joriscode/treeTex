/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMap$Tip$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMap$Tip$;
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype.toString__T = (function() {
  return "Tip"
});
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype.apply__I__O__Lscala_collection_immutable_IntMap$Tip = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_IntMap$Tip().init___I__O(key, value)
});
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype.unapply__Lscala_collection_immutable_IntMap$Tip__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(x$0.key__I()), x$0.value__O()))
  }
});
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_IntMap$Tip()
});
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype.unapply__Lscala_collection_immutable_IntMap$Tip__ = (function(x$0) {
  return this.unapply__Lscala_collection_immutable_IntMap$Tip__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype.apply__I__O__ = (function(key, value) {
  return this.apply__I__O__Lscala_collection_immutable_IntMap$Tip(key, value)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMap$Tip$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMap$Tip$.prototype = ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype;
ScalaJS.is.scala_collection_immutable_IntMap$Tip$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMap$Tip$)))
});
ScalaJS.as.scala_collection_immutable_IntMap$Tip$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMap$Tip$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMap$Tip")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMap$Tip$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMap$Tip$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMap$Tip$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMap$Tip$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMap$Tip;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMap$Tip$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMap$Tip$: 0
}, false, "scala.collection.immutable.IntMap$Tip$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_IntMap$Tip$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_IntMap$Tip$.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMap$Tip$;
ScalaJS.moduleInstances.scala_collection_immutable_IntMap$Tip = undefined;
ScalaJS.modules.scala_collection_immutable_IntMap$Tip = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_IntMap$Tip)) {
    ScalaJS.moduleInstances.scala_collection_immutable_IntMap$Tip = new ScalaJS.c.scala_collection_immutable_IntMap$Tip$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_IntMap$Tip
});
//@ sourceMappingURL=IntMap$Tip$.js.map
