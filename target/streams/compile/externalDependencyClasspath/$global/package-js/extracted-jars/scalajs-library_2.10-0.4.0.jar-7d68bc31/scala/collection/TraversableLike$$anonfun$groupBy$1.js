/** @constructor */
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.m$1$2 = null;
  this.f$6$2 = null
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype.constructor = ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1;
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype.apply__O__Lscala_collection_mutable_Builder = (function(elem) {
  var key = this.f$6$2.apply__O__O(elem);
  var bldr = ScalaJS.as.scala_collection_mutable_Builder(this.m$1$2.getOrElseUpdate__O__Lscala_Function0__O(key, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return arg$outer.scala$collection$TraversableLike$$anonfun$$$outer__Lscala_collection_TraversableLike().newBuilder__Lscala_collection_mutable_Builder()
    })
  })(this))));
  return bldr.$$plus$eq__O__Lscala_collection_mutable_Builder(elem)
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype.scala$collection$TraversableLike$$anonfun$$$outer__Lscala_collection_TraversableLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype.apply__O__O = (function(v1) {
  return this.apply__O__Lscala_collection_mutable_Builder(v1)
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype.init___Lscala_collection_TraversableLike__Lscala_collection_mutable_Map__Lscala_Function1 = (function($$outer, m$1, f$6) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.m$1$2 = m$1;
  this.f$6$2 = f$6;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype.scala$collection$TraversableLike$$anonfun$$$outer__ = (function() {
  return this.scala$collection$TraversableLike$$anonfun$$$outer__Lscala_collection_TraversableLike()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableLike$$anonfun$groupBy$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype = ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype;
ScalaJS.is.scala_collection_TraversableLike$$anonfun$groupBy$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableLike$$anonfun$groupBy$1)))
});
ScalaJS.as.scala_collection_TraversableLike$$anonfun$groupBy$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableLike$$anonfun$groupBy$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableLike$$anonfun$groupBy$1")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableLike$$anonfun$groupBy$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableLike$$anonfun$groupBy$1)))
});
ScalaJS.asArrayOf.scala_collection_TraversableLike$$anonfun$groupBy$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableLike$$anonfun$groupBy$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableLike$$anonfun$groupBy$1;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableLike$$anonfun$groupBy$1 = new ScalaJS.ClassTypeData({
  scala_collection_TraversableLike$$anonfun$groupBy$1: 0
}, false, "scala.collection.TraversableLike$$anonfun$groupBy$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_TraversableLike$$anonfun$groupBy$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1.prototype.$classData = ScalaJS.data.scala_collection_TraversableLike$$anonfun$groupBy$1;
//@ sourceMappingURL=TraversableLike$$anonfun$groupBy$1.js.map
