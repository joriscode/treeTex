/** @constructor */
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.constructor = ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap;
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.apply__Lscala_collection_parallel_ParMap__Lscala_collection_parallel_Combiner = (function(from) {
  return from.genericMapCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.apply__Lscala_collection_parallel_Combiner = (function() {
  return this.scala$collection$generic$ParMapFactory$CanCombineFromMap$$$outer__Lscala_collection_generic_ParMapFactory().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.scala$collection$generic$ParMapFactory$CanCombineFromMap$$$outer__Lscala_collection_generic_ParMapFactory = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.apply__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_parallel_ParMap__Lscala_collection_parallel_Combiner(ScalaJS.as.scala_collection_parallel_ParMap(from))
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.apply__O__Lscala_collection_parallel_Combiner = (function(from) {
  return this.apply__Lscala_collection_parallel_ParMap__Lscala_collection_parallel_Combiner(ScalaJS.as.scala_collection_parallel_ParMap(from))
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.init___Lscala_collection_generic_ParMapFactory = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.scala$collection$generic$ParMapFactory$CanCombineFromMap$$$outer__ = (function() {
  return this.scala$collection$generic$ParMapFactory$CanCombineFromMap$$$outer__Lscala_collection_generic_ParMapFactory()
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.apply__Lscala_collection_parallel_ParMap__ = (function(from) {
  return this.apply__Lscala_collection_parallel_ParMap__Lscala_collection_parallel_Combiner(from)
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_parallel_Combiner(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ParMapFactory$CanCombineFromMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype = ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype;
ScalaJS.is.scala_collection_generic_ParMapFactory$CanCombineFromMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ParMapFactory$CanCombineFromMap)))
});
ScalaJS.as.scala_collection_generic_ParMapFactory$CanCombineFromMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ParMapFactory$CanCombineFromMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ParMapFactory$CanCombineFromMap")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ParMapFactory$CanCombineFromMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ParMapFactory$CanCombineFromMap)))
});
ScalaJS.asArrayOf.scala_collection_generic_ParMapFactory$CanCombineFromMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ParMapFactory$CanCombineFromMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ParMapFactory$CanCombineFromMap;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ParMapFactory$CanCombineFromMap = new ScalaJS.ClassTypeData({
  scala_collection_generic_ParMapFactory$CanCombineFromMap: 0
}, false, "scala.collection.generic.ParMapFactory$CanCombineFromMap", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_ParMapFactory$CanCombineFromMap: 1,
  scala_collection_generic_CanCombineFrom: 1,
  scala_collection_Parallel: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ParMapFactory$CanCombineFromMap.prototype.$classData = ScalaJS.data.scala_collection_generic_ParMapFactory$CanCombineFromMap;
//@ sourceMappingURL=ParMapFactory$CanCombineFromMap.js.map
