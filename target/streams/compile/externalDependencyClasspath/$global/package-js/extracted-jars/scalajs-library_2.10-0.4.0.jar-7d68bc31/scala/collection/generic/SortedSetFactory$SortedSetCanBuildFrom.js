/** @constructor */
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ord$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.constructor = ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom;
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.apply__Lscala_collection_SortedSet__Lscala_collection_mutable_Builder = (function(from) {
  return this.scala$collection$generic$SortedSetFactory$SortedSetCanBuildFrom$$$outer__Lscala_collection_generic_SortedSetFactory().newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(this.ord$1)
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.scala$collection$generic$SortedSetFactory$SortedSetCanBuildFrom$$$outer__Lscala_collection_generic_SortedSetFactory().newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(this.ord$1)
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.scala$collection$generic$SortedSetFactory$SortedSetCanBuildFrom$$$outer__Lscala_collection_generic_SortedSetFactory = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_SortedSet__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_SortedSet(from))
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.init___Lscala_collection_generic_SortedSetFactory__Lscala_math_Ordering = (function($$outer, ord) {
  this.ord$1 = ord;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.scala$collection$generic$SortedSetFactory$SortedSetCanBuildFrom$$$outer__ = (function() {
  return this.scala$collection$generic$SortedSetFactory$SortedSetCanBuildFrom$$$outer__Lscala_collection_generic_SortedSetFactory()
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.apply__Lscala_collection_SortedSet__ = (function(from) {
  return this.apply__Lscala_collection_SortedSet__Lscala_collection_mutable_Builder(from)
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_mutable_Builder(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype = ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype;
ScalaJS.is.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom)))
});
ScalaJS.as.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.SortedSetFactory$SortedSetCanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.SortedSetFactory$SortedSetCanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom: 0
}, false, "scala.collection.generic.SortedSetFactory$SortedSetCanBuildFrom", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom.prototype.$classData = ScalaJS.data.scala_collection_generic_SortedSetFactory$SortedSetCanBuildFrom;
//@ sourceMappingURL=SortedSetFactory$SortedSetCanBuildFrom.js.map
