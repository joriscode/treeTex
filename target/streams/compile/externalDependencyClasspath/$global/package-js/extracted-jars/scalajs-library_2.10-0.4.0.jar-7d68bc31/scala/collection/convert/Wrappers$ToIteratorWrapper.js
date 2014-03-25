/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.underlying$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype.asJava__Lscala_collection_convert_Wrappers$IteratorWrapper = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_Iterator(this.scala$collection$convert$Wrappers$ToIteratorWrapper$$$outer__Lscala_collection_convert_Wrappers(), this.underlying$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype.scala$collection$convert$Wrappers$ToIteratorWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_Iterator = (function($$outer, underlying) {
  this.underlying$1 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype.scala$collection$convert$Wrappers$ToIteratorWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$ToIteratorWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype.asJava__ = (function() {
  return this.asJava__Lscala_collection_convert_Wrappers$IteratorWrapper()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$ToIteratorWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$ToIteratorWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$ToIteratorWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$ToIteratorWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$ToIteratorWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$ToIteratorWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$ToIteratorWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$ToIteratorWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$ToIteratorWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$ToIteratorWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$ToIteratorWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$ToIteratorWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$ToIteratorWrapper: 0
}, false, "scala.collection.convert.Wrappers$ToIteratorWrapper", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$ToIteratorWrapper: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$ToIteratorWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$ToIteratorWrapper;
//@ sourceMappingURL=Wrappers$ToIteratorWrapper.js.map
