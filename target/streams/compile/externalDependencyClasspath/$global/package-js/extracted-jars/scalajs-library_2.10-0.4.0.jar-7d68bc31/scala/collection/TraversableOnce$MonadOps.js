/** @constructor */
ScalaJS.c.scala_collection_TraversableOnce$MonadOps = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.trav$1 = null
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.constructor = ScalaJS.c.scala_collection_TraversableOnce$MonadOps;
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.map__Lscala_Function1__Lscala_collection_TraversableOnce = (function(f) {
  return this.trav$1.toIterator__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(f)
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.flatMap__Lscala_Function1__Lscala_collection_TraversableOnce = (function(f) {
  return this.trav$1.toIterator__Lscala_collection_Iterator().flatMap__Lscala_Function1__Lscala_collection_Iterator(f)
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.withFilter__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return this.trav$1.toIterator__Lscala_collection_Iterator().filter__Lscala_Function1__Lscala_collection_Iterator(p)
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.filter__Lscala_Function1__Lscala_collection_TraversableOnce = (function(p) {
  return this.withFilter__Lscala_Function1__Lscala_collection_Iterator(p)
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.init___Lscala_collection_TraversableOnce = (function(trav) {
  this.trav$1 = trav;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.filter__Lscala_Function1__ = (function(p) {
  return this.filter__Lscala_Function1__Lscala_collection_TraversableOnce(p)
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.withFilter__Lscala_Function1__ = (function(p$2) {
  return this.withFilter__Lscala_Function1__Lscala_collection_Iterator(p$2)
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.flatMap__Lscala_Function1__ = (function(f) {
  return this.flatMap__Lscala_Function1__Lscala_collection_TraversableOnce(f)
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.map__Lscala_Function1__ = (function(f$2) {
  return this.map__Lscala_Function1__Lscala_collection_TraversableOnce(f$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableOnce$MonadOps = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableOnce$MonadOps.prototype = ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype;
ScalaJS.is.scala_collection_TraversableOnce$MonadOps = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableOnce$MonadOps)))
});
ScalaJS.as.scala_collection_TraversableOnce$MonadOps = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableOnce$MonadOps(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableOnce$MonadOps")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableOnce$MonadOps = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableOnce$MonadOps)))
});
ScalaJS.asArrayOf.scala_collection_TraversableOnce$MonadOps = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableOnce$MonadOps(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableOnce$MonadOps;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableOnce$MonadOps = new ScalaJS.ClassTypeData({
  scala_collection_TraversableOnce$MonadOps: 0
}, false, "scala.collection.TraversableOnce$MonadOps", ScalaJS.data.java_lang_Object, {
  scala_collection_TraversableOnce$MonadOps: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableOnce$MonadOps.prototype.$classData = ScalaJS.data.scala_collection_TraversableOnce$MonadOps;
//@ sourceMappingURL=TraversableOnce$MonadOps.js.map
