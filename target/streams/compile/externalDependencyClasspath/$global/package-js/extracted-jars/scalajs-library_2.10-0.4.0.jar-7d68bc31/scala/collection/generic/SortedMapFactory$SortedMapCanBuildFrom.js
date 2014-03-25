/** @constructor */
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ord$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.constructor = ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom;
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.apply__Lscala_collection_SortedMap__Lscala_collection_mutable_Builder = (function(from) {
  return this.scala$collection$generic$SortedMapFactory$SortedMapCanBuildFrom$$$outer__Lscala_collection_generic_SortedMapFactory().newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(this.ord$1)
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.scala$collection$generic$SortedMapFactory$SortedMapCanBuildFrom$$$outer__Lscala_collection_generic_SortedMapFactory().newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(this.ord$1)
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.scala$collection$generic$SortedMapFactory$SortedMapCanBuildFrom$$$outer__Lscala_collection_generic_SortedMapFactory = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_SortedMap__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_SortedMap(from))
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.init___Lscala_collection_generic_SortedMapFactory__Lscala_math_Ordering = (function($$outer, ord) {
  this.ord$1 = ord;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.scala$collection$generic$SortedMapFactory$SortedMapCanBuildFrom$$$outer__ = (function() {
  return this.scala$collection$generic$SortedMapFactory$SortedMapCanBuildFrom$$$outer__Lscala_collection_generic_SortedMapFactory()
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.apply__Lscala_collection_SortedMap__ = (function(from) {
  return this.apply__Lscala_collection_SortedMap__Lscala_collection_mutable_Builder(from)
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_mutable_Builder(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype = ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype;
ScalaJS.is.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom)))
});
ScalaJS.as.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.SortedMapFactory$SortedMapCanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.SortedMapFactory$SortedMapCanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom: 0
}, false, "scala.collection.generic.SortedMapFactory$SortedMapCanBuildFrom", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom.prototype.$classData = ScalaJS.data.scala_collection_generic_SortedMapFactory$SortedMapCanBuildFrom;
//@ sourceMappingURL=SortedMapFactory$SortedMapCanBuildFrom.js.map
