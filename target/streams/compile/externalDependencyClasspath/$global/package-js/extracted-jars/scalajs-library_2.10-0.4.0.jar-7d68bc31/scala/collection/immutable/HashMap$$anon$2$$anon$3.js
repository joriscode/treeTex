/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3 = (function() {
  ScalaJS.c.scala_collection_immutable_HashMap$Merger.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashMap$Merger();
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3;
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3.prototype.apply__Lscala_Tuple2__Lscala_Tuple2__Lscala_Tuple2 = (function(kv1, kv2) {
  return ScalaJS.as.scala_Tuple2(this.$$outer$2.mergef$1$f.apply__O__O__O(kv2, kv1))
});
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3.prototype.invert__Lscala_collection_immutable_HashMap$Merger = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3.prototype.init___Lscala_collection_immutable_HashMap$$anon$2 = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_immutable_HashMap$Merger.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap$$anon$2$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap$$anon$2$$anon$3.prototype = ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3.prototype;
ScalaJS.is.scala_collection_immutable_HashMap$$anon$2$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap$$anon$2$$anon$3)))
});
ScalaJS.as.scala_collection_immutable_HashMap$$anon$2$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap$$anon$2$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap$$anon$2$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap$$anon$2$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap$$anon$2$$anon$3)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap$$anon$2$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap$$anon$2$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$$anon$2$$anon$3;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap$$anon$2$$anon$3 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap$$anon$2$$anon$3: 0
}, false, "scala.collection.immutable.HashMap$$anon$2$$anon$3", ScalaJS.data.scala_collection_immutable_HashMap$Merger, {
  scala_collection_immutable_HashMap$$anon$2$$anon$3: 1,
  scala_collection_immutable_HashMap$Merger: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap$$anon$2$$anon$3;
//@ sourceMappingURL=HashMap$$anon$2$$anon$3.js.map
