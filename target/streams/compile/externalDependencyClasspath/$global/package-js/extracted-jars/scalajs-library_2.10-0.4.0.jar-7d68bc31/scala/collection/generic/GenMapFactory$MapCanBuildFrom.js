/** @constructor */
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.constructor = ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom;
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.apply__Lscala_collection_GenMap__Lscala_collection_mutable_Builder = (function(from) {
  return this.scala$collection$generic$GenMapFactory$MapCanBuildFrom$$$outer__Lscala_collection_generic_GenMapFactory().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.scala$collection$generic$GenMapFactory$MapCanBuildFrom$$$outer__Lscala_collection_generic_GenMapFactory().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.scala$collection$generic$GenMapFactory$MapCanBuildFrom$$$outer__Lscala_collection_generic_GenMapFactory = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_GenMap__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_GenMap(from))
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.init___Lscala_collection_generic_GenMapFactory = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.scala$collection$generic$GenMapFactory$MapCanBuildFrom$$$outer__ = (function() {
  return this.scala$collection$generic$GenMapFactory$MapCanBuildFrom$$$outer__Lscala_collection_generic_GenMapFactory()
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.apply__Lscala_collection_GenMap__ = (function(from) {
  return this.apply__Lscala_collection_GenMap__Lscala_collection_mutable_Builder(from)
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_mutable_Builder(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenMapFactory$MapCanBuildFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype = ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype;
ScalaJS.is.scala_collection_generic_GenMapFactory$MapCanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenMapFactory$MapCanBuildFrom)))
});
ScalaJS.as.scala_collection_generic_GenMapFactory$MapCanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenMapFactory$MapCanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenMapFactory$MapCanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenMapFactory$MapCanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenMapFactory$MapCanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenMapFactory$MapCanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenMapFactory$MapCanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenMapFactory$MapCanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenMapFactory$MapCanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenMapFactory$MapCanBuildFrom: 0
}, false, "scala.collection.generic.GenMapFactory$MapCanBuildFrom", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_GenMapFactory$MapCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom.prototype.$classData = ScalaJS.data.scala_collection_generic_GenMapFactory$MapCanBuildFrom;
//@ sourceMappingURL=GenMapFactory$MapCanBuildFrom.js.map
