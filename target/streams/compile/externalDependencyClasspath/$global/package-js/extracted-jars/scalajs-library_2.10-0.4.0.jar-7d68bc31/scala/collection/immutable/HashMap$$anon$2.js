/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2 = (function() {
  ScalaJS.c.scala_collection_immutable_HashMap$Merger.call(this);
  this.invert$2 = null;
  this.mergef$1$f = null
});
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashMap$Merger();
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap$$anon$2;
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2.prototype.apply__Lscala_Tuple2__Lscala_Tuple2__Lscala_Tuple2 = (function(kv1, kv2) {
  return ScalaJS.as.scala_Tuple2(this.mergef$1$f.apply__O__O__O(kv1, kv2))
});
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2.prototype.invert__Lscala_collection_immutable_HashMap$Merger = (function() {
  return this.invert$2
});
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2.prototype.init___Lscala_Function2 = (function(mergef$1) {
  this.mergef$1$f = mergef$1;
  ScalaJS.c.scala_collection_immutable_HashMap$Merger.prototype.init___.call(this);
  this.invert$2 = new ScalaJS.c.scala_collection_immutable_HashMap$$anon$2$$anon$3().init___Lscala_collection_immutable_HashMap$$anon$2(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap$$anon$2.prototype = ScalaJS.c.scala_collection_immutable_HashMap$$anon$2.prototype;
ScalaJS.is.scala_collection_immutable_HashMap$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap$$anon$2)))
});
ScalaJS.as.scala_collection_immutable_HashMap$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap$$anon$2: 0
}, false, "scala.collection.immutable.HashMap$$anon$2", ScalaJS.data.scala_collection_immutable_HashMap$Merger, {
  scala_collection_immutable_HashMap$$anon$2: 1,
  scala_collection_immutable_HashMap$Merger: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_HashMap$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap$$anon$2;
//@ sourceMappingURL=HashMap$$anon$2.js.map
