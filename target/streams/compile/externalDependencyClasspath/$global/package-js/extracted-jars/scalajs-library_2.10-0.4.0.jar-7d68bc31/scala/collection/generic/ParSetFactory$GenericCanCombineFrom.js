/** @constructor */
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.constructor = ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom;
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_parallel_ParSet__Lscala_collection_parallel_Combiner = (function(from) {
  return from.genericCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_parallel_Combiner = (function() {
  return this.scala$collection$generic$ParSetFactory$GenericCanCombineFrom$$$outer__Lscala_collection_generic_ParSetFactory().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.scala$collection$generic$ParSetFactory$GenericCanCombineFrom$$$outer__Lscala_collection_generic_ParSetFactory = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.apply__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_parallel_ParSet__Lscala_collection_parallel_Combiner(ScalaJS.as.scala_collection_parallel_ParSet(from))
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.apply__O__Lscala_collection_parallel_Combiner = (function(from) {
  return this.apply__Lscala_collection_parallel_ParSet__Lscala_collection_parallel_Combiner(ScalaJS.as.scala_collection_parallel_ParSet(from))
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.init___Lscala_collection_generic_ParSetFactory = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.scala$collection$generic$ParSetFactory$GenericCanCombineFrom$$$outer__ = (function() {
  return this.scala$collection$generic$ParSetFactory$GenericCanCombineFrom$$$outer__Lscala_collection_generic_ParSetFactory()
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_parallel_ParSet__ = (function(from) {
  return this.apply__Lscala_collection_parallel_ParSet__Lscala_collection_parallel_Combiner(from)
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_parallel_Combiner(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ParSetFactory$GenericCanCombineFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype = ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype;
ScalaJS.is.scala_collection_generic_ParSetFactory$GenericCanCombineFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ParSetFactory$GenericCanCombineFrom)))
});
ScalaJS.as.scala_collection_generic_ParSetFactory$GenericCanCombineFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ParSetFactory$GenericCanCombineFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ParSetFactory$GenericCanCombineFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ParSetFactory$GenericCanCombineFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ParSetFactory$GenericCanCombineFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_ParSetFactory$GenericCanCombineFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ParSetFactory$GenericCanCombineFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ParSetFactory$GenericCanCombineFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ParSetFactory$GenericCanCombineFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_ParSetFactory$GenericCanCombineFrom: 0
}, false, "scala.collection.generic.ParSetFactory$GenericCanCombineFrom", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_ParSetFactory$GenericCanCombineFrom: 1,
  scala_collection_generic_CanCombineFrom: 1,
  scala_collection_Parallel: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ParSetFactory$GenericCanCombineFrom.prototype.$classData = ScalaJS.data.scala_collection_generic_ParSetFactory$GenericCanCombineFrom;
//@ sourceMappingURL=ParSetFactory$GenericCanCombineFrom.js.map
