/** @constructor */
ScalaJS.c.scala_collection_mutable_OpenHashMap$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype.constructor = ScalaJS.c.scala_collection_mutable_OpenHashMap$;
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype.apply__Lscala_collection_Seq__Lscala_collection_mutable_OpenHashMap = (function(elems) {
  return ScalaJS.as.scala_collection_mutable_OpenHashMap(new ScalaJS.c.scala_collection_mutable_OpenHashMap().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype.empty__Lscala_collection_mutable_OpenHashMap = (function() {
  return new ScalaJS.c.scala_collection_mutable_OpenHashMap().init___()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype.nextPowerOfTwo__I__I = (function(i) {
  return (ScalaJS.modules.scala_collection_generic_BitOperations$Int().highestOneBit__I__I(i) << 1)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype.nextPowerOfTwo__I__ = (function(i) {
  return ScalaJS.bI(this.nextPowerOfTwo__I__I(i))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_mutable_OpenHashMap()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype.apply__Lscala_collection_Seq__ = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_mutable_OpenHashMap(elems)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_OpenHashMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_OpenHashMap$.prototype = ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype;
ScalaJS.is.scala_collection_mutable_OpenHashMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_OpenHashMap$)))
});
ScalaJS.as.scala_collection_mutable_OpenHashMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_OpenHashMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.OpenHashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_OpenHashMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_OpenHashMap$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_OpenHashMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_OpenHashMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.OpenHashMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_OpenHashMap$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_OpenHashMap$: 0
}, false, "scala.collection.mutable.OpenHashMap$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_OpenHashMap$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$.prototype.$classData = ScalaJS.data.scala_collection_mutable_OpenHashMap$;
ScalaJS.moduleInstances.scala_collection_mutable_OpenHashMap = undefined;
ScalaJS.modules.scala_collection_mutable_OpenHashMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_OpenHashMap)) {
    ScalaJS.moduleInstances.scala_collection_mutable_OpenHashMap = new ScalaJS.c.scala_collection_mutable_OpenHashMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_OpenHashMap
});
//@ sourceMappingURL=OpenHashMap$.js.map
