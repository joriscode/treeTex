/** @constructor */
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.constructor = ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom;
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__Lscala_collection_GenTraversable__Lscala_collection_mutable_Builder = (function(from) {
  return from.genericBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.scala$collection$generic$GenTraversableFactory$GenericCanBuildFrom$$$outer__Lscala_collection_generic_GenTraversableFactory().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.scala$collection$generic$GenTraversableFactory$GenericCanBuildFrom$$$outer__Lscala_collection_generic_GenTraversableFactory = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_GenTraversable__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_GenTraversable(from))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.init___Lscala_collection_generic_GenTraversableFactory = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.scala$collection$generic$GenTraversableFactory$GenericCanBuildFrom$$$outer__ = (function() {
  return this.scala$collection$generic$GenTraversableFactory$GenericCanBuildFrom$$$outer__Lscala_collection_generic_GenTraversableFactory()
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__Lscala_collection_GenTraversable__ = (function(from) {
  return this.apply__Lscala_collection_GenTraversable__Lscala_collection_mutable_Builder(from)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_mutable_Builder(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype = ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype;
ScalaJS.is.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom)))
});
ScalaJS.as.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenTraversableFactory$GenericCanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenTraversableFactory$GenericCanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom: 0
}, false, "scala.collection.generic.GenTraversableFactory$GenericCanBuildFrom", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.$classData = ScalaJS.data.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom;
//@ sourceMappingURL=GenTraversableFactory$GenericCanBuildFrom.js.map
