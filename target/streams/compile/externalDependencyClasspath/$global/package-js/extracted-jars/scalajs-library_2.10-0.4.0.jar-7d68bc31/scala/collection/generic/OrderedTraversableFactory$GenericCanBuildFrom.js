/** @constructor */
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ord$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.constructor = ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom;
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.apply__Lscala_collection_Traversable__Lscala_collection_mutable_Builder = (function(from) {
  return ScalaJS.as.scala_collection_generic_GenericOrderedTraversableTemplate(from).genericOrderedBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(this.ord$1)
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.scala$collection$generic$OrderedTraversableFactory$GenericCanBuildFrom$$$outer__Lscala_collection_generic_OrderedTraversableFactory().newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(this.ord$1)
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.scala$collection$generic$OrderedTraversableFactory$GenericCanBuildFrom$$$outer__Lscala_collection_generic_OrderedTraversableFactory = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_Traversable__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_Traversable(from))
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.init___Lscala_collection_generic_OrderedTraversableFactory__Lscala_math_Ordering = (function($$outer, ord) {
  this.ord$1 = ord;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.scala$collection$generic$OrderedTraversableFactory$GenericCanBuildFrom$$$outer__ = (function() {
  return this.scala$collection$generic$OrderedTraversableFactory$GenericCanBuildFrom$$$outer__Lscala_collection_generic_OrderedTraversableFactory()
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.apply__Lscala_collection_Traversable__ = (function(from) {
  return this.apply__Lscala_collection_Traversable__Lscala_collection_mutable_Builder(from)
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_mutable_Builder(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype = ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype;
ScalaJS.is.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom)))
});
ScalaJS.as.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.OrderedTraversableFactory$GenericCanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.OrderedTraversableFactory$GenericCanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom: 0
}, false, "scala.collection.generic.OrderedTraversableFactory$GenericCanBuildFrom", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom.prototype.$classData = ScalaJS.data.scala_collection_generic_OrderedTraversableFactory$GenericCanBuildFrom;
//@ sourceMappingURL=OrderedTraversableFactory$GenericCanBuildFrom.js.map
