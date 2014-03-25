/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1 = (function() {
  ScalaJS.c.java_util_AbstractSet.call(this);
  this.$$outer$3 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype = new ScalaJS.inheritable.java_util_AbstractSet();
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1;
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype.size__I = (function() {
  return this.$$outer$3.size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype.iterator__Ljava_util_Iterator = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1$$anon$5().init___Lscala_collection_convert_Wrappers$MapWrapper$$anon$1(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype.scala$collection$convert$Wrappers$MapWrapper$$anon$$$outer__Lscala_collection_convert_Wrappers$MapWrapper = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype.init___Lscala_collection_convert_Wrappers$MapWrapper = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  ScalaJS.c.java_util_AbstractSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype.scala$collection$convert$Wrappers$MapWrapper$$anon$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$MapWrapper$$anon$$$outer__Lscala_collection_convert_Wrappers$MapWrapper()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MapWrapper$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MapWrapper$$anon$1)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MapWrapper$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MapWrapper$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MapWrapper$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MapWrapper$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MapWrapper$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MapWrapper$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MapWrapper$$anon$1: 0
}, false, "scala.collection.convert.Wrappers$MapWrapper$$anon$1", ScalaJS.data.java_util_AbstractSet, {
  scala_collection_convert_Wrappers$MapWrapper$$anon$1: 1,
  java_util_AbstractSet: 1,
  java_util_Set: 1,
  java_util_AbstractCollection: 1,
  java_util_Collection: 1,
  java_lang_Iterable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper$$anon$1;
//@ sourceMappingURL=Wrappers$MapWrapper$$anon$1.js.map
