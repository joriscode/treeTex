/** @constructor */
ScalaJS.c.scala_collection_SortedMap$ = (function() {
  ScalaJS.c.scala_collection_generic_SortedMapFactory.call(this)
});
ScalaJS.c.scala_collection_SortedMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_SortedMapFactory();
ScalaJS.c.scala_collection_SortedMap$.prototype.constructor = ScalaJS.c.scala_collection_SortedMap$;
ScalaJS.c.scala_collection_SortedMap$.prototype.empty__Lscala_math_Ordering__Lscala_collection_SortedMap = (function(ord) {
  return ScalaJS.modules.scala_collection_immutable_SortedMap().empty__Lscala_math_Ordering__Lscala_collection_immutable_SortedMap(ord)
});
ScalaJS.c.scala_collection_SortedMap$.prototype.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom = (function(ord) {
  return new ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom().init___Lscala_collection_generic_SortedMapFactory__Lscala_math_Ordering(this, ord)
});
ScalaJS.c.scala_collection_SortedMap$.prototype.canBuildFrom__Lscala_math_Ordering__ = (function(ord) {
  return this.canBuildFrom__Lscala_math_Ordering__Lscala_collection_generic_CanBuildFrom(ord)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SortedMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SortedMap$.prototype = ScalaJS.c.scala_collection_SortedMap$.prototype;
ScalaJS.is.scala_collection_SortedMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SortedMap$)))
});
ScalaJS.as.scala_collection_SortedMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_SortedMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SortedMap")
  }
});
ScalaJS.isArrayOf.scala_collection_SortedMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SortedMap$)))
});
ScalaJS.asArrayOf.scala_collection_SortedMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SortedMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SortedMap;", depth)
  }
});
ScalaJS.data.scala_collection_SortedMap$ = new ScalaJS.ClassTypeData({
  scala_collection_SortedMap$: 0
}, false, "scala.collection.SortedMap$", ScalaJS.data.scala_collection_generic_SortedMapFactory, {
  scala_collection_SortedMap$: 1,
  scala_collection_generic_SortedMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_SortedMap$.prototype.$classData = ScalaJS.data.scala_collection_SortedMap$;
ScalaJS.moduleInstances.scala_collection_SortedMap = undefined;
ScalaJS.modules.scala_collection_SortedMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_SortedMap)) {
    ScalaJS.moduleInstances.scala_collection_SortedMap = new ScalaJS.c.scala_collection_SortedMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_SortedMap
});
//@ sourceMappingURL=SortedMap$.js.map
