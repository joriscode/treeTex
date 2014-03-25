/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper = (function() {
  ScalaJS.c.java_util_AbstractSet.call(this);
  this.scala$collection$convert$Wrappers$SetWrapper$$underlying$f = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype = new ScalaJS.inheritable.java_util_AbstractSet();
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype.size__I = (function() {
  return this.scala$collection$convert$Wrappers$SetWrapper$$underlying$f.size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype.iterator__Ljava_util_Iterator = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper$$anon$4().init___Lscala_collection_convert_Wrappers$SetWrapper(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype.scala$collection$convert$Wrappers$SetWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_Set = (function($$outer, underlying) {
  this.scala$collection$convert$Wrappers$SetWrapper$$underlying$f = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_util_AbstractSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype.scala$collection$convert$Wrappers$SetWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$SetWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$SetWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$SetWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$SetWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$SetWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$SetWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$SetWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$SetWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$SetWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$SetWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$SetWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$SetWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$SetWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$SetWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$SetWrapper: 0
}, false, "scala.collection.convert.Wrappers$SetWrapper", ScalaJS.data.java_util_AbstractSet, {
  scala_collection_convert_Wrappers$SetWrapper: 1,
  java_util_AbstractSet: 1,
  java_util_Set: 1,
  java_util_AbstractCollection: 1,
  java_util_Collection: 1,
  java_lang_Iterable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$SetWrapper;
//@ sourceMappingURL=Wrappers$SetWrapper.js.map
